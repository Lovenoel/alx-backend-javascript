const readDatabase = require("../utils");

class StudentsController {
  static getAllStudents(req, res) {
    const database = process.argv[2];
    readDatabase(database)
      .then((fields) => {
        res.write("This is the list of our students\n");
        Object.keys(fields)
          .sort()
          .forEach((field) => {
            res.write(
              `Number of students in ${field}: ${
                fields[field].length
              }. List: ${fields[field].join(", ")}\n`
            );
          });
        res.end();
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== "CS" && major !== "SWE") {
      res.status(500).send("Major parameter must be CS or SWE");
    } else {
      const database = process.argv[2];
      readDatabase(database)
        .then((fields) => {
          res.status(200).send(`List: ${fields[major].join(", ")}`);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  }
}
module.exports = StudentsController;
