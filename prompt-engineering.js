import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function getFakerFunction(userInput) {
    const prompt = `You are a smart assistant that maps natural language descriptions to Faker.js functions. 
    Given the user input, return the correct Faker.js function with parameters.

    Example:
    User Input: "date of birth over 18"
    Output: faker.date.birthdate({ mode: 'age', min: 18, max: 65 })

    User Input: "${userInput}"
    Output:`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Error calling Gemini:", error);
    }
}

export { getFakerFunction };
