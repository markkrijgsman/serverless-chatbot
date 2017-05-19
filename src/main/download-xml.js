var request = require("request");

function main() {

    const URL = "https://opendata.rijksoverheid.nl/v1/sources/rijksoverheid/infotypes/faq?rows=3000";

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
