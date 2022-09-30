import { chats } from "./demo/data.js";
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const chat = chats.find(e => e._id === req.params.id);
    res.send(chat);
});

app.listen(process.env.PORT || "5000", () => {
    console.log("Server Started on " + (process.env.PORT || "5000") );
});