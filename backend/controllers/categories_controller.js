const router = require("express").Router();
const Category = require("../models/category");

router.get("/", (req, res) => {
    try {
        Category.findAll()
            .then(categories => res.status(200).json(categories));
    } catch {
        res.status(500);
    }
});

module.exports = router;