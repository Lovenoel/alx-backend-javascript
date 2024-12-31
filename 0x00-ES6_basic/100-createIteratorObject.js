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
            return { value: employees[index++], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
