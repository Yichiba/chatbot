import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config()

const app=express()

app.use(cors())

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

import bodyParser  from 'body-parser'

app.use(bodyParser.json());
app.post('/ask', async (req,res)=>{
    const chat = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 500,
      },
    });
    let result = await chat.sendMessage(req.body.content);
    res.send(result.response.text());
})


app.listen(5001,() =>{
    console.log("server runing ..")
})



