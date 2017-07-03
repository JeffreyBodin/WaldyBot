const authFile = require('./Auth.js');
const helpObjs = require('./HelpObjects.js');
const asciiObjs = require('./ASCIIObjects.js');
const copyPastaObjs = require('./CopyPastaObjects.js');
const youtubeObjs = require('./YoutubeObjects.js');


// Global Vars
const waldyBot = authFile.waldyBot;
const waldyBotBeta = authFile.waldyBotBeta;

// Command Vars + Command Var's Help Descriptions
var cmdHelp = helpObjs.cmdVarObject.cmdHelp;
var cmdHelpHelp = helpObjs.cmdVarObject.cmdHelpHelp;
var cmdSetUp = helpObjs.cmdVarObject.cmdSetUp;
var cmdSetUpHelp = helpObjs.cmdVarObject.cmdSetUpHelp;
var cmdSetUpInstallHelp = helpObjs.cmdVarObject.cmdSetUpInstallHelp;
var cmdPing = helpObjs.cmdVarObject.cmdPing;
var cmdPingHelp = helpObjs.cmdVarObject.cmdPingHelp;
var cmdCoolAscii = helpObjs.cmdVarObject.cmdCoolAscii;
var cmdCoolAsciiHelp = helpObjs.cmdVarObject.cmdCoolAsciiHelp;
var cmdCopyPasta = helpObjs.cmdVarObject.cmdCopyPasta;
var cmdCopyPastaHelp = helpObjs.cmdVarObject.cmdCopyPastaHelp;

// Help Files - Contains strings that are DM'd to user on request for help.
var helpFile = helpObjs.helpFilesObject.helpFile;
var setUpFile = helpObjs.helpFilesObject.setUpFile;

// Authentication
var waldyBotAuthUrl = authFile.waldyBotAuthUrlObj.waldyBotAuthUrlString;
var authToken = authFile.discordTokensObject.DiscordToken; // WaldyBot
var authTokenBeta = authFile.discordTokensObject.DiscordTokenBeta; // WaldyBot Beta

// Objects
var globalVarObject = {
    waldyBot: waldyBot,
    waldyBotBeta: waldyBotBeta
}

var filesObject = {
    helpFile: helpFile,
    setUpFile: setUpFile
}

var otherObject = {
    asciiObjs: asciiObjs.asciiObject,
    copyPastaObjs: copyPastaObjs.copyPastaObject,
    youtubeObjs: youtubeObjs.youtubeVideoObjects,
}

var authenticationObject = {
    waldyBotAuthUrl: waldyBotAuthUrl,
    authToken: authToken,
    authTokenBeta: authTokenBeta
}

var commandVarObject = {
    cmdHelp: cmdHelp,
    cmdHelpHelp: cmdHelpHelp,
    cmdSetUp: cmdSetUp,
    cmdSetUpHelp: cmdSetUpHelp,
    cmdSetUpInstallHelp: cmdSetUpInstallHelp,
    cmdPing: cmdPing,
    cmdPingHelp: cmdPingHelp,
    cmdCoolAscii: cmdCoolAscii,
    cmdCoolAsciiHelp: cmdCoolAsciiHelp,
    cmdCopyPasta: cmdCopyPasta,
    cmdCopyPastaHelp: cmdCopyPastaHelp  
}

var exportobject = {
    globalVarObject: globalVarObject,
    filesObject: filesObject,
    otherObject: otherObject, 
    authenticationObject: authenticationObject,
    commandVarObject: commandVarObject
}

module.exports = exportobject;