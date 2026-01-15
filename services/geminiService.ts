
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getSkincareAdvice(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are Ananna, a friendly and expert skincare consultant for a premium brand. Your tone is sophisticated, caring, and minimal. You provide brief, scientifically-grounded advice. If asked about products, suggest categories like Cleansers, Serums, and Moisturizers. Keep responses under 100 words.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting right now. Please try again in a moment, darling.";
  }
}
