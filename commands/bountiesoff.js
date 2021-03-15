const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
botstorage3 = require(__parentDir+'/storage/bounties.json'); // path may vary


  module.exports = {
	name: 'bountiesoff',
	description: 'ok',
  guildOnly: true,
	execute(message ) {
    const isofalse = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('All issued bounties have been recalled!')
    .setDescription("Jimmybot will no longer target server members for bounties.")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
    botstorage3[message.guild.id] = false
    fs.writeFileSync(__parentDir+'/storage/bounties.json', JSON.stringify(botstorage3));
    message.channel.send(isofalse)
	},
};