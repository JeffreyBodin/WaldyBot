const globalVarsObjs =  require('../Objects/GlobalVarsObjects.js');
const fs = require('fs');
var util = require('util');
const google = require('googleapis');
var waldyBotOAuth = JSON.parse(fs.readFileSync('./Objects/GoogleApi/clientsecret.json', 'utf8'));
var gcloud = require('google-cloud')({
  projectId: 'WaldyBot',
  keyFilename: './Objects/GoogleApi/keyfile.json'
});

/*var clientid = waldyBotOAuth["client_id"];
var clientsecret = waldyBotOAuth["client_secret"];
var redirecturis = waldyBotOAuth["redirect_uris"];
var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(
  waldyBotOAuth["client_id"],
  waldyBotOAuth["client_secret"],
  waldyBotOAuth["redirect_uris"]
);*/

var youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyDVY71s-EYABgcxoiE8Vt7py7RlYTdEIyc' // If 'key' doesn't work replace with 'auth'.
});

/*// set auth as a global default
google.options({
  auth: oauth2Client
});*/


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
// a very simple example of searching for youtube videos
var youtubeSearch = function(client) {
    client.on('message', message => {
        if (message.content.toLowerCase() === cmdYoutube + ' ' + 's')
            message.content.send();
        }
    );
} 


function runSamples() {
  youtube.search.list({
    part: 'id,snippet',
    q: 'Node.js on Google Cloud'
  }, function (err, data) {
    if (err) {
      console.error('Error: ' + err);
    }
    if (data) {
      console.log(util.inspect(data, false, null));
    }
    process.exit();
  });
}

var scopes = [
  'https://www.googleapis.com/auth/youtube'
];

// Objects
var youtubeKeywordsPhrasesObject = {
    youtubeKeywordsPhrases: youtubeKeywordsPhrases,

}

var exportobject = {
    youtubeKeywordsPhrasesObject: youtubeKeywordsPhrasesObject
}
module.exports = exportobject;