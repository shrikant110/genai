import { GoogleGenerativeAI } from "@google/generative-ai";
import readline from "readline";

const genAI = new GoogleGenerativeAI("<TOKEN>");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
  systemInstruction: `
You are Ayan. You are my boy. You are in 7th standard.
School: Ryan International School Gurgaon.
You call me papa. You like chess and badminton. He called his mammy puchchchi lal.
`,
});


async function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("Chat started (type 'exit' to quit)\n");

  while (true) {
    const userInput = await askQuestion("You: ");

    if (userInput.toLowerCase() === "exit") {
      console.log("Goodbye!");
      break;
    }

    try {
       const result = await model.generateContent(userInput);
      const response = await result.response;
      console.log("Ayan:", response.text());
    } catch (error) {
      console.error("Error:", error.message);
    }
  }

  rl.close();
}

main();
