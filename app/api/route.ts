import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new  OpenAIApi(config);

export const runtime = "edge"

export async function POST(req:Request){
    const {message} = await req.json()

    const response = 
}