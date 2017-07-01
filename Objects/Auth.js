// Returns link to authenticate WaldyBot on a new server.
function discordServerAuthenticate(client_id, username) {
    var address = 'https://discordapp.com/oauth2/authorize?&client_id=' + client_id + '&scope=bot&permissions=0';
    function addressObj() {
        return this[username] = address;
    }
    return addressObj();
}

// Objects
// Discord Token Object
var discordTokensObject = {
    DiscordToken: 'MzI4MjM2OTQ3ODIwNzczMzg2.DDIgsw.WH07ZgokdvsY8szEW94ZiUfqp7M',
    DiscordTokenBeta: 'MzI4OTUwODE2ODY4MTM5MDE5.DDLW1Q.Jemr2DRo5Z63idqOBIvTKl2EWhw'
}
// WaldyBot User Objects
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
// Address Objects
var waldyBotAuthUrlString = discordServerAuthenticate(waldyBot.id, waldyBot.username); 
var waldyBotAuthUrlObj = {waldyBotAuthUrlString}

// Export Object
var exportobject = {
    discordTokensObject, 
    waldyBot, 
    waldyBotBeta, 
    waldyBotAuthUrlObj
}
module.exports = exportobject;