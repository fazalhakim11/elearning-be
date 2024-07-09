const path = require("path");
const express = require("express");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const kelasRouter = require("./routes/kelas.route")
const mode_pembelajaranRouter = require("./routes/mode_pembelajaran.route")
const mata_pelajaranRouter = require("./routes/mata_pelajaran.route")
const babRouter = require("./routes/bab.route")
const sub_babRouter = require("./routes/sub_bab.route")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/kelas", kelasRouter)
app.use("/api/mode_pembelajaran", mode_pembelajaranRouter)
app.use("/api/mata_pelajaran", mata_pelajaranRouter)
app.use("/api/bab", babRouter)
app.use("/api/sub_bab", sub_babRouter)

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running...");
});