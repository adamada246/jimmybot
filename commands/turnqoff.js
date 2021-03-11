const Discord = require('discord.js');



  module.exports = {
	name: 'turnqoff',
	description: 'ok',
	execute(message ) {
    const isofalse = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Epidemic over')
    .setDescription("Jimmybot will no longer quarantine server members")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
    isolations = false;
    message.channel.send(isofalse)
	},
};