import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";

const API_KEY = "AIzaSyBNpATU3h45TztFNrrK1u1SvL6T9hc2NFc";

const genAI = new GoogleGenerativeAI(API_KEY);
const model: GenerativeModel = genAI.getGenerativeModel({
  model: "models/gemini-1.5-pro-latest",
});

export { model };
