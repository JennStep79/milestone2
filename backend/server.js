require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { Sequelize } = require("sequelize");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../build")));

app.use("/api/categories", require("./controllers/categories_controller"));
app.use("/api/entertainment", require("./controllers/entertainment_controller"));
app.use("/api/foods", require("./controllers/foods_controller"));
app.use("/api/misc", require("./controllers/misc_controller"));
app.use("/api/relationships", require("./controllers/relationships_controller"));
app.use("/api/thrills", require("./controllers/thrills_controller"));
app.use("/api/travels", require("./controllers/travels_controller"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});