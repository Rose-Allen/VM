const uuid = require("uuid").v4;
const fs = require("fs");
const path = require("path");

class Course {
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
    this.id = uuid();
  }

  toJson() {
    return {
      title: this.title,
      price: this.price,
      img: this.img,
      id: this.id,
    };
  }

  async save() {
    const courses = await Course.getAll();
    courses.push(this.toJson());

    console.log(courses);

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "data.json"),
        JSON.stringify(courses),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "data.json"),
        "utf-8",
        (err, content) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(content));
          }
        }
      );
    });
  }

  static async getOne(id) {
    const courses = await Course.getAll();
    return courses.find((e) => e.id == id);
  }
}

module.exports = Course;
