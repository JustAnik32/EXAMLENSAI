module.exports = async (req, res) => {
  // Set CORS headers so it works everywhere
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { systemPrompt, userPrompt, isJson } = req.body;

  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({ error: 'API Key not found in environment variables' });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://examlensai.vercel.app/",
        "X-Title": "ExamLens AI"
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
      console.error("OpenRouter Error:", data);
      return res.status(500).json({ error: "No response from AI model" });
    }

    let text = data.choices[0].message.content;
    
    // Anti-leak: Strip <think> and <thought> tags
    text = text.replace(/<(think|thought)>[\s\S]*?<\/\1>/gi, '').trim();

    if (isJson) {
      // Find JSON block if it exists
      const jsonMatch = text.match(/```(?:json)?\n([\s\S]*?)\n```/);
      const cleanJson = jsonMatch ? jsonMatch[1] : text;
      try {
        return res.status(200).json(JSON.parse(cleanJson));
      } catch (e) {
          // If parsing fails, return as text
          return res.status(200).json({ text: text });
      }
    }

    return res.status(200).json({ text: text });
  } catch (error) {
    console.error("Function Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
