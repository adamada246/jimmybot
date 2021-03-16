const Discord = require('discord.js');
const ms = require('ms');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(__parentDir+'/storage/money.json'); // path may vary


  module.exports = {
	name: 'bail',
  guildOnly: true,
	description: 'ok',
	execute(message ) {

      let role555 = message.guild.roles.cache.find(r => r.name === "Quarantined");
        peepoop3 = message
  
     amogusperson = message.author.id
     minecraftperson = message.author

     if (!money[message.author.id]){
        money[message.author.id] = 0
   }
  
    const purchase = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("Purchase `1`  `Quarantine Bail`?")
    .setDescription("This will remove your quarantine role but will cost you `15` treats! To purchase, react to this message with a thumbs up, to abort ignore this message or react with a thumbs down.")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/818234308157505606/jimmybothazmat.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
  
    const urout = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("You've been bailed!")
    .setDescription("You're free to go!")
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    
    async function allgood(message) {
        tempcheck = money[amogusperson]
        givethismon = tempcheck - 15
        money[amogusperson] = givethismon
        fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
        peepoop3.member.roles.remove(role555.id);
        minecraftperson.send(urout)
    }

    async function checkforreactions(message) {
        message.awaitReactions((reaction, user) => user.id == amogusperson && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
        { max: 1, time: 30000 }).then(collected => {
                if (collected.first().emoji.name == '👍') {
                    if (money[amogusperson] >= 15){
                        allgood(message);
                    }
                    if (money[amogusperson] < 15){
                        message.channel.send("You don't have enough money to complete this transaction!")
                    }
                    
                     
                }
                else
                        message.reply('Transaction canceled.');
        }).catch(() => {
                message.reply('No reaction after 30 seconds, operation canceled');
        });
        }

    message.channel.send(purchase)
    .then(function (message) {
        message.react("👍")
        message.react("👎")
        checkforreactions(message);
      }).catch(function() {
        console.log("it wants me to say theres error but it works fine")
    });

   

    
	},
};