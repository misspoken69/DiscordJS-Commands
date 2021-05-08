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
    if (message.content === prefix + 'ban') {
        if (!message.member.hasPermissions("BAN_MEMBERS")) return message.channel.send("[ERROR]  You can use this command because of invalid permissions!")
        
        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "No reason provided."
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`You were banned from **${message.guild.name}** for **${reason}**.`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())
        
        if (!args[0]) return message.channel.send("You need to specify a user to ban!");
        if (!mentionMember) return message.channel.send("Looks like this user doesn't exist in this server. Try again?")
        if (!mentionMember.bannable) return message.channel.send('I was unable to ban that user! Make sure I have the correct permissions!')
        
        await mentionMember.send(embed);
        await mentionMember.ban([
            reason: reason
        ]).then(() => message.channel.send("Successfully banned " + mentionMember.user.tag));
    }
})

client.login('TOKEN')
