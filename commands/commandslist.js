const Discord = require('discord.js');





module.exports = {

	name: 'commandslist',
	description: 'ok',
  guildOnly: false,
	execute(message ) {
    path = require('path'),
    __parentDir = path.dirname(module.parent.filename);
    prefix = require(__parentDir+'/storage/prefix.json'); // path may vary


    const args = message.content.slice(prefix[message.guild.id].length).trim().split(/ +/g);
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
      { name: '**Format:**', value: '**'+prefix[message.guild.id]+'command {page}**', inline: false },
      { name: ''+prefix[message.guild.id]+'tricks', value: 'displays a list of all commands', inline: true },
      { name: '**Format:**', value: '**'+prefix[message.guild.id]+'command**', inline: false },
      { name: ''+prefix[message.guild.id]+'invite', value: 'invite Jimmybot to your server', inline: true },
      { name: ''+prefix[message.guild.id]+'changelog', value: 'shows changes between versions', inline: true },
      { name: ''+prefix[message.guild.id]+'admin', value: 'brings up a list of admin commands', inline: true },
      { name: ''+prefix[message.guild.id]+'status', value: 'displays if Jimmybot is on or off', inline: true },
     // { name: ''+prefix[message.guild.id]+'bail', value: 'a command used to pay bail to get out of quarantine', inline: true },biden
      { name: ''+prefix[message.guild.id]+'gm', value: 'turns on jimmybot', inline: true },
      { name: ''+prefix[message.guild.id]+'gn', value: 'turns off jimmybot', inline: true },

    )
    .setFooter("This is page 1/3! To see another page use the arrows below or type in "+prefix[message.guild.id]+"tricks {page}");


    const commands2 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Commands')
    .setDescription("Page 2")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
      { name: '**Format:**', value: '**'+prefix[message.guild.id]+'command**', inline: false },
      { name: ''+prefix[message.guild.id]+'hi', value: 'jimmy says hello', inline: true },
      { name: ''+prefix[message.guild.id]+'sus', value: ' a reference to the popular hit video game amogus!!111!!1', inline: true },
      { name: ''+prefix[message.guild.id]+'portrait', value: 'displays a portrait of jimmy', inline: true },
      { name: ''+prefix[message.guild.id]+'sad', value: ' makes jimmy sad :(', inline: true },
      { name: ''+prefix[message.guild.id]+'apple', value: ' when the apple is sus :rofl: :flushed:', inline: true },
     // { name: ''+prefix[message.guild.id]+'suitup', value: 'makes you temporarily put on a hazmat suit to visit the quarantine', inline: true },
      { name: ''+prefix[message.guild.id]+'owner', value: 'displays the creator of jimmybot', inline: true },
      { name: ''+prefix[message.guild.id]+'talent', value: "displays jimmy's secret talent", inline: true },
      { name: ''+prefix[message.guild.id]+'about', value: 'displays information about jimmybot', inline: true },
      { name: ''+prefix[message.guild.id]+'bounty', value: 'chooses a user to be a target for a bounty', inline: true },
      { name: ''+prefix[message.guild.id]+'biden', value: 'which ending will you get?', inline: true },
      { name: '**Format:**', value: '**'+prefix[message.guild.id]+'command @user amount **', inline: false },
      { name: ''+prefix[message.guild.id]+'pay', value: 'pays the mentioned user the selected amount of treats', inline: true },
      { name: '**Format:**', value: '**'+prefix[message.guild.id]+'command amount **', inline: false },
      { name: ''+prefix[message.guild.id]+'gamble', value: 'gamble a specific amount of treats to either win/lose treats', inline: true },
     
    )
    .setFooter("This is page 2/3! To see another page use the arrows below or type in "+prefix[message.guild.id]+"tricks {page}");

    const commands3 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Commands')
    .setDescription("Page 3")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
      { name: '**Format:**', value: '**'+prefix[message.guild.id]+'command  @user**', inline: false },
      { name: ''+prefix[message.guild.id]+'steal', value: 'a command that lets you steal treats from other Jimmybot users!', inline: true },
      { name: ''+prefix[message.guild.id]+'catch', value: 'must be run AFTER '+prefix[message.guild.id]+'bounty, allows ANY user to catch the bounty target', inline: true },
      { name: '**Format:**', value: '**'+prefix[message.guild.id]+'command** optional: @user', inline: false },
      { name: ''+prefix[message.guild.id]+'bal', value: 'check the balance of yourself or another user', inline: true },
      { name: '**Format:**', value: '**'+prefix[message.guild.id]+'command** optional (admins only): {true/false}', inline: false },
  //    { name: ''+prefix[message.guild.id]+'quarantines', value: 'displays the current status of quarantines', inline: true },
      { name: ''+prefix[message.guild.id]+'bounties', value: 'displays the current status of bounties', inline: true },
      { name: '**Format:**', value: '**command**', inline: false },
   //   { name: 'fart', value: 'A risky thing to say if quarantines are on {does not work on admins}', inline: true },
      { name: 'food', value: 'Easter egg!', inline: true },
      { name: 'play', value: 'Easter egg!', inline: true },
      { name: 'dumb', value: 'Easter egg!', inline: true },
      { name: 'good boy', value: 'Easter egg!', inline: true },
    )
    .setFooter("This is page 3/3! To see another page use the arrows below or type in "+prefix[message.guild.id]+"tricks {page}");

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
              message.delete()
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
            message.delete()
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
               message.delete()
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
