const fs = require("fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf-8").trim();
    const lines = data.split("\n").filter((line) => line);
    const fields = {};

    lines.slice(1).forEach((line) => {
      const [name, , , field] = line.split(",");
      if (!fields[field]) fields[field] = [];
      fields[field].push(name);
    });

    console.log(`Number of students: ${lines.length - 1}`);
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ", "
        )}`
      );
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}
module.exports = countStudents;
