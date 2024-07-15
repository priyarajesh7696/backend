import express from 'express'
import cors from "cors";
import dotenv from "dotenv";
import AppRoutes from './routes/index.js'
dotenv.config();
const app = express()
const PORT = process.env.PORT || 8000
app.use(cors());
app.use(express.json())
app.use('/',AppRoutes)



app.listen(PORT,()=>console.log(`App is listening port ${PORT}`))