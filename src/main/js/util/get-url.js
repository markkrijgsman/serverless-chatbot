var request = require("request");

function main(params) {

    const URL = params.url[0];

    return new Promise(function(resolve, reject) {
        request.get(URL, function(error, response, body) {
            if (error) {
                reject(error);
            }
            else {
                resolve(response);
            }
        });
    });
}