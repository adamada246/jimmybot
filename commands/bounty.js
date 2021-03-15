const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
storage = require(__parentDir+'/storage/bounty.json'); // path may vary
storage4 = require(__parentDir+'/storage/timeout.json'); // path may vary
const ms = require('ms');
  module.exports = {
	name: 'bounty',
  cooldown: 5,
	description: 'ok',
    
	execute(message ) {
        
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
          
    
        async function chooseuser(message) {
            message.channel.send("a bounty has been scheduled! sometime in the next 5 minutes the bounty will be sent, the first person to claim it wins the reward!")
            
       
              
           
            setTimeout(function(){ 
              bountytarget = message.guild.members.cache.filter(member => !member.user.bot && message.author).random().user;
              const dothisuser = new Discord.MessageEmbed()
              .setColor('#f0dc66')
              .setTitle('BOUNTY TIME')
              .setDescription("ping the following user for 0-5 jimmy treats. The person to ping is: `"+ bountytarget.username +"`! To claim the bounty use j!catch @target" )
              .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/819586630049726514/jimmybotbounty.png')
              .setTimestamp()
              .setFooter('Jimmybot' +version);
              storage[message.guild.id] = bountytarget.id;
              fs.writeFileSync(__parentDir+'/storage/bounty.json', JSON.stringify(storage));
              message.channel.send(dothisuser)
            }, ms(getRandomInt(5)+"m"));


           
          
            
        }
        
      
        
        chooseuser(message);

        

        

    
	},
};