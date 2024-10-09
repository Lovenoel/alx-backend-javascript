// Create and export a new WeakMap instance named weakMap
export const weakMap = new WeakMap();

// Create and export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (weakMap.has(endpoint)) {
    // Increment the query count for the given endpoint
    const count = weakMap.get(endpoint) + 1;

    // Update the count in the weakMap
    weakMap.set(endpoint, count);

    // If the count is 5 or more, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If the endpoint is not yet in the weakMap, add it with an initial count of 1
    weakMap.set(endpoint, 1);
  }
}
