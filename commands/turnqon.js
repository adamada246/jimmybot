const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
botstorage2 = require(path.join(__dirname +'/../storage/quarantines.json')); // path may vary



  module.exports = {
	name: 'turnqon',
	description: 'ok',
  guildOnly: true,
	execute(message ) {
    const isotrue = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Quarantines will now be issued!')
    .setDescription("Server members will now be quarantined if they are suspected of having fart syndrome")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    botstorage2[message.guild.id] = true;
    fs.writeFileSync(path.join(__dirname +'/../storage/quarantines.json'), JSON.stringify(botstorage2));
    message.channel.send(isotrue)
	},
};