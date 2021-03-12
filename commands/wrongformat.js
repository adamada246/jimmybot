const Discord = require('discord.js');




  module.exports = {
	name: 'wrongformat',
	description: 'ok',
  guildOnly: false,
	execute(message ) {
    const wrongformatem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Hey!')
    .setDescription("this is awkward but all jimmybot commands follow the format of j!command")
    .setImage('')
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setFooter('Jimmybot' +version);
    message.channel.send(wrongformatem)
	},
};