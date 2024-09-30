import express from 'express'
import connectDB from './config/DB.js';
import todoRouter from './routes/todoRoutes.js'
import cors from 'cors'

const app=express();
app.use(cors())
app.use(express.json())
app.use('/todo',todoRouter);
connectDB();

export default app