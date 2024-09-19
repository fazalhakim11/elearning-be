const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const kelasRouter = require("./routes/kelas.route");
const mode_pembelajaranRouter = require("./routes/mode_pembelajaran.route");
const mata_pelajaranRouter = require("./routes/mata_pelajaran.route");
const babRouter = require("./routes/bab.route");
const sub_babRouter = require("./routes/sub_bab.route");
const materialRouter = require("./routes/material.route");
const authRouter = require("./routes/auth.route");
const progressRouter = require("./routes/progress.route");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/kelas", kelasRouter);
app.use("/api/mode_pembelajaran", mode_pembelajaranRouter);
app.use("/api/mata_pelajaran", mata_pelajaranRouter);
app.use("/api/bab", babRouter);
app.use("/api/sub_bab", sub_babRouter);
app.use("/api/material", materialRouter);
app.use("/api/auth", authRouter);
app.use("/api/progress", progressRouter);

app.get("/", (req, res) => {
  res.send({
    message: "Server is running...",
  });
});

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log("Server Running...");
});
