const path = require("path");
const express = require("express");

require("dotenv").config({ path: path.join(__dirname, "../.env") });



const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running...");
});