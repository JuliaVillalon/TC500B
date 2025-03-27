import express from "express";

const app = express();
const port = 5002;

app.use("/", express.static("PUBLIC"));
app.listen(port, console.log("http:/localhost" + port));