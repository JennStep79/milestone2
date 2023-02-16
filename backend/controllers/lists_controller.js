const router = require("express").Router();
const db = require("../models");
const { List } = db;

router.get("/:id", (req, res) => {
    List.findAll({ where: {category_id: `${req.params.id}`} });
});

module.exports = router;