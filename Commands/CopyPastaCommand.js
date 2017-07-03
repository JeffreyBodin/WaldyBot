const globalVarsObjs = require('../Objects/GlobalVarsObjects.js');


var cmdCopyPasta = globalVarsObjs.commandVarObject.cmdCopyPasta;
var copyPastaObjs = globalVarsObjs.otherObject.copyPastaObjs;

// CopyPasta Responses
// Copypastas Keywords/Phrases
var copyPastaKeywordsPhrases = function(client) {
    client.on('message', message => {
        if(message.content === cmdCopyPasta + ' ' + 'im syliris') {
            message.channel.send(copyPastaObjs.imsyliris);
        } 
    });
}

// Objects
var copyPastaKeywordsPhrasesObject = {
    copyPastaKeywordsPhrases: copyPastaKeywordsPhrases
}

var exportobject = {
    copyPastaKeywordsPhrasesObject: copyPastaKeywordsPhrasesObject
}
module.exports = exportobject;