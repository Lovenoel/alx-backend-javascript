export default function createIteratorObject(report) {
  // Ensure the `report` object contains the expected structure
  const employees = [];
  for (const department of Object.values(report.allEmployees || {})) {
    employees.push(...department);
  }

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          const employee = employees[index];
          index += 1; // Avoids ESLint warnings
          return employee !== undefined
            ? { value: employee, done: false }
            : { done: true };
        },
      };
    },
  };
}
