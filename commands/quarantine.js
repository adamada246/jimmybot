const Discord = require('discord.js');
const ms = require('ms');


  module.exports = {
	name: 'quarantine',
	description: 'ok',
	execute(message ) {
    async function bannedword(message) {
      let role555 = message.guild.roles.cache.find(r => r.name === "Quarantined");
      
      setTimeout(() => { 
      message.member.roles.add(role555.id);
      }, ms('1s'));
      setTimeout(() => { 
        message.member.roles.remove(role555.id);
      }, ms('30m'));
    }
  
    const publicquarantined = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("☣️ "+message.author.username+" has been quarantined! ☣️")
    .setDescription("Judging by the message sent: '"+message.content+ "' we suspect they may have fart syndrome. They cannot use #jimmybot for 30 minutes, to have a friend come over a non-quarantined user can use the command j!suitup")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/818234308157505606/jimmybothazmat.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
  
    const dmquarantined = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("☣️ You've been quarantined! ☣️")
    .setDescription("Judging by your message: '"+message.content+ "' we suspect you may have fart syndrome. You cannot use #jimmybot for 30 minutes, to have a friend come over they can use the command j!suitup")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/818234308157505606/jimmybothazmat.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    
    bannedword(message);
    message.channel.send(publicquarantined)
    message.author.send(dmquarantined);
	},
};