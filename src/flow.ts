import express from "express";
import OpenAI from "openai";
import { preamblePrompt } from "./prompts";

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: "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",
});


export const chat = async (req: any, res: any) => {
  try {
    const { message } = req.body;

    // if (!message || typeof message !== "string") {
    //   return res.status(400).json({ error: "Message is required" });
    // }

    const completion = await client.chat.completions.create({
      model: "moonshotai/Kimi-K2-Instruct-0905",
      messages: [
        { role: "system", content: preamblePrompt },
        { role: "user", content: message },
      ],
    });
    console.log("AI Completion:", completion.choices);
    const output = completion.choices[0].message.content;
    res.json({
      reply: {content: output, role: "assistant"},
    });
  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "AI request failed" });
  }
}
