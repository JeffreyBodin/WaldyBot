const Discord = require('discord.js');
const client = new Discord.Client();
const coolAscii = require('cool-ascii-faces');
const asciiObjs = require('./Objects/ASCIIObjects.js');
const copyPastaObjs = require('./Objects/CopyPastaObjects.js');
const helpObjs = require('./Objects/HelpObjects.js');
const globalVarsObjs = require('./Objects/GlobalVarsObjects.js');
const helpCommand = require('./Commands/HelpCommand.js');
const setupCommand = require('./Commands/SetupCommand.js');
const pingCommand = require('./Commands/PingCommand.js');
const hook = new Discord.WebhookClient();

process.setMaxListeners(0);


// Global Vars
const waldyBot = globalVarsObjs.globalVarObject.waldyBot;
const waldyBotBeta = globalVarsObjs.globalVarObject.waldyBotBeta;
const authToken = globalVarsObjs.authenticationObject.authToken; // WaldyBot
const authTokenBeta = globalVarsObjs.authenticationObject.authTokenBeta; // WaldyBot Beta


// Startup
client.on('ready', () => {
  console.log('Ready....');
}
);

// WaldyBot's Current Game
var botIsPlaying = 'w help';

client.on('ready', () => {
  client.user.setGame(botIsPlaying);
}
);

// Webhooks

// Command Vars w/Help Descriptions;
var cmdCoolAscii = helpObjs.cmdVarObject.cmdCoolAscii;
var cmdCoolAsciiHelp = helpObjs.cmdVarObject.cmdCoolAsciiHelp;
var cmdCopyPasta = helpObjs.cmdVarObject.cmdCopyPasta;
var cmdCopyPastaHelp = helpObjs.cmdVarObject.cmdCopyPastaHelp;


// Commands:
// Help
helpCommand.helpFileResponsesObject.helpFileResponsesObjectMethod(client);
// Setup
setupCommand.setUpResponsesObject.setUpResponsesMethod(client);
// Ping/Pong Server Check
pingCommand.pingResponsesObject.pingResponsesMethod(client);
// Cool-Ascii-Face Randomized
client.on('message', message => {
  if(message.content === cmdCoolAscii) {
    message.send(coolAscii());
  } 
});
// Cool-Ascii-Face Keywords/Phrases
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
  if(message.content === cmdCoolAscii + ' ' + 'mo\' money') {
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
// Copypastas Keywords/Phrases
client.on('message', message => {
  if(message.content === cmdCopyPasta + ' ' + 'im syliris') {
    message.channel.send(copyPastaObjs.imsyliris);
  } 
});
// Webhooks TestCmds
client.on('message', message => {
  if(message.content === 'w ' + 'webhook test') {
   message.channel.send('under construction');
  } 
});

// WaldyBot Login Token Goes Here: For local testing use tokenBeta.
client.login(authToken);