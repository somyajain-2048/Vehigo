const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const connectDB = require("./src/config/db");



connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./src/routes/authRoutes"));

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
