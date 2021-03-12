const Discord = require('discord.js');




  module.exports = {
	name: 'adminwarn',
	description: 'ok',
  guildOnly: true,
	execute(message ) {
    const adminwarn = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Warning')
    .setDescription("The admin panel may contain sensetive information, confirm you are in a staff channel and continue by typing in j!adminpanel")
    .setTimestamp()
    .setFooter('Jimmybot' +version);

    
    message.channel.send(adminwarn)
	},
};