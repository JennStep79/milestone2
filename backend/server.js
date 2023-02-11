require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log(`Connected to database: ${process.env.MONGO_URI}`);
});

app.use("/api/entertainment", require("./controllers/entertainment_controller"));
app.use("/api/foods", require("./controllers/foods_controller"));
app.use("/api/misc", require("./controllers/misc_controller"));
app.use("/api/relationships", require("./controllers/relationships_controller"));
app.use("/api/thrills", require("./controllers/thrills_controller"));
app.use("/api/travels", require("./controllers/travels_controller"));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});