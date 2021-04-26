const Discord = require('discord.js');





module.exports = {

	name: 'changelog',
	description: 'ok',
  guildOnly: false,
	execute(message ) {

    amogusperson = message.author.id
    minecraftperson = message.author
    originalmessage = message



    const v22 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Changelog')
    .setDescription("Version 5.2")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
      { name: '⦿ Added j!changelog', value: '⠀ ', inline: false },
      { name: '⦿ j!claim was added as an alias to j!catch', value: '⠀ ', inline: false },
      { name: '⦿ added custom prefixes!', value: '⠀ ', inline: false },
      { name: '⦿ Added j!changelog', value: '⠀ ', inline: false },
      { name: '⦿ Added j!apple', value: '⠀ ', inline: false },
      { name: '⦿ Added j!biden', value: '⠀ ', inline: false },
      { name: '⦿ Added bowie commands: `j!friend` and `bowie`', value: '⠀ ', inline: false },

    )
    .setFooter("Use the arrow keys to navigate in between versions.");


    const v21 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Changelog')
    .setDescription("Version 5.1")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
        { name: '⦿', value: 'Added a cooldown to j!bounty', inline: false },
        { name: '⦿', value: 'Added a new j!tricks system', inline: false },
        { name: '⦿', value: 'j!bail and j!suitup now cost money', inline: false },
        { name: '⦿', value: 'Added j!invite', inline: false },
        { name: '⦿', value: 'fixed j!sad', inline: false },
        { name: '⦿', value: 'Jimmybot no longer works in DMs', inline: false },
     
     
    )
    .setFooter("Use the arrow keys to navigate in between versions.");


    async function checkforreactions1(message) {
      message.awaitReactions((reaction, user) => user.id == amogusperson && (reaction.emoji.name == '➡️'),
      { max: 1, time: 300000 }).then(collected => {
              if (collected.first().emoji.name == '➡️') {
                 originalmessage.channel.send(v21)
                 .then(async function (message) {
                  message.react("⬅️")
                  checkforreactions2(message);
                })      
                  message.delete()
                  
                   
              }
      }).catch(() => {
              message.delete()
      });
      }

      async function checkforreactions2(message) {
        message.awaitReactions((reaction, user) => user.id == amogusperson && (reaction.emoji.name == '⬅️'),
        { max: 1, time: 300000 }).then(collected => {
                message2 = message
                if (collected.first().emoji.name == '⬅️') {
                   originalmessage.channel.send(v22)
                   .then(async function (message) {
                    message.react("➡️")
                    checkforreactions1(message);
                  })    
                    message.delete()
                    
                
                }
        }).catch(() => {
            message.delete()
        });
        }

       
 
      message.channel.send(v22)
      .then(async function (message) {
          message.react("➡️")
          checkforreactions1(message);
        })      
 
      
    

	},
};