const router = require("express").Router();
const db = require("../models");
const { Category } = db;

router.get("/", (req, res) => {
    try {
        Category.findAll()
            .then(categories => res.json(categories));
    } catch {
        res.send("Error.");
    }
});

module.exports = router;