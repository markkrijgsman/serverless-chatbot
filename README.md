**Maak een nieuwe actie aan**  
`wsk action create <action-name> <javascript-filename>`  

**Werk een bestaande actie bij**  
`wsk action update <action-name> <javascript-filename>`  

**Lijst van aangemaakte acties**  
`wsk action list`

**Voer actie uit**  
`wsk action invoke [--blocking] <action-name>`  
`wsk action invoke --result <action-name> --param name World --param place Diemen`  

**Lijst van uitgevoerde acties**  
`wsk activation list`