* https://console.ng.bluemix.net/docs/openwhisk/index.html#getting-started-with-openwhisk
* https://console.ng.bluemix.net/docs/openwhisk/openwhisk_actions.html#openwhisk_actions  
* https://github.com/apache/incubator-openwhisk/blob/master/docs/actions.md  


1. Registreer een account bij IBM Bluemix
2. Installeer Apache Openwhisk CLI en authenticeer: https://console.ng.bluemix.net/openwhisk/cli
3. Maak een (publieke) API bij IBM Bluemix: https://console.ng.bluemix.net/openwhisk/apimanagement

**Maak een nieuwe actie aan**  
`wsk action create <action-name> <javascript-filename>`  
`wsk action create <action-name> --param-file parameters.json`

**Werk een bestaande actie bij**  
`wsk action update <action-name> <javascript-filename>`  

**Lijst van aangemaakte acties**  
`wsk action list`

**Voer actie uit**  
`wsk action invoke [--blocking] <action-name>`  
`wsk action invoke --result <action-name> --param name World --param place Diemen`  

**Lijst van uitgevoerde acties**  
`wsk activation list`

**Chainen van acties**  
`wsk action create <action-name> --sequence <action-1>,<action-2>,[action-n]`  
   
**API management**  
https://console.ng.bluemix.net/openwhisk/apimanagement?env_id=ibm:yp:us-south
