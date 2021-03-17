const Discord = require('discord.js');


  module.exports = {
	name: 'sad',
  guildOnly: false,
	description: 'ok',
	execute(message ) {
    const sadem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('i sad :(')
    .setDescription("")
    .setImage('https://media.discordapp.net/attachments/797683414857154560/809613303382409247/IMG_0872.jpg?width=507&height=676')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
        message.channel.send(sadem)
	},
};