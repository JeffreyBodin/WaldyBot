const Discord = require('discord.js');
const client = new Discord.Client();
const coolAscii = require('cool-ascii-faces');
const asciiObjs = require('./Objects/ASCIIObjects.js');
const copyPastaObjs = require('./Objects/CopyPastaObjects.js');
const authFile = require('./Objects/Auth.js');
const hook = new Discord.WebhookClient();

process.setMaxListeners(0);


// Global Vars
const waldyBot = authFile.waldyBot;
const waldyBotBeta = authFile.waldyBotBeta;
const authToken = authFile.object1.DiscordToken; // WaldyBot
const authTokenBeta = authFile.object1.DiscordTokenBeta; // WaldyBot Beta


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

// Command Descriptions/Declarations
var cmdHelp = 'w ' + 'help';
var cmdHelpHelp = 'w help\n\t ' + 'Requests my command list.';
var cmdSetUp = 'w ' + 'setup';
var cmdSetUpHelp = 'w setup\n\t ' + 'Requests my setup information.';
var cmdSetUpInstallHelp = 'w setup install\n\t ' + 'Requests my server authentication url. Used by server owners/admins.\n\t ' + 'Go to the recieved url to add me to your server.';
var cmdPing = 'w ' + 'ping';
var cmdPingHelp = 'w ping\n\t ' + 'Checks my current online/offline status.';
var cmdCoolAscii = 'w ' + 'ascii';
var cmdCoolAsciiHelp = 'w ascii\n\t ' + 'Returns a randomized Ascii face.ヽ༼ຈل͜ຈ༽ﾉ\n\t ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n\t ' + 'Keywords: @mention, deal with it, raise your dongers, syphilis, $, mo\' money, hadouken, dongerhood, die a dodger, feeding';
var cmdCopyPasta = 'w ' + 'copypasta';
var cmdCopyPastaHelp = 'w copypasta\n\t ' + 'Returns copypastas.\n\t ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n\t ' + 'Keywords: im syliris';


// Help File
var helpFile = '```javascript\n' + '// This is my command list.\n ' + 'All commands are prefixed by a \'w\' and a single space.\n ' + cmdHelpHelp + '\n ' + cmdSetUpHelp + '\n ' + cmdPingHelp + '\n ' + cmdCoolAsciiHelp + '\n ' + cmdCopyPastaHelp + '\n ' + '```';
var setUpFile = '```javascript\n' + '// This is my setup information.\n ' + 'All commands are prefixed by a \'w\' and a single space along with setup keyword.\n ' + cmdSetUpHelp  + '\n ' + cmdSetUpInstallHelp + '\n ' + '```';

// Commands:
// Help
client.on('message', message => {
  if(message.content === cmdHelp) {
    message.author.createDM(message.author.send(helpFile));
    };
  } 
);
client.on('message', message => {
  if (message.isMemberMentioned(waldyBot) === true) { 
    message.author.createDM(message.author.send(helpFile));
  };
  if (message.isMemberMentioned(waldyBotBeta) === true) { 
    message.author.createDM(message.author.send(helpFile));
  };
});
// Setup
client.on('message', message => {
  if(message.content === cmdSetUp) {
    message.author.createDM(message.author.send(setUpFile));
  }
});
client.on('message', message => {
  if(message.content === cmdSetUp + ' ' + 'install') {
    message.author.createDM(message.author.send(authFile.waldyBotAuthUrlObj.waldyBotAuthUrlString));
  }
});
// Ping/Pong Server Check
client.on('message', message => {
  if(message.content === cmdPing) {
    message.channel.send('pong');
  }
});
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
// Copypastas Keywrods/Phrases
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