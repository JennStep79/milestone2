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

router.get("/:id", (req, res) => {
    Category.findOne({
        where: {category_id: `${req.params.id}`}
    })
        .then(category => {
            res.json(category);
        })
        .catch(() => {
            res.send("Error: Couldn't find category.");
        })
});

module.exports = router;