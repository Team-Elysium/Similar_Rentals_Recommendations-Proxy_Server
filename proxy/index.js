const express = require("express");
const router = require("./routes.js");
const proxy = require("http-proxy-middleware");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use("/:id", express.static(path.join(__dirname, "../views")));
// app.use("/", proxy({ target: "http://127.0.0.1:3011/", changeOrigin: true }));
app.use("/", router);

app.listen(3000, () => console.log("Proxy Server Working!!!"));
