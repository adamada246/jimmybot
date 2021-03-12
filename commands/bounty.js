const Discord = require('discord.js');




  module.exports = {
	name: 'bounty',
	description: 'ok',
    
	execute(message ) {
        


        async function chooseuser(message) {
            bountytarget = message.guild.members.cache.filter(member => !member.user.bot && !message.author.member).random().user;
            const dothisuser = new Discord.MessageEmbed()
            .setColor('#f0dc66')
            .setTitle('BOUNTY TIME')
            .setDescription("ping the following user for 1-5 jimmy treats. The person to ping is: `"+ bountytarget.username +"`!" )
            .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
            .setTimestamp()
            .setFooter('Jimmybot' +version);

          
          message.channel.send(dothisuser)
        }
        
      
        
        chooseuser(message);

        

    
	},
};