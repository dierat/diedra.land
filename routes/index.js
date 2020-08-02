var express = require("express");
var router = express.Router();
var path = require("path");

router.use(express.static(path.join(__dirname + "/../public")));

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Homepage" });
});

module.exports = router;
