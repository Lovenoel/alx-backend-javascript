const fs = require("fs");

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
      } else {
        const lines = data
          .trim()
          .split("\n")
          .filter((line) => line);
        const fields = {};

        lines.slice(1).forEach((line) => {
          const [name, , , field] = line.split(",");
          if (!fields[field]) fields[field] = [];
          fields[field].push(name);
        });

        console.log(`Number of students: ${lines.length - 1}`);
        for (const [field, names] of Object.entries(fields)) {
          console.log(
            `Number of students in ${field}: ${
              names.length
            }. List: ${names.join(", ")}`
          );
        }
        resolve();
      }
    });
  });
}
module.exports = countStudents;
