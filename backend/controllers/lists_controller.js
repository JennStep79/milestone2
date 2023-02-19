const router = require("express").Router();
const db = require("../models");
const { List } = db;

router.get("/category/all", (req, res) => {
    List.findAll()
        .then(lists => {
            res.json(lists);
        })
        .catch(() => {
            res.send("Error: Couldn't find all lists.");
        })
});

router.get("/category/:id", (req, res) => {
    List.findAll({
        where: {category_id: `${req.params.id}`},
        order: [["list_id", "DESC"]]
    })
        .then(lists => {
            res.json(lists);
        })
        .catch(() => {
            res.send("Error: Couldn't find lists.");
        });
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