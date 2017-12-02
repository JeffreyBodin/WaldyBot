//const mediaStorage = require('./Media Storage');
const fs = require('fs');   

var mediaObject = {
    kizunaai: {
        considerthefollowing: fs.readFile('./kizunaai_considerthefollowing.jpg', function(data){
            return data;
        }),
        //considerthefollowing2: fs.link('./kizunaai_considerthefollowing.jpg', './kizunaai_considerthefollowing.jpg')
    },
    
}

var exportobject = {
    mediaObject: mediaObject
}
module.exports = exportobject;