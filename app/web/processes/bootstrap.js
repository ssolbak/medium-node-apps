var express = require("express");

var app = express();
app.server = require('http').createServer(app);

app.set("views", __dirname);
app.set("view engine", "jade");

app.use(require("../config/web_routes"));

var bus = require("~/common/bus");
app.use("/api", require("~/player/router")(bus).router);
//app.use("/api", require("~/draft/router")(bus).router);
//app.use("/api", require("~/event_store/router")(bus).router);
//repeat for any other modules

app.use(require("../middleware/exception"));

module.exports = app;