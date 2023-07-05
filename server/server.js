import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/connectDB.js';
import {createError, errorHandler, notFound } from './middleware/errorMiddleware.js'
// notFound,
connectDB();
const app = express()

app.use(cookieParser());
app.use(express.json());
app.use(cors())
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);


app.use(notFound)
app.use(createError)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server started on port ${PORT} `)})
