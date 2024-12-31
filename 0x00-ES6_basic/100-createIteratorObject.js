export default function createIteratorObject(report) {
  const employees = [];

  // Flatten the employee list from all departments
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }

  // Return an iterator
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employees.length) {
            const value = employees[index];
            index += 1; // Replaced index++ with index += 1
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
