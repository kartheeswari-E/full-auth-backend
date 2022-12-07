const express = require("express");
const userRoutes = require("./route/user.route");
const authRoutes = require("./route/auth");
const passwordReset = require("./route/passwordreset");
require("dotenv").config();

const db = require("./db/connect");

const app = express();

db();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT;
app.get("/", (request, response) => {
  response.send("hai welcome");
});

app.use("/api/user", userRoutes);
app.use("/api/auths", authRoutes);
app.use("/api/password-reset", passwordReset);

app.listen(PORT, () => {
  console.log(`the app is running in the port ${PORT}`);
});
