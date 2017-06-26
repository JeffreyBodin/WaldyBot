const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzI4MjM2OTQ3ODIwNzczMzg2.DDIgsw.WH07ZgokdvsY8szEW94ZiUfqp7M'; // WaldyBot
const tokenBeta = 'MzI4OTUwODE2ODY4MTM5MDE5.DDLW1Q.Jemr2DRo5Z63idqOBIvTKl2EWhw'; // WaldyBot Beta

// This is the invite link for WaldyBot
// https://discordapp.com/oauth2/authorize?&client_id=328236947820773386&scope=bot&permissions=0
// This is the invite link for WaldyBot Beta
// https://discordapp.com/oauth2/authorize?&client_id=328950816868139019&scope=bot&permissions=0

// Global Vars

client.on('ready', () => {
  console.log('Ready....');
  }
);

// Command Descriptions/Declarations
var cmdHelp = 'w ' + 'help';
var cmdHelpHelp = 'w help\n\t ' + 'Requests my command list.';
var cmdPing = 'w ' + 'ping';
var cmdPingHelp = 'w ping\n\t ' + 'Checks my current online/offline status.';


// Help File
var helpFile = '```javscript // This is my command list.\n ' + 'All commands are prefixed by a \'w\' and a single space.\n ' + cmdHelpHelp + '\n ' + cmdPingHelp + '\n ' + '```';


client.on('message', message => {
  if(message.content === cmdHelp) {
    message.author.createDM(message.author.send(helpFile))
    };
  } 
);


client.on('message', message => {
  if(message.content === cmdPing) {
    message.channel.send('pong');
  }
});

// WaldyBot Login Token Goes Here: For local testing use tokenBeta.
client.login(tokenBeta).listen(process.env.PORT);