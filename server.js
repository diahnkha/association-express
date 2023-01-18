const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "welcome to diah application" });
});
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/customer.routes")(app);
require("./app/routes/product.routes")(app);
require("./app/routes/order.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`);
});
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
  console.log("drop and resync DB");
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });
  Role.create({
    id: 2,
    name: "moderator",
  });
  Role.create({
    id: 3,
    name: "admin",
  });
}
