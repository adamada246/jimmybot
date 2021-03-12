const Discord = require('discord.js');



  module.exports = {
	name: 'owner',
	description: 'ok',
  guildOnly: false,
	execute(message ) {
    const ownerem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('heres my owner :dog:')
    .setDescription("@Paper Towel#2880")
    .setImage('')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    message.channel.send(ownerem)
	},
};