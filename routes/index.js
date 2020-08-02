var express = require("express");
var router = express.Router();
var path = require("path");

// router.use(express.static(path.join(__dirname + "/../public")));

/* GET home page. */
router.get("/", function(req, res, next) {
    res.redirect(301, "/code");
    // TODO: Add a homepage?
    // res.render("index", {title: "Homepage"});
});

module.exports = router;
