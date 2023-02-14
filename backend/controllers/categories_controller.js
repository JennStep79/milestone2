const router = require("express").Router();
const db = require("../models");
const { Category } = db;

router.get("/", (req, res) => {
    try {
        Category.findAll()
            .then(categories => res.json(categories));
    } catch {
        res.send("Error.");
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