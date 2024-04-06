var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const Users = require("./controllers/UsersController");
const morgan = require("morgan");
const db = require("./database/db");
var app = express();
var PORT = process.env.PORT || 7100;

app.use(express.static(__dirname + "/static"));

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
app.use(morgan(logFormat));

db.sequelize.sync({ force: false });

app.use("/users", Users);

app.listen(PORT, function () {
  console.log("Server is running on port: " + PORT);
});
