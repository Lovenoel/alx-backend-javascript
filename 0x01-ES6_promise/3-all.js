import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto("filename.jpg"), createUser()])
    .then((results) => {
      const [uploadResult, userResult] = results;
      console.log(
        `${uploadResult.body} ${userResult.firstName} ${userResult.lastName}`
      );
    })
    .catch(() => {
      console.log("Signup system offline");
    });
}
