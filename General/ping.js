// Dependencies
const Discord = require('discord.js');
const pretty = require('pretty-ms');
const prefix = '!'

// Ready
client.on('ready', async () => {
    console.log('Bot is online!')
})

// Start
client.on('message', message => {
    if (message.content === `${prefix}ping`) {
        message.channel.send(`**Pong!** Client Latency: \`${Math.round(client.ws.ping)}ms\`.`)
    }
})

client.login('TOKEN')
