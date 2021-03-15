const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
botstorage1 = require(__parentDir+'/storage/jimmybot.json'); // path may vary

module.exports = {
	name: 'goodmorning',
	description: 'wake',
  guildOnly: true,
	execute(message ) {
    const goodmorning = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Good morning!')
    .setDescription("Jimmy bot is up! He'll go back to sleep if you run the command j!gn")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
		botstorage1[message.guild.id] = true
    fs.writeFileSync(__parentDir+'/storage/jimmybot.json', JSON.stringify(botstorage1));
    message.channel.send(goodmorning)
	},
};