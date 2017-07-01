const globalVarsObjs = require('../Objects/GlobalVarsObjects.js');


var cmdSetUp = globalVarsObjs.commandVarObject.cmdSetUp;
var setUpFile = globalVarsObjs.filesObject.setUpFile;
var waldyBotAuthUrl = globalVarsObjs.authenticationObject.waldyBotAuthUrl;

// Setup Responses:
// setUpResponsesObject's Method
var setUpResponsesMethod = function(client) {
    client.on('message', message => {
        if(message.content === cmdSetUp) {
            message.author.createDM(message.author.send(setUpFile));
        }
    });
    client.on('message', message => {
        if(message.content === cmdSetUp + ' ' + 'install') {
            message.author.createDM(message.author.send(waldyBotAuthUrl));
        }
    });
}
// Objects
var setUpResponsesObject = {
    setUpResponsesMethod: setUpResponsesMethod
}

var exportobject = {
    setUpResponsesObject: setUpResponsesObject
}
module.exports = exportobject;