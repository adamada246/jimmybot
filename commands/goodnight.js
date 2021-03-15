const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
botstorage1 = require(__parentDir+'/storage/jimmybot.json'); // path may vary


module.exports = {
	name: 'goodnight',
	description: 'sleep',
  guildOnly: true,
	execute(message ) {
    const goodnight = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Good night!')
    .setDescription("Jimmy bot is sleeping! He'll go wake up if you run the command j!gm")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    
		botstorage1[message.guild.id] = false;
    fs.writeFileSync(__parentDir+'/storage/jimmybot.json', JSON.stringify(botstorage1));
    message.channel.send(goodnight)
	},
};