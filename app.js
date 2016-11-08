var express = require("express");
var path = require("path");

var db = require("./models/db.js");
var router = require('./routers/router.js');

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set(express.static("/public"));
app.use(function (req, res) {
    res.render("err");
});

app.listen(8083);