// Imported Node Modules
var Discord = require('discord.js');
var client = new Discord.Client();
var richEmbed = new Discord.RichEmbed({ });
var fs = require('fs');
var globalVarsObjs = require('./Objects/GlobalVarsObjects.js');
var helpCommand = require('./Commands/HelpCommand.js');
var setupCommand = require('./Commands/SetupCommand.js');
var pingCommand = require('./Commands/PingCommand.js');
var coolAsciiFaceCommand = require('./Commands/CoolAsciiFaceCommand.js');
var copyPastaCommand = require('./Commands/CopyPastaCommand.js');
var youtubeCommand = require('./Commands/YoutubeCommand.js');
var mediaCommand = require('./Commands/MediaCommands.js')
var hook = new Discord.WebhookClient(); // placeholder

process.setMaxListeners(100);
client.setMaxListeners(100);

// Global Vars:
var packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var waldyBotVersion = packageJson["version"];
// Discord Authentication Token Variables (Optional)
// Use in place of your tokens (wrapped in a string). Define in the Objects/Auth.js. 
// See end of program for placement.
const authToken = globalVarsObjs.authenticationObject.authToken; // WaldyBot
const authTokenBeta = globalVarsObjs.authenticationObject.authTokenBeta; // WaldyBot Beta
const authTokenBetaTestFile = globalVarsObjs.authenticationObject.authTokenBetaTestFile; // TestFile's WaldyBot Beta Integration


// Startup
client.once('ready', () => {
  console.log('v' + waldyBotVersion);
  console.log('Ready....'); 
}
);

// WaldyBot's Current Game
var botIsPlaying = 'w help';

client.once('ready', () => {
  client.user.setGame(botIsPlaying);
}
);
// Log's
client.on('message', message => {
	console.log(message.content);
}
);

// Webhooks (placeholder)

// Commands:
// Help
helpCommand.helpFileResponsesObject.helpFileResponsesObjectMethod(client);
// Setup
setupCommand.setUpResponsesObject.setUpResponsesMethod(client);
// Ping/Pong Server Check
pingCommand.pingResponsesObject.pingResponsesMethod(client);
// Cool-Ascii-Face Randomized
coolAsciiFaceCommand.coolAsciiRandomizedObject.coolAsciiRandomized(client);
// Cool-Ascii-Face Keywords/Phrases
coolAsciiFaceCommand.coolAsciiKeywordsPhrasesObject.coolAsciiKeywordsPhrases(client);
// Copypastas Keywords/Phrases
copyPastaCommand.copyPastaKeywordsPhrasesObject.copyPastaKeywordsPhrases(client);
// Youtube Commands
youtubeCommand.youtubeCmdObject.youtubeKeywordsPhrases(client);
youtubeCommand.youtubeCmdObject.youtubeSearch(client);

// Responses:
// Placeholder for Auto-Responses
mediaCommand.mediaResponsesObject.onJoin(client);
mediaCommand.mediaResponsesObject.mediaResponses(client);
mediaCommand.mediaResponsesObject.waldyBotMentionsResponses(client);

// Webhooks TestCmds
client.on('message', message => {
  if(message.content === 'w ' + 'webhook test') {
   message.channel.send('under construction');
  } 
});

// WaldyBot Login Token Goes Here: NEVER commmit your WaldyBot's Login Token to public Git/GitHub/Source Control.
  // Note on Pre-Made/Integrated Vars 
    // Vars: authToken, authTokenBeta
      // Path of vars is /Objects/Auth.js
      // User can edit/add their bot's token in this file. For full future-proof integration. 
      // No need to re-authenticate/generate the bot's token.  
    // For ALL Users: "authToken" = Your bot's auth token string.
    // For Dev Users: "authTokenBeta" = Local testing instance bot's token.
      // Also Dev: "authTokenBetaTestFile" = .gitignore testing integration bot's token.
client.login(authToken); // Your Discord Bot's Auth Token (String) Goes HERE <------------