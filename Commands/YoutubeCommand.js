const globalVarsObjs =  require('../Objects/GlobalVarsObjects.js');
const fs = require('fs');
const google = require('googleapis');
/* const gapi = require('../Objects/GoogleApi/gapi.js'); */
var waldyBotOAuth = JSON.parse(fs.readFileSync('./Objects/GoogleApi/clientsecret.json', 'utf8'));


var youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyDVY71s-EYABgcxoiE8Vt7py7RlYTdEIyc' // If 'key' doesn't work replace with 'auth'.
});


var cmdYoutube = globalVarsObjs.commandVarObject.cmdYoutube;
var youtubeObjs = globalVarsObjs.otherObject.youtubeObjs;

// Youtube Responses
// Youtube Keywords/Phrases
var youtubeKeywordsPhrases = function(client) {
    client.on('message', message => {
        if(message.content.toLowerCase() === cmdYoutube + ' ' + 'boneless pizza') {
            message.channel.send(youtubeObjs.bonelesspizza.url);
        }   
    });
}

// Youtube Search
var youtubeSearch = function(client) {
    client.on('message', message => {
      // set up so that the string from user shown here can be parsed and sent to api. 'w youtube s ' + 'this here'
      if (message.content.toLowerCase().includes(cmdYoutube + ' ' + 's')) {
        let squery = message.content.toLowerCase().substring(12);
        console.log(squery);
      }
      if (message.content.toLowerCase() === cmdYoutube + ' ' + 's') {
        let squery = message.content.toLowerCase().substring(12);
        console.log(squery);
      }
      if (message.content.toLowerCase().includes(cmdYoutube + ' ' + 's')) {
        let squery = ''; 
        squery += message.content.toLowerCase().substring(12);
        onClientLoad();

        function onClientLoad() {
            google.addAPIs(youtube);
             onApiLoad();
        }

        function onApiLoad() {
            google.auth('AIzaSyDVY71s-EYABgcxoiE8Vt7py7RlYTdEIyc');
            search();
        }

        function consoleLog(response) {
            var responseStringified = JSON.stringify(response, '', 2); 
            console.log(responseStringified);
        }

        function onSearchResponse(response) {
            consoleLog(response);
        } 
            // query area set up so that the string from user shown here can be parsed and sent to api. 'w youtube s ' + 'this here'
        function search() {
            var request = google.client.youtube.search.list({
                part: 'snippet',
                q: squery
            });
            // Send the req search to the API server.
            request.execute(onSearchResponse);
        }
      }
    });
}

// Objects
var youtubeCmdObject = {
    youtubeKeywordsPhrases: youtubeKeywordsPhrases,
    youtubeSearch: youtubeSearch

}

var exportobject = {
    youtubeCmdObject: youtubeCmdObject
}
module.exports = exportobject;