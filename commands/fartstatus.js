const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
botstorage2 = require( path.join(__dirname +'/../storage/quarantines.json')); // path may vary

  


  module.exports = {
	name: 'fartstatus',
  guildOnly: true,
	description: 'ok',
	execute(message ) {
    const quarstatus = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("Issuing quarantines is currently set to `"+botstorage2[message.guild.id]+"`")
    .setDescription("To change this, have a server admin execute j!quarantines (true/false)")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    message.channel.send(quarstatus)
	},
};