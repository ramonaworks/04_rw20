import express from "express";
import cors from "cors";
import OpenAI from "openai";
import fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

const app = express();
app.use(cors());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

let pdfText = "";

(async () => {
  const buffer = fs.readFileSync("./data/profile.pdf");
  const data = await pdfParse(buffer);
  pdfText = data.text;
  console.log("PDF loaded");
})();

app.get("/chat", async (req, res) => {
  const userMsg = req.query.q || "Hello";

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: `Use this info to answer questions:\n${pdfText}\n\nUser: ${userMsg}`
  });

  res.json({ reply: response.output[0].content[0].text });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});