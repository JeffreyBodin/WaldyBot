//const mediaStorage = require('./Media Storage');
const fs = require('fs');   

var mediaObject = {
    kizunaai: {
        considerthefollowing: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/testbuild/Objects/Media%20Storage/kizunaai_considerthefollowing.jpg'
    },
    highground: {
        method: function (){
            var random = Math.ceil(Math.random() * 13);
            //console.log(random);
            return random;
        },
        1: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/0ae.png',
        2: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/441.jpg',
        3: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/60e.jpg',
        4: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/6d94a3fe3837f590959bac9084c6379de5e6f10e9427c43e2e3cd0eac9f31429_3.jpg',
        5: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/6eb.png',
        6: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/911.jpg',
        7: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/99f.png',
        8: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/CyWh1QiXcAEmTLO.jpg',
        9: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/download.png',
        10: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/e76.jpg',
        11: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/f5bc3zl.png',
        12: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/f90496b55bef5680b8f17f91ae9bc81101cd5e98f1d94e8437d6a5a9943b409f_3.jpg',
        13: 'https://raw.githubusercontent.com/JeffreyBodin/WaldyBot/master/Objects/Media%20Storage/HighGround/idontalwaysunderestimate-someones-power-but-when-do-i-cut-3-of-14932721.png'
    }
    
}

var exportobject = {
    mediaObject: mediaObject
}
module.exports = exportobject;