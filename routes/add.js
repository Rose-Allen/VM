const { Router } = require("express");
const Course = require("../models/course");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "Добавить курс",
    isAdd: true,
  });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { title, price, img } = req.body;
  const course = await new Course(title, price, img);
  course.save();
  res.redirect("/courses");
});

module.exports = router;
