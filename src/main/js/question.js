function main(params) {

    for(var i = 0; i < params.documents.document.length; i++) {
        var document = params.documents.document[i];
        if(document.question[0] === params.question) {
            return { url: document.dataurl };
        }
    }
    throw "De gestelde vraag is niet bekend in het systeem: " + params.question;
}