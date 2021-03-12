const Discord = require('discord.js');

module.exports = {
	name: 'hi',
	description: 'ok',
	guildOnly: false,
	execute(message ) {
        message.reply("i jimmy hello");
	},
};