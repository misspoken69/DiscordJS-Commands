// Dependencies
const Discord = require('discord.js');
const prefix = '!'

// Ready
client.on('ready', async () => {
    console.log('Bot is online!')
})

// Start
client.on('message', async message => {
    if (message.content === prefix + 'randompfp') {
        function pfp(){ // Interval Function
            const user = client.users.cache.random(); // Finds A Random User From Cache
            const random = new Discord.MessageEmbed()
            .setColor(000000)
            .setImage(user.displayAvatarURL({ dynamic:true , size:256}))
            .setFooter('made by misspoken69')
            .setTimestamp
            .addField(
            "a new random pfp has arrived!",
            `[png](${user.displayAvatarURL({
              format: "png",
              dynamic: true
            })}) | [jpg](${user.displayAvatarURL({
              format: "jpg",
              dynamic: true
            })}) | [webp](${user.displayAvatarURL({
              format: "webp",
              dynamic: true
            })})`
          )
        message.channel.send(random).then(res => message.delete()) // Sends The Embed
        
        }
        setInterval(pfp, 3000) // Defines Interval & Sets Milliseconds
    }
})

client.login('TOKEN')
