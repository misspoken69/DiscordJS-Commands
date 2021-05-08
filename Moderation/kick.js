// Dependencies
const Discord = require('discord.js');
const pretty = require('pretty-ms');
const prefix = '!'

// Ready
client.on('ready', async () => {
    console.log('Bot is online!')
})

// Start
client.on('message', async message => {
    if (message.content === prefix + 'kick') {
        if (!message.member.hasPermissions("KICK_MEMBERS")) return message.channel.send("[ERROR]  You can use this command because of invalid permissions!")
        
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason provided."
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`You were kicked from **${message.guild.name}** for **${reason}**.`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        
        if (!args[0]) return message.channel.send("You need to specify a user to kick!");
        if (!mentionMember) return message.channel.send("Looks like this user doesn't exist in this server. Try again?")
        if (!mentionMember.kickable) return message.channel.send('I was unable to kick that user! Make sure I have the correct permissions!')
        
        try {
            await mentionMember.send(kickembed);
        } catch (err) {
            
        }
        
        try {
            await mentionMember.kick(reason);
        } catch (err) {
            return message.channel.send('I was unable to kick this user! Make sure I have the correct permissions, or make sure that the user doesn\'t have a higher role than me.)
        }
    }
})
          
client.login('TOKEN')
