var asciiObjs = {
    syphilis: '༼ つ ◕_◕ ༽つ SYLIRIS GIVE ME SYPHILIS ༼ つ ◕_◕ ༽つ',
    $: '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅] CASH MONEY [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]',
    momoney: '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅] Mo\' money, mo\' Dongers [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]',
    hadouken: '༼つಠ益ಠ༽つ ─=≡ΣO)) HADOUKEN',
    dongerhood: '༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽YOU CAME TO THE WRONG DONGERHOOD༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽',
    dieadodger: '༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽You either die a DODGER, or fill long enough to become the SUPPORT༼ ºل͟º༼ ºل͟º༼ ºل͟º༼ ºل͟º ༽ºل͟º ༽ºل͟º ༽',
    feeding: 'ᕙ༼ຈل͜ຈ༽ᕗ. FEEDING,﻿ FEEDING, FEEDING, FEEDING.ᕙ༼ຈل͜ຈ༽ᕗ'
}

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('MzI4MjM2OTQ3ODIwNzczMzg2.DQJ-zw.V16vHlrxNWuLTaEO1xFa8eWR3sA');