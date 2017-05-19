function main(params) {
    return {
        payload: {
            url: params.document.canonical[0],
            introduction: params.document.introduction[0],
            content: params.document.content[0]
        }
    };
}