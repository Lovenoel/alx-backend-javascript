/*
A function named handleProfileSignup that accepts three arguments
firstName (string), lastName (string), and fileName (string)
*/
import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const results = await Promise.allSettled([userPromise, photoPromise]);
    return results.map((result) => ({
        status: result.status,
        value: result.status === "fulfilled" ? result.value : result.reason.message,
    }));
}
