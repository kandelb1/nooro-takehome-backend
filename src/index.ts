import express from "express";
import cors from "cors";
import { PrismaClient } from "../generated/prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/tasks", async (req, res) => {  
  let tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  let { title, color } = req.body;

  try {
    let task = await prisma.task.create({
      data: {
        title, color
      }
    });

    res.status(201).json(task);
  }catch(err){
    res.sendStatus(500);
  }
});

app.put("/tasks/:id", async (req, res) => {
  let { title, color, completed } = req.body;
  
  try{
    let taskId = parseInt(req.params.id);
    if(isNaN(taskId)){
      return res.sendStatus(400);
    }

    let task = await prisma.task.update({
      where: { id: taskId},
      data: {
        title: title,
        color: color,
        completed: completed,
        lastEdited: new Date(),
      },
    });

    return res.json(task);
  }catch(err){
    return res.sendStatus(404);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try{
    let taskId = parseInt(req.params.id);
    if(isNaN(taskId)){
      return res.sendStatus(400);
    }
    console.log('attempting to delete task id ' + taskId);

    await prisma.task.delete({
      where: { id: taskId}
    });
    console.log('deleted! returning');
    return res.sendStatus(204); // could use 200 OK as well, but 204 NO CONTENT makes more sense
  }catch(err){  
    return res.sendStatus(500);
  }
});

const PORT = process.env.port || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});