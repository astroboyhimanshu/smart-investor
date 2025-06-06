import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);
const model: GenerativeModel = genAI.getGenerativeModel({
  model: "models/gemini-2.0-flash-lite",
});

export { model };
