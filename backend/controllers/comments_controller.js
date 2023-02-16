const router = require("express").Router();
const db = require("../models");
const { Comment } = db;

router.get("/:id", (req, res) => {
    Comment.findAll({
        where: {list_id: `${req.params.id}`}
    })
        .then(comments => {
            res.json(comments);
        })
        .catch(() => {
            res.send("Error: Couldn't find comments.");
        });
});

router.post("/", (req, res) => {
    Comment.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(() => {
            res.send("Error: Couldn't post comment.");
        });
});

module.exports = router;