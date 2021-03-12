const Discord = require('discord.js');



  module.exports = {
	name: 'notanadmin',
	description: 'ok',
  guildOnly: false,
	execute(message ) {
      const notanadmin = new Discord.MessageEmbed()
      .setColor('#f0dc66')
      .setTitle("Hey! You can't do that")
      .setDescription("You must have Administrator permissions in order to run that commmand.")
      .setTimestamp()
      .setFooter('Jimmybot' +version);
      message.channel.send(notanadmin)
	},
};