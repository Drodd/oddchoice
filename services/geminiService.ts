import { GoogleGenAI, Type } from "@google/genai";
import { Game } from '../types';
import { GAMES_LIST } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Uses Gemini to find the best game based on user query.
 * Returns the ID of the recommended game.
 */
export const getGameRecommendation = async (query: string): Promise<string | null> => {
  if (!process.env.API_KEY) {
    console.warn("API Key missing, skipping AI recommendation");
    return null;
  }

  const model = "gemini-2.5-flash";

  // Create a context string listing available games
  const gamesContext = GAMES_LIST.map(g => 
    `ID: ${g.id}, Title: ${g.title}, Description: ${g.description}, Tags: ${g.tags.join(', ')}`
  ).join('\n');

  const prompt = `
    You are a gaming concierge. The user asks: "${query}".
    Here is the list of available games:
    ${gamesContext}

    Select the single most relevant game ID from the list.
    If no game is relevant, return null.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedGameId: {
              type: Type.STRING,
              description: "The ID of the game found, or null if none match."
            },
            reasoning: {
              type: Type.STRING,
              description: "Short reason why this game was picked."
            }
          }
        }
      }
    });

    const json = JSON.parse(response.text || "{}");
    return json.recommendedGameId || null;

  } catch (error) {
    console.error("Gemini recommendation failed:", error);
    return null;
  }
};
