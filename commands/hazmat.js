const Discord = require('discord.js');
const ms = require('ms');


  module.exports = {
	name: 'hazmat',
	description: 'ok',
  guildOnly: true,
	execute(message ) {
      
    async function hazmatsuit(message) {
      let rolepee = message.guild.roles.cache.find(r => r.name === "Visiting Quarantine");
      
      setTimeout(() => { 
      message.member.roles.add(rolepee.id);
      }, ms('1s'));
      setTimeout(() => { 
        message.member.roles.remove(rolepee.id);
      }, ms('5m'));
    }
  
  
      const msgsuiton = new Discord.MessageEmbed()
        .setColor('#f0dc66')
        .setTitle(message.author.username+" been haz-matted!")
        .setDescription("You put on a hazmat suit that lasts 5 minutes! During that time you can visit those in quarantine!")
        .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/818234308157505606/jimmybothazmat.png')
        .setTimestamp()
        .setFooter('Jimmybot' +version);


      message.channel.send(msgsuiton)
      hazmatsuit(message);
	},
};