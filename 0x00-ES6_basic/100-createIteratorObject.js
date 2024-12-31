export default function createIteratorObject(report) {
  if (!report || !report.allEmployees) {
    throw new Error('Invalid report object');
  }

  const employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          const employee = employees[index];
          index += 1; // Avoids using 'index++'
          return employee !== undefined
            ? { value: employee, done: false }
            : { done: true };
        },
      };
    },
  };
}
