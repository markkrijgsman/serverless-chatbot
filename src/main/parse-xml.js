var xml2js = require("xml2js");

function main(xmlResponse) {

    return new Promise(function(resolve, reject) {
        xml2js.parseString(xmlResponse.body, function (err, result) {
            resolve(result);
        });
    });
}
