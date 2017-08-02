const gapi = require('./gapi.js');

// Search.js file
// Helper function to display JavaScript value on HTML page. // Delete later
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded. // Delete later
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9). // Delete later
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See https://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE');

    search();
}
// Search() function. // Delete later
function search() {
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: 'the floor is losing',
    });
    
   
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request. // Delete later
function onSearchResponse(response) {
    showResponse(response);
} 



// Functions (Declared like globals. Hoisted.) // stopped here note this comment right here for later
// Conversion of above showResponse function. Logs to console a stringified response. (see last func of script)

function onClientLoad() {
  gapi.client.load('youtube', 'v3', onApiLoad());
}

function onApiLoad() {
  gapi.client.setApiKey('AIzaSyDVY71s-EYABgcxoiE8Vt7py7RlYTdEIyc');
  search();
}

function consoleLog(response) {
  var responseStringified = JSON.stringify(response, '', 2); 
  console.log(responseStringified);
}

function search() {
  var request = gapi.client.youtube.search.list({
    part: 'snippet',
    q: 'the floor is losing' // query area set up so that the string from user shown here can be parsed and sent to api. 'w youtube s ' + 'this here'
  });
  // Send the req search to the API server.
  request.execute(consoleLog);
}

function onSearchResponse(response) {
  consoleLog(response);
}