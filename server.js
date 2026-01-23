import express from "express";
import cors from "cors";
import OpenAI from "openai";
import fs from "fs";
import pdf from "pdf-parse";


const app = express();
app.use(cors());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
const pdfBuffer = fs.readFileSync("./data/profile.pdf");
const pdfData = await pdf(pdfBuffer);
const pdfText = pdfData.text;


app.get("/chat", async (req, res) => {
  const userMsg = req.query.q || "Hello";

const response = await client.responses.create({
  model: "gpt-4.1-mini",
  input: `Use the following profile info to answer:\n${pdfText}\n\nUser question: ${userMsg}`
});

  res.json({ reply: response.output[0].content[0].text });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});