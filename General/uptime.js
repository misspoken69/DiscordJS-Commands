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
  if (message.content === prefix + 'uptime') {
        
      const embed = new Discord.MessageEmbed()
      .setDescription(`My uptime is: ${pretty(client.uptime)}`)
      .setColor(000000)
      message.channel.send(embed)
  }
})

client.login('TOKEN')
