require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});