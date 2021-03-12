const Discord = require('discord.js');


  
module.exports = {
	name: 'food',
	description: 'ok',
    guildOnly: false,
	execute(message ) {
    const foodem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle('give me the food now')
    .setDescription("")
    .setImage('https://media.discordapp.net/attachments/797683414857154560/803775453105356820/5a7f01ee-6caf-495d-a16d-ff5218323579.JPG?width=507&height=676')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
    message.channel.send(foodem)
	},
};