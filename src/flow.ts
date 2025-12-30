import { Chat, genkit, SessionData, SessionStore } from "genkit/beta";
import { z, ZodType } from "zod";
import { googleAI } from "@genkit-ai/google-genai";
import { openAI } from '@genkit-ai/compat-oai/openai';
import { preamblePrompt, responsePrompt } from "./prompts";
import { parse } from 'partial-json';

const model = openAI.model('gpt-5-nano')

const ai = genkit({
    plugins: [openAI({ apiKey: "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" })],
    model,
});


const preamble = ai.definePrompt(
    { name: 'preamble' },
    preamblePrompt
);

interface MyState {
    primaryObjective?: string;
    milestones?: string[];
    currentMilestone?: string;
}

const AboutOutput = z.object({
    answer: z.string(),
});

export const aboutFlow = ai.defineFlow(
    {
        name: 'aboutFlow',
        inputSchema: z.object({
            userInput: z.optional(z.string()),
            sessionId: z.string(),
            clearSession: z.boolean()
        }) as any,
        outputSchema: AboutOutput as any
    },
    async ({ userInput, sessionId, clearSession }) => {
        let chat: Chat;
        console.log(userInput, sessionId, clearSession);
        if (clearSession) {
            const session = ai.createSession<MyState>({
                store: new JsonSessionStore(),
                sessionId,
                initialState: {}
            });
            session.updateState({});
            chat = session.chat(preamble, { sessionId, model });
            await session.updateMessages(sessionId, []);
        } else {
            const session = await ai.loadSession(sessionId, {
                store: new JsonSessionStore(),
            });
            chat = session.chat({ sessionId, model });
        }
        try {
            console.log("try block");
            const { text } = await chat.send(responsePrompt(userInput || ''));
            console.log("try block 2");
            return parse(maybeStripMarkdown(text));
        } catch(err) {
            console.log("catch block", err);
            return {
                answer: 'This information is not publicly available.'
            }
        }
    }
);

const markdownRegex = /^\s*(```json)?((.|\n)*?)(```)?\s*$/i;
function maybeStripMarkdown(withMarkdown: string) {
  const mdMatch = markdownRegex.exec(withMarkdown);
  if (!mdMatch) {
    return withMarkdown;
  }
  return mdMatch[2];
}


const sessionStore: { [key: string]: SessionData } = {};
class JsonSessionStore<S = any> implements SessionStore<S> {
    async get(sessionId: string): Promise<SessionData<S> | undefined> {
        if (sessionId in sessionStore)
            return sessionStore[sessionId];
        else {
            return undefined;
        }
    }

    async save(sessionId: string, sessionData: SessionData<S>): Promise<void> {
        sessionStore[sessionId] = sessionData;
    }
}