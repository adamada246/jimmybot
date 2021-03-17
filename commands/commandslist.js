const Discord = require('discord.js');





module.exports = {

	name: 'commandslist',
	description: 'ok',
  guildOnly: false,
	execute(message ) {
    let prefix = "j!"


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let pagenumber = args[1]
    amogusperson = message.author.id
    minecraftperson = message.author
    originalmessage = message

    
    if (!pagenumber == undefined) {
      pagenumber = "1";
    }

    if (pagenumber == null){
      pagenumber = "1"
    }

    if (pagenumber=="1" || pagenumber=="2" || pagenumber=="3"){
     //pee
    }
    else{
      message.channel.send("That's not a valid number!")
    }


    const commands1 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Commands')
    .setDescription("Page 1")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
      { name: '**Format:**', value: '**j!command {page}**', inline: false },
      { name: 'j!tricks', value: 'displays a list of all commands', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: '**Format:**', value: '**j!command**', inline: false },
      { name: 'j!invite', value: 'invite Jimmybot to your server', inline: false },
      { name: 'j!admin', value: 'brings up a list of admin commands', inline: false },
      { name: 'j!status', value: 'displays if Jimmybot is on or off', inline: false },
      { name: 'j!bail', value: 'a command used to pay bail to get out of quarantine', inline: false },
      { name: 'j!gm', value: 'turns on jimmybot', ninline: false },
      { name: 'j!gn', value: 'turns off jimmybot', inline: false },

    )
    .setFooter("This is page 1/3! To see another page use the arrows below or type in j!tricks {page}");


    const commands2 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Commands')
    .setDescription("Page 2")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
      { name: '**Format:**', value: '**j!command {page}**', inline: false },
      { name: 'j!hi', value: 'jimmy says hello', inline: false },
      { name: 'j!sus', value: ' a reference to the popular hit video game amogus!!111!!1', inline: false },
      { name: 'j!portrait', value: 'displays a portrait of jimmy', inline: false },
      { name: 'j!sad', value: ' makes jimmy sad :(', inline: false },
      { name: 'j!suitup', value: 'makes you temporarily put on a hazmat suit to visit the quarantine', inline: false },
      { name: 'j!owner', value: 'displays the creator of jimmybot', inline: false },
      { name: 'j!talent', value: "displays jimmy's secret talent", inline: false },
      { name: 'j!about', value: 'displays information about jimmybot', inline: false },
      { name: 'j!bounty', value: 'chooses a user to be a target for a bounty', inline: false },
      { name: '**Format:**', value: '**j!command @user amount **', inline: false },
      { name: 'j!pay', value: 'pays the mentioned user the selected amount of treats', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
     
     
    )
    .setFooter("This is page 2/3! To see another page use the arrows below or type in j!tricks {page}");

    const commands3 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Commands')
    .setDescription("Page 3")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
      { name: '**Format:**', value: '**j!command  @user**', inline: false },
      { name: 'j!catch', value: 'must be run AFTER j!bounty, allows ANY user to catch the bounty target', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: '**Format:**', value: '**j!command** optional: @user', inline: false },
      { name: 'j!bal', value: 'check the balance of yourself or another user', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: '**Format:**', value: '**j!command** optional (admins only): {true/false}', inline: false },
      { name: 'j!quarantines', value: 'displays the current status of quarantines', inline: false },
      { name: 'j!bounties', value: 'displays the current status of quarantines', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: '**Format:**', value: '**command**', inline: false },
      { name: 'fart', value: 'A risky thing to say if quarantines are on', inline: false },
      { name: 'food', value: 'Easter egg!', inline: false },
      { name: 'play', value: 'Easter egg!', inline: false },
      { name: 'dumb', value: 'Easter egg!', inline: false },
      { name: 'good boy', value: 'Easter egg!', inline: false },
    )
    .setFooter("This is page 3/3! To see another page use the arrows below or type in j!tricks {page}");

    async function checkforreactions1(message) {
      message.awaitReactions((reaction, user) => user.id == amogusperson && (reaction.emoji.name == '➡️'),
      { max: 1, time: 300000 }).then(collected => {
              if (collected.first().emoji.name == '➡️') {
                 originalmessage.channel.send(commands2)
                 .then(async function (message) {
                  message.react("⬅️")
                  message.react("➡️")
                  checkforreactions2(message);
                })      
                  message.delete()
                  
                   
              }
      }).catch(() => {
              //nothing needed
      });
      }

      async function checkforreactions2(message) {
        message.awaitReactions((reaction, user) => user.id == amogusperson && (reaction.emoji.name == '⬅️' || reaction.emoji.name == '➡️'),
        { max: 1, time: 300000 }).then(collected => {
                message2 = message
                if (collected.first().emoji.name == '➡️') {
                   originalmessage.channel.send(commands3)
                   .then(async function (message) {
                    message.react("⬅️")
                    checkforreactions3(message);
                  })    
                    message.delete()
                    
                
                }
              
              else{
                originalmessage.channel.send(commands1)
                .then(async function (message) {
                 message.react("➡️")
                 checkforreactions1(message);
               })    
                 message.delete()
              }
        }).catch(() => {
                //nothing needed
        });
        }

        async function checkforreactions3(message) {
          message.awaitReactions((reaction, user) => user.id == amogusperson && (reaction.emoji.name == '⬅️'),
          { max: 1, time: 300000 }).then(collected => {
                  if (collected.first().emoji.name == '⬅️') {
                     originalmessage.channel.send(commands2)
                     .then(async function (message) {
                      message.react("⬅️")
                      message.react("➡️")
                      checkforreactions2(message);
                    })      
                      message.delete()
                      
                       
                  }
          }).catch(() => {
                  //nothing needed
          });
          }

    if(pagenumber == "1"){
      message.channel.send(commands1)
      .then(async function (message) {
          message.react("➡️")
          checkforreactions1(message);
        })      
    }

    if(pagenumber == "2"){
      message.channel.send(commands2)
      .then(async function (message) {
        message.react("⬅️")
        message.react("➡️")
        checkforreactions2(message);
      })      
    }

    if(pagenumber == "3"){
      message.channel.send(commands3)
      .then(async function (message) {
        message.react("⬅️")
        checkforreactions3(message);
      })      
      
    }

	},
};