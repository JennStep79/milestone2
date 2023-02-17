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

router.put("/:id", (req, res) => {
    Comment.update(
        req.body,
        {where: {comment_id: `${req.params.id}`}}
    )
        .then(num => {
            if(num == 1) {
                res.send("Comment has been successfully updated.");
            } else {
                res.send("Error: Couldn't update comment.");
            }
        });
});

router.delete("/:id", (req, res) => {
    Comment.destroy({
        where: {comment_id: `${req.params.id}`}
    })
        .then(num => {
            if(num == 1) {
                res.send("Comment has been successfully deleted.");
            } else {
                res.send("Error: Couldn't delete comment.");
            }
        });
});

module.exports = router;