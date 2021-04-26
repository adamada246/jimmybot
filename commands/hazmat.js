const Discord = require('discord.js');
const ms = require('ms');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(__parentDir+'/storage/money.json'); // path may vary

  module.exports = {
	name: 'hazmat',
	description: 'ok',
  guildOnly: true,
	execute(message ) {
      
    const purchase = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("Purchase `1`  `Quarantine Visit`?")
    .setDescription("This will allow you to visit Quarantine for `5 Minutes` but will cost you `5` treats! To purchase, react to this message with a thumbs up, to abort ignore this message or react with a thumbs down.")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/818234308157505606/jimmybothazmat.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
      
  
  
    const msgsuiton = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle(message.author.username+" been haz-matted!")
    .setDescription("You put on a hazmat suit that lasts 5 minutes! During that time you can visit those in quarantine!")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/818234308157505606/jimmybothazmat.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);




      let role555 = message.guild.roles.cache.find(r => r.name === "Visiting Quarantine");
      peepoop3 = message

      if (role555){
  
     amogusperson = message.author.id
     minecraftperson = message.author

     if (!money[message.author.id]){
        money[message.author.id] = 0
     }
  
    
  
  
    async function allgood(message) {
        tempcheck = money[amogusperson]
        givethismon = tempcheck - 5
        money[amogusperson] = givethismon
        fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
        setTimeout(() => { 
          peepoop3.member.roles.add(role555.id);
          }, ms('1s'));
          setTimeout(() => { 
            peepoop3.member.roles.remove(role555.id);
          }, ms('5m'));
          message.channel.send(msgsuiton)
        }
       
    

    async function checkforreactions(message) {
        message.awaitReactions((reaction, user) => user.id == amogusperson && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
        { max: 1, time: 30000 }).then(collected => {
                if (collected.first().emoji.name == '👍') {
                    if (money[amogusperson] >= 5){
                        allgood(message);
                    }
                    if (money[amogusperson] < 5){
                        message.channel.send("You don't have enough money to complete this transaction!")
                    }
                    
                     
                }
                else
                        message.channel.send('Transaction canceled.');
        }).catch(() => {
                message.channel.send('No reaction after 30 seconds, transaction canceled');
        });
        }

    message.channel.send(purchase)
    .then(async function (message) {
        message.react("👍")
        message.react("👎")
        checkforreactions(message);
        setTimeout(() => { 
        message.delete()
        }, ms('30s'));
      }).catch(function() {
        console.log("it wants me to say theres error but it works fine")
    });
  }
	},
};