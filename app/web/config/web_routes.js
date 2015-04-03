var express = require("express");
var join = require("path").join;
var router = require("express").Router();

function home(req, res) {
    res.render("views/home");
}

router.use(express.static(join(__dirname, "../public")));
router.get("/", home);

module.exports = router;