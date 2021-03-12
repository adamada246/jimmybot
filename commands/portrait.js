const Discord = require('discord.js');



  module.exports = {
	name: 'portrait',
	description: 'ok',
  guildOnly: false,
	execute(message ) {
    const portraitem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('')
    .setDescription("")
    .setImage('https://media.discordapp.net/attachments/797683414857154560/809613572380426240/IMG_0846.jpg?width=507&height=676')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    message.channel.send(portraitem)
	},
};