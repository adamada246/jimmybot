const Discord = require('discord.js');


  module.exports = {
	name: 'sus',
	description: 'ok',
  guildOnly: false,
	execute(message ) {
    const susem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('amogus')
    .setDescription("")
    .setImage('https://media.discordapp.net/attachments/797683414857154560/809623350288187423/jimmongus.png?width=533&height=676')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
    message.channel.send(susem)
	},
};