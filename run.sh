#!/bin/bash -e

wsk action update download-xml src/main/download-xml.js
wsk action update parse-xml src/main/parse-xml.js
wsk action update download-parse-xml --sequence download-xml,parse-xml

wsk action invoke --result download-parse-xml
