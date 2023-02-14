const router = require("express").Router();
const db = require("../models");
const { List } = db;

router.get("/", (req, res) => {
    try {
        List.findAll()
            .then(lists => res.json(lists));
    } catch {
        res.send("Error.");
    }
});

module.exports = router;