// src/app.ts
import express from 'express';
import cors from 'cors';
import { taskRouter } from './routes/tasks';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRouter);

export default app;