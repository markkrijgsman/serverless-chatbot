#!/bin/bash -e

wsk action update question src/main/js/question.js --param-file src/main/resources/questions.json
wsk action update get-url src/main/js/util/get-url.js
wsk action update parse-xml src/main/js/util/parse-xml.js
wsk action update extract-answer src/main/js/extract-answer.js
wsk action update ask-question --sequence question,get-url,parse-xml,extract-answer

wsk action invoke --result ask-question --param question "Hoe lang moet ik mijn financiële administratie bewaren?"