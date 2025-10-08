import express from "express";
import dotenv from "dotenv";

//app
dotenv.config();
const app = express();
app.use(express.json());

//routes

//debug
app.get("/", (req, res) => {
    res.send("Arcadium API is ready!")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
});