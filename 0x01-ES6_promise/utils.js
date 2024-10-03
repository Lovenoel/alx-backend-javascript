// uploadPhoto and createUser, return promises
export function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    // Simulate successful upload
    resolve({
      status: 200,
      //body: `photo-${filename}`,
      body : 'photo-profile-1',
    });
  });
}

export function createUser() {
  return new Promise((resolve) => {
    // Simulate user creation
    resolve({
      firstName: "Guillaume",
      lastName: "Salva",
    });
  });
}
