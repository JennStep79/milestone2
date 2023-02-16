const router = require("express").Router();
const db = require("../models");
const { Category } = db;

router.get("/", (req, res) => {
    Category.findAll()
        .then(categories => {
            res.json(categories);
        })
        .catch(() => {
            res.send("Error: Couldn't find categories.");
        });
});

module.exports = router;