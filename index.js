const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const homePage = require("./routes/home");
const addPage = require("./routes/add");
const coursesPage = require("./routes/courses");
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.use("/", homePage);
app.use("/courses", coursesPage);
app.use("/add", addPage);

app.listen(PORT, () => {
  console.log(`Server running start on ${PORT}`);
});
