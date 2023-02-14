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

router.get("/entertainment", (req, res) =>{
    
});

router.get("/foods", (req, res) =>{

});

router.get("/misc", (req, res) =>{

});

router.get("/relationships", (req, res) =>{

});

router.get("/thrills", (req, res) =>{

});

router.get("/travels", (req, res) =>{

});

module.exports = router;