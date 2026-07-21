import { genkit } from 'genkit';
import * as fs from 'fs';
import * as path from 'path';

// Fallback to load .env if process.env.HF_API_KEY is not set by the server runner
if (!process.env['HF_API_KEY']) {
  try {
    // Try to find .env in the project root or src directory
    const envPaths = [
      path.resolve(process.cwd(), 'src', '.env'),
      path.resolve(process.cwd(), '.env'),
    ];
    
    for (const envPath of envPaths) {
      if (fs.existsSync(envPath)) {
        const envFile = fs.readFileSync(envPath, 'utf8');
        envFile.split('\n').forEach(line => {
          const match = line.match(/^([^=]+)=(.*)$/);
          if (match) {
            process.env[match[1].trim()] = match[2].trim();
          }
        });
        break;
      }
    }
  } catch (e) {
    console.warn("Failed to load .env manually", e);
  }
}

const ai = genkit({});

const openRouterModel = ai.defineModel({
  name: 'openrouter/hy3',
}, async (request) => {
  const apiKey = process.env['HF_API_KEY'];
  
  if (!apiKey) {
    throw new Error("Missing HF_API_KEY in environment variables");
  }

  const messages = request.messages.map(m => ({
    role: m.role === 'model' ? 'assistant' : m.role,
    content: typeof m.content === 'string' ? m.content : m.content.map((c: any) => c.text).join('')
  }));

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://aswinthgt.vercel.app',
      'X-Title': 'Aswinth Portfolio AI'
    },
    body: JSON.stringify({
      model: 'cohere/north-mini-code:free',
      messages,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`OpenRouter API failed: ${res.status} ${errorText}`);
  }

  const data = await res.json();
  return {
    message: {
      role: 'model',
      content: [{ text: data.choices[0].message.content }]
    }
  };
});

import { preamblePrompt, responsePrompt } from './prompts';
import { websiteContent } from './website_content';

export const chat = async (req: any, res: any) => {
  try {
    const { message, messages } = req.body;

    let history: any[] = [];
    let promptString = "";

    if (messages && Array.isArray(messages) && messages.length > 0) {
      // The frontend passed the full message history
      // We take the last message, wrap it in responsePrompt, and put it back
      const lastMessage = messages[messages.length - 1];
      promptString = lastMessage.content;
      
      history = messages.slice(0, -1).map(m => ({
        role: m.role === 'assistant' ? 'model' : m.role,
        content: [{ text: m.content }]
      }));
      
      // Push the final formatted prompt into history
      history.push({
        role: 'user',
        content: [{ text: responsePrompt(promptString) }]
      });
      
    } else {
      promptString = message || "";
      history = [
        {
          role: 'user',
          content: [{ text: responsePrompt(promptString) }]
        }
      ];
    }

    const response = await ai.generate({
      model: openRouterModel,
      messages: history,
      system: `${preamblePrompt}\n\n--------------------------------\nWEBSITE CONTEXT\n--------------------------------\n${websiteContent}`
    });

    let finalContent = response.text;
    try {
      // The AI is instructed to return a JSON object with a "replay" field
      const parsed = JSON.parse(response.text);
      if (parsed && parsed.replay) {
        finalContent = parsed.replay;
      }
    } catch (parseError) {
      console.warn("AI didn't return strict JSON format, falling back to raw text:", response.text);
    }

    res.json({
      reply: {
        role: "assistant",
        content: finalContent
      }
    });

  } catch (error: any) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "AI request failed", details: error?.toString() });
  }
};
