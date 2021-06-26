const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
prefix = require(__parentDir+'/storage/prefix.json'); // path may vary
inventory = require(__parentDir+'/storage/globalinventory.json'); // path may vary
money = require(__parentDir+'/storage/money.json'); // path may vary
itemReg = require(__parentDir+'/storage/itemregistry.json'); // path may vary
const goldenjimmy = client.emojis.cache.find(emoji => emoji.name === "goldenjimmy");
const guardjimmy = client.emojis.cache.find(emoji => emoji.name === "jimmypolice");
const jimmyvote = client.emojis.cache.find(emoji => emoji.name === "jimmyvote");
const { MessageButton, MessageActionRow } = require('discord-buttons')



  module.exports = {
	name: 'inventory',
	description: 'ok',
	guildOnly: false,
	execute(message ) {

			
	inv = inventory[message.author.id].split(/:+/g);
	
	function returnItemDetails(itemNum, detail) {
		
		detailsSplit = itemReg[itemNum].split(/@+/g);
		
		if(detail == "name"){
			return detailsSplit[0]
		}

		if(detail == "price"){
			return detailsSplit[1]
		}

		if(detail == "desc"){
			return detailsSplit[2]
		}

		if(detail == "emoji"){
			return detailsSplit[3]
		}

	  }
	

			const invem = new Discord.MessageEmbed()
			.setColor('#f0dc66')
			.setAuthor(`${message.author.tag}'s Inventory`, message.author.avatarURL)
		.addFields(
		  { name: inv[1].startsWith("A") ? `You don't have any ${returnItemDetails("A", "name")}s ${client.emojis.cache.find(emoji => emoji.name === "jimmypolice").toString()}!` : returnItemDetails("A", "name")+" "+client.emojis.cache.find(emoji => emoji.name === "jimmypolice").toString(), value: inv[1].startsWith("A") ? "‏‏‎ ‎‏‏‎ ‎" : "`"+inv[1]+"`", inline: false },
		  { name: inv[2].startsWith("B") ? `You don't have any ${returnItemDetails("B", "name")}s! ${client.emojis.cache.find(emoji => emoji.name === "jimmyvote").toString()}` : returnItemDetails("B", "name")+" "+client.emojis.cache.find(emoji => emoji.name === "jimmyvote").toString(), value: inv[2].startsWith("B") ? "‏‏‎ ‎‏‏‎ ‎" : "`"+inv[2]+"`", inline: false },
		  { name: inv[3].startsWith("C") ? `You don't have any ${returnItemDetails("C", "name")}s! ${client.emojis.cache.find(emoji => emoji.name === "goldenjimmy").toString()}` : returnItemDetails("C", "name")+" "+client.emojis.cache.find(emoji => emoji.name === "goldenjimmy").toString(), value: inv[3].startsWith("C") ? "‏‏‎ ‎‏‏‎ ‎" : "`"+inv[3]+"`", inline: false }
		)
			.setFooter(`${message.author.tag} currently has ${money[message.author.id]} treats total.`);
		



message.channel.send(invem)

		













	
	},
};