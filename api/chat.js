export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { systemPrompt, userPrompt, isJson } = req.body;

  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "nvidia/llama-3.1-nemotron-70b-instruct:free",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      })
    });

    const data = await response.json();
    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ error: "Invalid API Response from OpenRouter" });
    }

    let text = data.choices[0].message.content;
    
    // Anti-leak: Strip <think> and <thought> tags completely
    text = text.replace(/<(think|thought)>[\s\S]*?<\/\1>/gi, '').trim();

    if (isJson) {
      const jsonMatch = text.match(/```(?:json)?\n([\s\S]*?)\n```/);
      if (jsonMatch) text = jsonMatch[1];
      return res.status(200).json(JSON.parse(text));
    }

    return res.status(200).json({ text: text });
  } catch (error) {
    console.error("Vercel Function Error:", error);
    return res.status(500).json({ error: "Internal Server Error during AI generation" });
  }
}
