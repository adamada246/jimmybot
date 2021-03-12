const Discord = require('discord.js');

module.exports = {
	name: 'eastereggwarn',
	guildOnly: false,
	description: 'ok',
	execute(message ) {
        message.reply("This command is an easter egg! Easter eggs don't have j! so just put the word in chat");
	},
};