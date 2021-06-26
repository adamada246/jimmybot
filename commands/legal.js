const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons')


  module.exports = {
	name: 'legal',
	description: 'ok',
	guildOnly: false,
	execute(message ) {
        const privacypolicy = new MessageButton()
        .setStyle("url")
        .setLabel("Privacy Policy")
        .setURL("https://docs.google.com/document/d/1Ka64yD8kLmWemiYo9oxHCShxhVYVXTfTTopyaxa_hzE/edit?usp=sharing")

        const TOS = new MessageButton()
        .setStyle("url")
        .setLabel("TOS & EULA")
        .setURL("https://docs.google.com/document/d/16hrnVx159b3wQ50dr-WFOS6ozue62mjuTWKYhsMKWRk/edit?usp=sharing")

        const addPrivacy = new MessageActionRow()
        .addComponent(privacypolicy)

        const addTOS = new MessageActionRow()
        .addComponent(TOS)


		const legalem = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('Jimmybot Legal Information')
		.setDescription("Jimmybot reserves the right to collect and store the following information:")
        .setAuthor('Jimmybot Studios', 'https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
        .addFields(
            { name: 'Usage Data', value: 'Used to collect bot statistics', inline: false },
            { name: 'Discord User ID of anyone in a guild with the bot', value: 'Used to store data such as Money, etc.', inline: false },
            { name: 'Guild ID, Guild Name, Guild Size of any guild with Jimmybot', value: 'Used to store data such as custom prefixes, identify servers to apply these preferences', inline: false },
            { name: 'Message content of anything DMed to the bot', value: 'This only applies to users DMing the bot, this information is used to identify security threats such as users purposely trying to crash the bot.', inline: false },
        )
		.setTimestamp()

		.setFooter(`For more information, check out the following links:`);


        message.channel.send( {
            embed: legalem,
            components: [addPrivacy, addTOS]
        })
	},
};