const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");


dotenv.config("./.env");

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("OK from Server");
});

const PORT = process.env.PORT || 4001;

dbConnect();
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
