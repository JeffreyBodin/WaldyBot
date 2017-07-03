const coolAscii = require('cool-ascii-faces');
const globalVarsObjs = require('../Objects/GlobalVarsObjects.js');


var cmdCoolAscii = globalVarsObjs.commandVarObject.cmdCoolAscii;
var asciiObjs = globalVarsObjs.otherObject.asciiObjs;

// Ascii Responses
// Cool-Ascii-Face Randomized
var coolAsciiRandomized = function(client){
    client.on('message', message => {
        if(message.content === cmdCoolAscii) {
            message.channel.send(coolAscii());
        } 
    });
}
// Cool-Ascii-Face Keywords/Phrases
var coolAsciiKeywordsPhrases = function(client) {
    client.on('message', message => {
        if(message.content === cmdCoolAscii + ' ' + message.mentions.users.first()) {
            message.mentions.users.first().createDM(message.mentions.users.first().send(coolAscii()));
        }
        if(message.content === cmdCoolAscii + ' ' + 'deal with it') {
            message.channel.send(coolAscii.faces[36]);
        }
        if(message.content === cmdCoolAscii + ' ' + 'raise your dongers') {
            message.channel.send(coolAscii.faces[35]);
        }
        if(message.content === cmdCoolAscii + ' ' + 'syphilis') {
            message.channel.send(asciiObjs.syphilis);
        }
        if(message.content === cmdCoolAscii + ' ' + '$') {
            message.channel.send(asciiObjs.$);
        }
        if(message.content === cmdCoolAscii + ' ' + 'mo money') {
            message.channel.send(asciiObjs.momoney);
        }
        if(message.content === cmdCoolAscii + ' ' + 'hadouken') {
            message.channel.send(asciiObjs.hadouken);
        }
        if(message.content === cmdCoolAscii + ' ' + 'dongerhood') {
            message.channel.send(asciiObjs.dongerhood);
        }
        if(message.content === cmdCoolAscii + ' ' + 'die a dodger') {
            message.channel.send(asciiObjs.dieadodger);
        }
        if(message.content === cmdCoolAscii + ' ' + 'feeding') {
            message.channel.send(asciiObjs.feeding);
        }  
    });
}

// Objects
var coolAsciiRandomizedObject = {
    coolAsciiRandomized: coolAsciiRandomized
}

var coolAsciiKeywordsPhrasesObject = {
    coolAsciiKeywordsPhrases: coolAsciiKeywordsPhrases
} 

var exportobject = {
    coolAsciiRandomizedObject: coolAsciiRandomizedObject,
    coolAsciiKeywordsPhrasesObject: coolAsciiKeywordsPhrasesObject
}

module.exports = exportobject;