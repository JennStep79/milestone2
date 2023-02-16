const router = require("express").Router();
const db = require("../models");
const { List } = db;

router.get("/:id", (req, res) => {
    List.findAll({
        where: {category_id: `${req.params.id}`}
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

router.put("/:id", (req, res) => {
    List.update(
        {list_item: `${req.body}`},
        {where: {list_id: `${req.params.id}`}}
    )
        .then(num => {
            if(num == 1) {
                res.send("List has been successfully updated.");
            } else {
                res.send("Error: Couldn't update list.");
            }
        });
});

router.delete("/:id", (req, res) => {
    List.destroy({
        where: {list_id: `${req.params.id}`}
    })
        .then(num => {
            if(num == 1) {
                res.send("List has been successfully deleted.");
            } else {
                res.send("Error: Couldn't delete list.");
            }
        });
});

module.exports = router;