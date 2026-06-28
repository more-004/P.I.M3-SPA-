import { GoogleGenAI } from '@google/genai';

export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  try {
    const { history } = request.body;


    const rawKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    
    if (!rawKey) {
      return response.status(500).json({ 
        reply: "🚨 ¡Pits en problemas! No encontré la variable GEMINI_API_KEY configurada." 
      });
    }


    const apiKey = rawKey.replace(/['";\s]/g, '');

    const ai = new GoogleGenAI({ apiKey: apiKey });

    if (!history || !Array.isArray(history)) {
      return response.status(400).json({ reply: 'Falta el historial de chat.' });
    }

    const systemInstruction = `
      Eres el Rayo McQueen, el legendario auto de carreras #95 de Cars.
      Hablas con muchísimo entusiasmo y usas frases como "¡Kachow!".
      REGLAS: Tus respuestas DEBEN ser súper cortas (máximo 2 oraciones) y siempre en español latino.
    `;


    const contents = history.map(msg => ({
      role: msg.role === 'usuario' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    const responseIA = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: { systemInstruction }
    });

    return response.status(200).json({ reply: responseIA.text });

  } catch (error) {
    console.error("Error en servidor:", error);
    return response.status(500).json({ 
      reply: `🚨 Error de autenticación o conexión con la IA. Verifica tu API Key.` 
    });
  }
}