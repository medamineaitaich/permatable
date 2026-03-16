import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";

let ai: GoogleGenAI | null = null;

function getApiKey() {
  const viteKey = (import.meta as any)?.env?.VITE_GEMINI_API_KEY as string | undefined;
  const legacyKey = (globalThis as any)?.process?.env?.GEMINI_API_KEY as string | undefined;
  return viteKey || legacyKey || "";
}

function getAiClient() {
  if (ai) return ai;

  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("AI features are unavailable because no Gemini API key is configured.");
  }

  ai = new GoogleGenAI({ apiKey });
  return ai;
}

export async function generatePostWithAI(topic: string) {
  const client = getAiClient();

  // Use thinking model for deep dive article generation
  const response = await client.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: `Write a comprehensive, SEO-optimized blog post about "${topic}" for a permaculture and sustainable living blog called Permatable. 
    Include a catchy title, a short excerpt (max 150 chars), and the main content in Markdown format.
    The content should be long-form, engaging, and informative.`,
    config: {
      thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH },
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          excerpt: { type: Type.STRING },
          content: { type: Type.STRING, description: "Markdown content" },
          suggestedImagePrompt: { type: Type.STRING, description: "A prompt to generate a featured image for this post" }
        },
        required: ["title", "excerpt", "content", "suggestedImagePrompt"]
      }
    }
  });

  const data = JSON.parse(response.text || "{}");
  return data;
}

export async function generateImageWithAI(prompt: string, size: "1K" | "2K" | "4K" = "1K") {
  try {
    const client = getAiClient();

    const response = await client.models.generateContent({
      model: 'gemini-3.1-flash-image-preview',
      contents: {
        parts: [
          { text: prompt },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: size
        }
      },
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image generation failed:", error);
    return null;
  }
}

export async function searchLatestNews(query: string) {
  const client = getAiClient();

  const response = await client.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Find the latest news or articles about "${query}". Summarize the top 3 findings.`,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  
  return {
    text: response.text,
    grounding: response.candidates?.[0]?.groundingMetadata?.groundingChunks
  };
}
