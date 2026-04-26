require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.post("/api/speak", async (req, res) => {
  try {
    const { text } = req.body;

    console.log("Request received:", text);
    console.log("API key loaded?", !!process.env.ELEVENLABS_API_KEY);
    console.log("Voice ID loaded?", !!process.env.ELEVENLABS_VOICE_ID);

    const apiKey = process.env.ELEVENLABS_API_KEY;
    const voiceId = process.env.ELEVENLABS_VOICE_ID;

    const elevenResponse = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          "Accept": "audio/mpeg"
        },
        body: JSON.stringify({
          text: text || "Hello from Cheshire",
          model_id: "eleven_multilingual_v2"
        })
      }
    );

    console.log("ElevenLabs status:", elevenResponse.status);

    if (!elevenResponse.ok) {
      const details = await elevenResponse.text();
      console.log("ElevenLabs error details:", details);

      return res.status(elevenResponse.status).json({
        error: "ElevenLabs request failed.",
        details: details
      });
    }

    const audioBuffer = Buffer.from(await elevenResponse.arrayBuffer());

    res.set({
      "Content-Type": "audio/mpeg",
      "Content-Length": audioBuffer.length
    });

    res.send(audioBuffer);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Server error generating speech." });
  }
});

app.listen(PORT, () => {
  console.log(`Cheshire app running at http://localhost:${PORT}/welcome.html`);
});