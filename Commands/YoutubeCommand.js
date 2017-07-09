const globalVarsObjs =  require('../Objects/GlobalVarsObjects.js');
const fs = require('fs');
const google = require('googleapis');
var waldyBotOAuth = JSON.parse(fs.readFileSync('./Objects/GoogleApi/clientsecret.json', 'utf8'));


var clientid = waldyBotOAuth["client_id"];
var clientsecret = waldyBotOAuth["client_secret"];
var redirecturis = waldyBotOAuth["redirect_uris"];


var OAuth2 = google.auth.OAuth2;
var oauth2Client = new OAuth2(
  waldyBotOAuth["client_id"],
  waldyBotOAuth["client_secret"],
  waldyBotOAuth["redirect_uris"]
);

var youtube = google.youtube({
  version: 'v3',
  auth: 'AIzaSyDVY71s-EYABgcxoiE8Vt7py7RlYTdEIyc' // If 'key' doesn't work replace with 'auth'.
});

youtube

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
// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
search.js


// Request to youtube's api see: https://developers.google.com/youtube/v3/docs/search/list#try-it.
/* buildApiRequest('GET',
                '/youtube/v3/search',
                {'maxResults': '25',
                 'part': 'snippet',
                 'q': 'surfing',
                 'type': ''});
*/
// Response obj  returned by above request.
/*{
  kind: "youtube#searchListResponse",
  etag: etag,
  nextPageToken: string,
  prevPageToken: string,
  regionCode: string,
  pageInfo: {totalResults: integer, resultsPerPage: integer},
  items: [search Resource]
}*/

// Objects
var youtubeKeywordsPhrasesObject = {
    youtubeKeywordsPhrases: youtubeKeywordsPhrases
}

var exportobject = {
    youtubeKeywordsPhrasesObject: youtubeKeywordsPhrasesObject
}
module.exports = exportobject;