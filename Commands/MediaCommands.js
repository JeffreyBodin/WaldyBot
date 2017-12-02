const mediaObjects = require('../Objects/Media Storage/MediaObjects.js');

/*
message.channel.send("some text", {
    file: "http://link.to/your.file" // Or replace with FileOptions object
});
*/

var mediaResponses = function(client) {
    client.on('message', message => {
        if(message.content.toLowerCase() === 'kys') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'kill yourself') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'die') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === 'kill') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === ':skull:') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
        if(message.content.toLowerCase() === ':skull_crossbones:') {
            message.channel.send('', {
                file: mediaObjects.mediaObject.kizunaai.considerthefollowing
            });
        }
    });    
}

// Objects
var mediaResponsesObject = {
    mediaResponses: mediaResponses 
}

var exportobject = {
    mediaResponsesObject: mediaResponsesObject
}

module.exports = exportobject;