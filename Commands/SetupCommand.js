const globalVarsObjs = require('../Objects/GlobalVarsObjects.js');


var cmdSetUp = globalVarsObjs.commandVarObject.cmdSetUp;
var setUpFile = globalVarsObjs.filesObject.setUpFile;
var waldyBotAuthUrl = globalVarsObjs.authenticationObject.waldyBotAuthUrl;

// Setup Responses:
// setUpResponsesObject's Method
var setUpResponsesMethod = function(client) {
    client.on('message', message => {
        if(message.content.toLowerCase() === cmdSetUp) {
            message.author.createDM(message.author.send(waldyBotAuthUrl));
        }
        if(message.content.toLowerCase() === cmdSetUp + ' ' + 'help') {
            message.author.createDM(message.author.send(setUpFile));
        }
        if(message.content.toLowerCase() === cmdSetUp + ' ' + 'install') {
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