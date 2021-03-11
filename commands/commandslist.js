const Discord = require('discord.js');





module.exports = {
	name: 'commandslist',
	description: 'ok',
	execute(message ) {
    const commands1 = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot Commands')
    .setDescription('All commands (except easter eggs) follow the format of j!command')
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .addFields(
      { name: 'j!tricks', value: 'displays a list of all commands', inline: true },
      { name: 'j!admin', value: 'brings up a list of admin commands (only runnable by admins)', inline: true },
      { name: 'j!status', value: 'displays if Jimmybot is on or off', inline: true },
      { name: 'j!fartstatus', value: 'displays if Jimmybot quarantines are being given', inline: true },
      { name: 'j!gm', value: 'turns on jimmybot', ninline: true },
      { name: 'j!gn', value: 'turns off jimmybot', inline: true },
      { name: 'j!hi', value: 'jimmy says hello', inline: true },
      { name: 'j!sus', value: ' a reference to the popular hit video game amogus!!111!!1', inline: true },
      { name: 'j!portrait', value: 'displays a portrait of jimmy', inline: true },
      { name: 'j!sad', value: ' makes jimmy sad :(', inline: true },
      { name: 'j!suitup', value: 'makes you temporarily put on a hazmat suit to visit the quarantine', inline: true },
      { name: 'j!owner', value: 'displays the creator of jimmybot', inline: true },
      { name: 'j!talent', value: "displays jimmy's secret talent", inline: true },
      { name: 'j!about', value: 'displays information about jimmybot', inline: true },
      { name: 'fart', value: 'A risky thing to say if quarantines are on', inline: true },
      { name: 'food', value: 'Easter egg!', inline: true },
      { name: 'play', value: 'Easter egg!', inline: true },
      { name: 'dumb', value: 'Easter egg!', inline: true },
      { name: 'good boy', value: 'Easter egg!', inline: true },
    )
    .setTimestamp()
    .setFooter('Jimmybot' +version);
        message.channel.send(commands1)
	},
};