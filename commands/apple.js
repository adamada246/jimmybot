const Discord = require('discord.js');

module.exports = {
	name: 'apple',
  guildOnly: false,
	description: 'ok',
	execute(message ) {
    const friendem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("Apple")
    .setDescription("do it")
    .setImage('https://cdn.discordapp.com/attachments/797683069200892004/826901306656424027/811998159982559242.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  
    message.channel.send(friendem)
	},
};
