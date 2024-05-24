import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;


app.get("/api/auth/signup", (req, res) => {
    console.log(">>> check signup")
})

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on Port ${PORT}`)
});