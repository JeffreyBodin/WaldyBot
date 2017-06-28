const Discord = require('discord.js');
const coolAscii = require('cool-ascii-faces');
const ASCIIObj = require('./Objects/ASCIIObj');
const client = new Discord.Client();
const authToken = 'MzI4MjM2OTQ3ODIwNzczMzg2.DDIgsw.WH07ZgokdvsY8szEW94ZiUfqp7M'; // WaldyBot
const authTokenBeta = 'MzI4OTUwODE2ODY4MTM5MDE5.DDLW1Q.Jemr2DRo5Z63idqOBIvTKl2EWhw'; // WaldyBot Beta
const hook = new Discord.WebhookClient();


process.setMaxListeners(0);

// This is the invite link for WaldyBot
// https://discordapp.com/oauth2/authorize?&client_id=328236947820773386&scope=bot&permissions=0
// This is the invite link for WaldyBot Beta
// https://discordapp.com/oauth2/authorize?&client_id=328950816868139019&scope=bot&permissions=0

// Global Vars
var waldyBot = {
  id: '328236947820773386',
  username: 'WaldyBot',
  discriminator: '5871'
}
var waldyBotBeta = {
  id: '328950816868139019',
  username: 'WaldyBot Beta',
  discriminator: '7163'
}

var copyPastaObj = {
  imsyliris: 'I’m Syliris and this is my syphilis. I work here with my STD’s and my boosted teammates, Jordan and The Argonauts, and in 5 months I’ve learned one thing. You never know what is gonna come through that champ select.'
}


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
var cmdPing = 'w ' + 'ping';
var cmdPingHelp = 'w ping\n\t ' + 'Checks my current online/offline status.';
var cmdCoolAscii = 'w ' + 'ascii';
var cmdCoolAsciiHelp = 'w ascii\n\t ' + 'Returns a randomized Ascii face.ヽ༼ຈل͜ຈ༽ﾉ\n\t ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n\t ' + 'Keywords: @mention, deal with it, raise your dongers, syphilis, $, mo\' money, hadouken, dongerhood, die a dodger, feeding';
var cmdCopyPasta = 'w ' + 'copypasta';
var cmdCopyPastaHelp = 'w copypasta\n\t ' + 'Returns copypastas.\n\t ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n\t ' + 'Keywords: im syliris';


// Help File
var helpFile = '```javascript\n' + '// This is my command list.\n ' + 'All commands are prefixed by a \'w\' and a single space.\n ' + cmdHelpHelp + '\n ' + cmdPingHelp + '\n ' + cmdCoolAsciiHelp + '\n ' + cmdCopyPastaHelp + '\n ' + '```';

// Help Commands
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

// Commands:
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
    message.channel.send(ASCIIObj.asciiObjs.syphilis);
  }
  if(message.content === cmdCoolAscii + ' ' + '$') {
    message.channel.send(ASCIIObj.asciiObjs.$);
  }
  if(message.content === cmdCoolAscii + ' ' + 'mo\' money') {
    message.channel.send(ASCIIObj.asciiObjs.momoney);
  }
  if(message.content === cmdCoolAscii + ' ' + 'hadouken') {
    message.channel.send(ASCIIObj.asciiObjs.hadouken);
  }
  if(message.content === cmdCoolAscii + ' ' + 'dongerhood') {
    message.channel.send(ASCIIObj.asciiObjs.dongerhood);
  }
  if(message.content === cmdCoolAscii + ' ' + 'die a dodger') {
    message.channel.send(ASCIIObj.asciiObjs.dieadodger);
  }
  if(message.content === cmdCoolAscii + ' ' + 'feeding') {
    message.channel.send(ASCIIObj.asciiObjs.feeding);
  }  
});
// Copypastas Keywrods/Phrases
client.on('message', message => {
  if(message.content === cmdCopyPasta + ' ' + 'im syliris') {
    message.channel.send(copyPastaObj.imsyliris);
  } 
});
// Webhooks TestCmds
client.on('message', message => {
  if(message.content === 'w ' + 'webhook test') {
   message.channel.send('under construction');
  } 
});

// WaldyBot Login Token Goes Here: For local testing use tokenBeta.
client.login(authTokenBeta);