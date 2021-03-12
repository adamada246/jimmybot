const Discord = require('discord.js');


  module.exports = {
	name: 'talents',
	description: 'ok',
  guildOnly: false,
	execute(message ) {
    const talentsem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('yes i have talents')
    .setDescription("i can float")
    .setImage('https://media.discordapp.net/attachments/797683414857154560/797683459380084746/image0.jpg?width=404&height=675')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
    message.channel.send(talentsem)
	},
};