const Discord = require("discord.js");
const client = new Discord.Client();


// Currently Testing:
// WaldyBot @mentions Responses


// Functions
function discordClientLogin(bot_token) {
  function login() {
    return client.login(bot_token);
  } 
  return login();
}

// Arrays
// testing stuff <---------------------------- LOOK HERES 2019-10-04
//var discordTokensObjectArray = Array.from(discordTokensObject.DiscordTokenBeta_Alpha);
//console.log(discordTokensObjectArray);

// Objects
// Discord Token Object
var discordTokensObject = {
  DiscordToken: '', // Your Auth Token (String) Goes HERE <------------
  DiscordTokenBeta_Alpha: 'MzI4OTUwODE2ODY4MTM5MDE5.XZcCvA.lmdmgbFuWtHj9sQEX5TEZD31llk', // ALPHA (1st) instance local/test bot's token goes HERE <------------ 
  DiscordTokenBeta_Beta: '', // BETA (2nd) instance local/test bot's token goes HERE <------------
  DiscordTokenBeta_Gamma: '', // GAMMA (3rd) instance local/test bot's token goes HERE <------------
  DiscordTokenBeta_Delta: '', // DELTA (4th) instance local/test bot's token goes HERE <------------
  DiscordTokenBeta_Epsilon: '', // EPSILON (5th) instance local/test bot's token goes HERE <------------
  DiscordTokenBeta_Zeta: '', // ZETA (6th) instance local/test bot's token goes HERE <------------
  DiscordTokenBeta_Eta: '' // ETA (7th) instance local/test bot's token goes HERE <------------
}
// Bot's Local Instanced "Token" Object
  // Testing purposes. DON'T COMMIT TO PUBLIC REPO
var localTestDotJS = {
}

// Export Object
var exportobject = {
  discordTokensObject,
  localTestDotJS
}
module.exports = exportobject;
client.login(discordTokensObject.DiscordTokenBeta_Alpha);

discordClientLogin(discordTokensObject.DiscordToken);
discordClientLogin(discordTokensObject.DiscordTokenBeta_Alpha);
discordClientLogin(discordTokensObject.DiscordTokenBeta_Beta);
discordClientLogin(discordTokensObject.DiscordTokenBeta_Gamma);
discordClientLogin(discordTokensObject.DiscordTokenBeta_Delta);
discordClientLogin(discordTokensObject.DiscordTokenBeta_Epsilon);
discordClientLogin(discordTokensObject.DiscordTokenBeta_Zeta);
discordClientLogin(discordTokensObject.DiscordTokenBeta_Eta);