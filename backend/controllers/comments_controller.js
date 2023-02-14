const router = require("express").Router();
const db = require("../models");
const { Comment } = db;

router.get("/", (req, res) => {
    try {
        Comment.findAll()
            .then(comments => res.json(comments));
    } catch {
        res.send("Error.");
    }
});

module.exports = router;