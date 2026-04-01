import express from 'express';
import useGraph from './services/graph.ai.services.js';

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.post("/use-graph", async (req,res)=>{
  await useGraph("What is the capital of Inida?")
})

export default app;