const router = require("express").Router();
const db = require("../models");
const { List } = db;

router.get("/:id", (req, res) => {
    List.findAll({where: {category_id: `${req.params.id}`}})
        .then(lists => res.json(lists))
        .catch(() => res.send("Error: Couldn't find lists."));
});

router.post("/", (req, res) => {
    List.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(() => {
            res.send("Error: Couldn't post list.");
        });
});

module.exports = router;