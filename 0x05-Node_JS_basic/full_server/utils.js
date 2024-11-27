const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const fields = {};
        const lines = data.trim().split('\n').slice(1);
        lines.forEach((line) => {
          const [name, , , field] = line.split(',');
          if (!fields[field]) fields[field] = [];
          fields[field].push(name);
        });
        resolve(fields);
      }
    });
  });
}
module.exports = readDatabase;
