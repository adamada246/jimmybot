const Discord = require('discord.js');





module.exports = {

	name: 'commandslist',
	description: 'ok',
  guildOnly: false,
	execute(message ) {
    let prefix = "j!"
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let pagenumber = args[1]
    
    
    if (!pagenumber || pagenumber != "1" || pagenumber != "2") {
      pagenumber = "1";
    }


    const commands1 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Commands')
    .setDescription("Page 1")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
      { name: '**Format:**', value: '**j!command {page}**', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: 'j!tricks', value: 'displays a list of all commands', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: '**Format:**', value: '**j!command**', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: 'j!invite', value: 'invite Jimmybot to your server', inline: false },
      { name: 'j!admin', value: 'brings up a list of admin commands', inline: false },
      { name: 'j!status', value: 'displays if Jimmybot is on or off', inline: false },
      { name: 'j!bail', value: 'a command used to pay bail to get out of quarantine', inline: false },
      { name: 'j!gm', value: 'turns on jimmybot', ninline: false },
      { name: 'j!gn', value: 'turns off jimmybot', inline: false },
      { name: 'j!hi', value: 'jimmy says hello', inline: false },
      { name: 'j!sus', value: ' a reference to the popular hit video game amogus!!111!!1', inline: false },
      { name: 'j!portrait', value: 'displays a portrait of jimmy', inline: false },
      { name: 'j!sad', value: ' makes jimmy sad :(', inline: false },
      { name: 'j!suitup', value: 'makes you temporarily put on a hazmat suit to visit the quarantine', inline: false },
      { name: 'j!owner', value: 'displays the creator of jimmybot', inline: false },
      { name: 'j!talent', value: "displays jimmy's secret talent", inline: false },
      { name: 'j!about', value: 'displays information about jimmybot', inline: false },
      { name: 'j!bounty', value: 'chooses a user to be a target for a bounty', inline: false },
    )
    .setFooter("This is page 1/2! To see another page use the arrows below or type in j!tricks {page}");


    const commands2 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Commands')
    .setDescription("Page 2")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
      { name: '**Format:**', value: '**j!command @user amount **', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: 'j!pay', value: 'pays the mentioned user the selected amount of treats', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: '**Format:**', value: '**j!command  @user**', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: 'j!catch', value: 'must be run AFTER j!bounty, allows ANY user to catch the bounty target', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: '**Format:**', value: '**j!command** optional: @user', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: 'j!bal', value: 'check the balance of yourself or another user', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: '**Format:**', value: '**j!command** optional (admins only): {true/false}', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: 'j!quarantines', value: 'displays the current status of quarantines', inline: false },
      { name: 'j!bounties', value: 'displays the current status of quarantines', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: '**Format:**', value: '**command**', inline: false },
      { name: ' ‏‎', value: '‏‏‎ ‎', inline: true },
      { name: 'fart', value: 'A risky thing to say if quarantines are on', inline: false },
      { name: 'food', value: 'Easter egg!', inline: false },
      { name: 'play', value: 'Easter egg!', inline: false },
      { name: 'dumb', value: 'Easter egg!', inline: false },
      { name: 'good boy', value: 'Easter egg!', inline: false },
    )
    .setFooter("This is page 2/2! To see another page use the arrows below or type in j!tricks {page}");

    

    if(pagenumber == "1"){
      sendembed = commands1
    }

    if(pagenumber == "2"){
      sendembed = commands2
    }

    message.channel.send(sendembed)
   
	},
};