/*
A file that Returns a Promise using this prototype
function getResponseFromAPI()
*/

const getResponseFromAPI = () => {
    return new Promise((resolve, reject) => {
        const success = true;
    if (success)
    {
        resolve(
            {
                status : 200,
                data : {
                    message : 'Request successful'
                },
            },
        );
    }
    else
    {
        reject(
            new error('Request failed')
        )
    };
})
}
export default getResponseFromAPI;