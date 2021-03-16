const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
botstorage2 = require(__parentDir+'/storage/quarantines.json'); // path may vary


  module.exports = {
	name: 'turnqoff',
	description: 'ok',
  guildOnly: true,
	execute(message ) {
    const isofalse = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Epidemic over')
    .setDescription("Jimmybot will no longer quarantine server members. Members currently quarantined will still have to bail out of quarantine.")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
    botstorage2[message.guild.id] = false
    fs.writeFileSync(__parentDir+'/storage/quarantines.json', JSON.stringify(botstorage2));
    message.channel.send(isofalse)
	},
};