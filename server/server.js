import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/connectDB.js';
import { notFound, errorHandler} from './middleware/errorMiddleware.js'

connectDB();
const app = express()

app.use(express.json());
app.use("/api/users", userRoutes);


app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server started on port ${PORT} `)})
