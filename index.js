const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const ObjectId = require("mongodb").ObjectId;

require("dotenv").config();

app.use(express.json());
app.use(cors());


app.listen(port, () => console.log(`Running on ${port}`));