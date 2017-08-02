// Command Vars + Command Var's Help Descriptions
var cmdHelp = 'w ' + 'help';
var cmdHelpHelp = 'w help\n\t ' + 'Requests my command list.';
var cmdSetUp = 'w ' + 'setup';
var cmdSetUpHelp = 'w setup\n\t ' + 'Requests my setup information.';
var cmdSetUpInstallHelp = 'w setup install\n\t ' + 'Requests my server authentication url. Used by server owners/admins.\n\t ' + 'Go to the recieved url to add me to your server.';
var cmdPing = 'w ' + 'ping';
var cmdPingHelp = 'w ping\n\t ' + 'Checks my current online/offline status.';
var cmdCoolAscii = 'w ' + 'ascii';
var cmdCoolAsciiHelp = 'w ascii\n\t ' + 'Returns a randomized Ascii face.ヽ༼ຈل͜ຈ༽ﾉ\n\t ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n\t ' + 'Keywords: @mention, deal with it, raise your dongers, syphilis, $, mo money, hadouken, dongerhood, die a dodger, feeding';
var cmdCopyPasta = 'w ' + 'copypasta';
var cmdCopyPastaHelp = 'w copypasta\n\t ' + 'Returns copypastas.\n\t ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n\t ' + 'Keywords: im syliris';
var cmdYoutube = 'w ' + 'yt';
var cmdYoutubeHelp = 'w yt\n\t ' + 'Returns Youtube videos.\n\t ' + 'Cmd is modified with postfixed keywords/phrases following a single space.\n\t ' + 'Keywords: s, boneless pizza\n\t ' + 'To search youtube enter postfixed query following the s keyword and a single space.';

// Help Files
var helpFile = '```javascript\n' + '// This is my command list.\n ' + 'All commands are prefixed by a \'w\' and a single space.\n ' + cmdHelpHelp + '\n ' + cmdSetUpHelp + '\n ' + cmdPingHelp + '\n ' + cmdCoolAsciiHelp + '\n ' + cmdCopyPastaHelp + '\n ' + cmdYoutubeHelp + '\n ' + '```';
var setUpFile = '```javascript\n' + '// This is my setup information.\n ' + 'All commands are prefixed by a \'w\' and a single space along with setup keyword.\n ' + cmdSetUpHelp  + '\n ' + cmdSetUpInstallHelp + '\n ' + '```';

// Objects
var cmdVarObject = {
    cmdHelp: cmdHelp,
    cmdHelpHelp:cmdHelpHelp,
    cmdSetUp: cmdSetUp,
    cmdSetUpHelp: cmdSetUpHelp,
    cmdSetUpInstallHelp: cmdSetUpInstallHelp, 
    cmdPing: cmdPing,
    cmdPingHelp: cmdPingHelp,
    cmdCoolAscii: cmdCoolAscii,
    cmdCoolAsciiHelp: cmdCoolAsciiHelp,
    cmdCopyPasta: cmdCopyPasta,
    cmdCopyPastaHelp: cmdCopyPastaHelp,
    cmdYoutube: cmdYoutube,
    cmdYoutubeHelp: cmdYoutubeHelp
}
var helpFilesObject = {
    helpFile: helpFile,
    setUpFile: setUpFile
}
var exportObject = {
    cmdVarObject: cmdVarObject,
    helpFilesObject: helpFilesObject
}



module.exports = exportObject;
