var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const configRouter = require("./routes/index");
var session = require("express-session");
var app = express();
require("dotenv").config();

// view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// session
app.use(
    session({
        secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
        saveUninitialized: true,
        cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 }, // one day
        resave: false,
    })
);

// parse request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// public path
app.use(express.static(path.join(__dirname, "public")));

// routes
configRouter(app);

// error handler
app.use(function (err, req, res, next) {
    res.json(err.message);
});

// listen
app.listen("5000", () => {
    console.log(`Example app listening on port 5000`);
});
