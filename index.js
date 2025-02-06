import readline from "readline";
import { getFakerFunction } from "./prompt-engineering.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter your description: ", async (userInput) => {
    const fakerFunction = await getFakerFunction(userInput);
    console.log("Suggested Faker.js function:", fakerFunction);
    rl.close();
});
