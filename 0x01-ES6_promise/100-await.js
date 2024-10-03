import { uploadPhoto, createUser } from "./utils.js";

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto("filename.jpg");
    const user = await createUser();
    return { photo, user };
  } catch {
    return { photo: null, user: null };
  }
}
