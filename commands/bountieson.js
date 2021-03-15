const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
botstorage3 = require(__parentDir+'/storage/bounties.json'); // path may vary



  module.exports = {
	name: 'bountieson',
	description: 'ok',
  guildOnly: true,
	execute(message ) {
    const isotrue = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('Jimmybot is now looking for wanted criminals...')
    .setDescription("Server members will now be targeted for bounties.")
    .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);





    
    botstorage3[message.guild.id] = true;
    fs.writeFileSync(__parentDir+'/storage/bounties.json', JSON.stringify(botstorage3));
    message.channel.send(isotrue)
	},
};