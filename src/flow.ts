import { Client } from "@gradio/client";

let gradioClient: any;

// Lazy init (important for performance)
async function getClient() {
  if (!gradioClient) {
    gradioClient = await Client.connect("aswinth37/testing_model");
  }
  return gradioClient;
}

export const chat = async (req: any, res: any) => {
  try {
    const { message } = req.body;

    // if (!message || typeof message !== "string") {
    //   return res.status(400).json({ error: "Message is required" });
    // }

    const client = await getClient();

    const result = await client.predict("/ask", {
      prompt: message
    });

    // Gradio always returns array-like data
    const output = result.data[0];

    res.json({
      reply: {
        role: "assistant",
        content: output
      }
    });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "AI request failed" });
  }
};
