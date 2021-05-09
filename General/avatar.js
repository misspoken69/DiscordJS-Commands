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
  if (message.content.toLowerCase().startsWith(prefix + 'avatar')) {
      const member = message.mentions.users.first() || message.author
      let avatar = member.displayAvatarURL({ dynamic:true , size:1024 })
      
      const embed = new Discord.MessageEmbed()
          .addField(
        `${member.username}'s Avatar`,
        `[png](${member.displayAvatarURL({
          format: "png",
          dynamic: true
        })}) | [jpg](${member.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}) | [webp](${member.displayAvatarURL({
          format: "webp",
          dynamic: true
        })})`
      )
      .setImage(avatar)
      .setColor('RANDOM')
      .setTimestamp()
      message.channel.send(embed)
  }
})

client.login('TOKEN')
