import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBZQU1YnDAPCB4Nmu1P4_ditvSpzRou-2g");

async function run() {
  const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview",
  });

  const result = await model.generateContent("Write a motivational quote");
  const response = await result.response;

  console.log(response.text());
}

run();