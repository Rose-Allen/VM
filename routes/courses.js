const { Router } = require("express");
const Course = require("../models/course");

const router = Router();

router.get("/", async (req, res) => {
  const courses = await Course.getAll();
  res.render("courses", {
    title: "Курсы",
    isCourses: true,
    courses,
  });
});

router.get("/:id", async (req, res) => {
  const course = await Course.getOne(req.params.id);
  res.render("course", {
    layout: "empty",
    title: `Курсы по ${course.title}`,
    course,
  });
});

router.get("/:id/edit", async (req, res) => {
  const course = await Course.getOne(req.params.id);
  res.render("edit", {
    title: `Редактироваие курса по ${course.title}`,
    course,
  });
});

router.post("/edit", async (req, res) => {
  const course = await Course.update(req.body);
  res.redirect("/courses");
});

module.exports = router;
