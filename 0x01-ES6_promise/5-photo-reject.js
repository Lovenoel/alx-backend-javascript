// A function that returns a Promise rejecting with an Error
export default function uploadPhoto(filename) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
}