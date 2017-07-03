const globalVarsObjs = require('../Objects/GlobalVarsObjects.js');


var cmdPing = globalVarsObjs.commandVarObject.cmdPing;

// Ping Responses
// pingResponsesObject's Method
var pingResponsesMethod = function(client) {
    client.on('message', message => {
        if(message.content.toLowerCase() === cmdPing) {
            message.channel.send('pong');
        }
    });    
}

// Objects
var pingResponsesObject = {
    pingResponsesMethod: pingResponsesMethod
}

var exportobject = {
    pingResponsesObject: pingResponsesObject
}
module.exports = exportobject;
