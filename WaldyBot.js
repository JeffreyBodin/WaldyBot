const Discord = require('discord.js');
const client = new Discord.Client();
const richEmbed = new Discord.RichEmbed({ });
const fs = require('fs');
const globalVarsObjs = require('./Objects/GlobalVarsObjects.js');
const helpCommand = require('./Commands/HelpCommand.js');
const setupCommand = require('./Commands/SetupCommand.js');
const pingCommand = require('./Commands/PingCommand.js');
const coolAsciiFaceCommand = require('./Commands/CoolAsciiFaceCommand.js');
const copyPastaCommand = require('./Commands/CopyPastaCommand.js');
const youtubeCommand = require('./Commands/YoutubeCommand.js');
const hook = new Discord.WebhookClient(); // placeholder

process.setMaxListeners(0);


// Global Vars
var packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var waldyBotVersion = packageJson["version"];
const authToken = globalVarsObjs.authenticationObject.authToken; // WaldyBot
const authTokenBeta = globalVarsObjs.authenticationObject.authTokenBeta; // WaldyBot Beta


// Startup
client.on('ready', () => {
  console.log('v' + waldyBotVersion);
  console.log('Ready....'); 
}
);

// WaldyBot's Current Game
var botIsPlaying = 'w help';

client.on('ready', () => {
  client.user.setGame(botIsPlaying);
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
youtubeCommand.youtubeKeywordsPhrasesObject.youtubeKeywordsPhrases(client);

youtubeCommand



// Webhooks TestCmds
client.on('message', message => {
  if(message.content === 'w ' + 'webhook test') {
   message.channel.send('under construction');
  } 
});

// WaldyBot Login Token Goes Here: For local testing use authTokenBeta.
client.login(authTokenBeta);