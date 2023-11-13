import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello Dude Learning Backend!")
})

app.listen(port, () => console.log(`suckcesfully started the server on ${port}`));