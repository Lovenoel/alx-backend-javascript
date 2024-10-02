/*
A file that uses the prototype below to return a promise.
The parameter is a boolean.
getFullResponseFromAPI(success)
*/

const getFullResponseFromAPI = (success) => {
    return new Promise((resolve, reject) => {
        if (success){
            resolve({
                status : 200,
                body : 'Success',
            });
        }
        else {
            reject(new Error("The fake API is not working currently"));
        }
    });
}

export default getFullResponseFromAPI;
