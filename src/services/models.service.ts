import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatCohere } from "@langchain/cohere"
import config from "../config/config.js";

const googleModel = new ChatGoogle({
    model: "gemini-2.5-flash", 
    apiKey: config.GOOGLE_API_KEY
});

const model = new ChatMistralAI({
    model: "mistral-medium-latest",
    apiKey: config.MISTRAL_API_KEY,
});


const cohereModel = new ChatCohere({
    model: "command-a-03-2025",
    apiKey: config.COHERE_API_KEY
})