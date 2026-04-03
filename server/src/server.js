import dotenv from 'dotenv';
// import 'dotenv/config';
import express from "express";
import cors from 'cors';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';

// dotenv.config();
const app = express();

// app.use(cors({
//     origin: "http://192.168.1.7:5173", // allow your frontend
//     credentials: true,               // allow cookies if used
// }));

app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;
connectDB();

app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`🚀 Port running on ${PORT}`))