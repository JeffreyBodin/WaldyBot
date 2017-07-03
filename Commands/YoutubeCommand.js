const globalVarsObjs = require('../Objects/GlobalVarsObjects.js');


var cmdYoutube = globalVarsObjs.commandVarObject.cmdYoutube;
var youtubeObjs = globalVarsObjs.otherObject.youtubeObjs;

// Youtube Responses
// Youtube Keywords/Phrases
var youtubeKeywordsPhrases = function(client) {
    client.on('message', message => {
        if(message.content.toLowerCase() === cmdYoutube + 'boneless pizza') {
            message.channel.send(youtubeObjs.bonelesspizza.url);
        } 
    });
}

// Objects
var youtubeKeywordsPhrasesObject = {
    youtubeKeywordsPhrases: youtubeKeywordsPhrases
}

var exportobject = {
    youtubeKeywordsPhrasesObject: youtubeKeywordsPhrasesObject
}
module.exports = exportobject;