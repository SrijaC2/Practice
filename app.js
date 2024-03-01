const { request, response } = require("express");
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/public'));
app.set("views", path.join(__dirname, "views"));

const session = require('express-session');
app.use(session({
  secret: 'your-secret-key', // Replace with your secret key
  resave: false,
  saveUninitialized: true,
}));
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (request, response) => {
     return response.render("index");
});

module.exports = app;
