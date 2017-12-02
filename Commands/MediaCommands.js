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
        if(message.content.toLowerCase() === 'high ground') {
            var randomNum = mediaObjects.mediaObject.highground.method();
            message.channel.send(mediaObjects.mediaObject.highground[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'highground') {
            var randomNum = mediaObjects.mediaObject.highground.method();
            message.channel.send(mediaObjects.mediaObject.highground[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'high_ground') {
            var randomNum = mediaObjects.mediaObject.highground.method();
            message.channel.send(mediaObjects.mediaObject.highground[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'high' + 'ground') {
            var randomNum = mediaObjects.mediaObject.highground.method();
            message.channel.send(mediaObjects.mediaObject.highground[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'star wars') {
            var randomNum = mediaObjects.mediaObject.starwars.method();
            message.channel.send(mediaObjects.mediaObject.starwars[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'prequel memes') {
            var randomNum = mediaObjects.mediaObject.starwars.method();
            message.channel.send(mediaObjects.mediaObject.starwars[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'dank wars') {
            var randomNum = mediaObjects.mediaObject.starwars.method();
            message.channel.send(mediaObjects.mediaObject.starwars[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'star memes') {
            var randomNum = mediaObjects.mediaObject.starwars.method();
            message.channel.send(mediaObjects.mediaObject.starwars[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'weeb') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'weebs') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'weed') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'dank weed') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'cush') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'snoop') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'snoop dog') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === '420') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'blaze it') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'blaze') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
        }
        if(message.content.toLowerCase() === 'itblaze') {
            var randomNum = mediaObjects.mediaObject.snoopdog.method();
            message.channel.send(mediaObjects.mediaObject.snoopdog[randomNum]
            );
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