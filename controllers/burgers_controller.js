// requirements and defining variables
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

//call for main page load
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

//post for adding burgers
router.post("/api/burgers", function (req, res) {
    burger.insert([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

//updates for burgers, sets status to devoured
router.put("/api/burgers/:id", function (req, res) {
    var eatStatus = "id = " + req.params.id;
    burger.update({
        devoured: true
    }, eatStatus, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;