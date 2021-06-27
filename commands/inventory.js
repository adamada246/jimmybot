const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
prefix = require(path.join(__dirname +'/../storage/prefix.json')); // path may vary
inventory = require(path.join(__dirname +'/../storage/globalinventory.json')); // path may vary
money = require(path.join(__dirname +'/../storage/money.json')); // path may vary
itemReg = require(path.join(__dirname +'/../storage/itemregistry.json')); // path may vary
const goldenjimmy = client.emojis.cache.find(emoji => emoji.name === "goldenjimmy");
const guardjimmy = client.emojis.cache.find(emoji => emoji.name === "jimmypolice");
const jimmyvote = client.emojis.cache.find(emoji => emoji.name === "jimmyvote");
const { MessageButton, MessageActionRow } = require('discord-buttons')



  module.exports = {
	name: 'inventory',
	description: 'ok',
	guildOnly: false,
	execute(message ) {
		if(message.mentions.users.first()){
			user = message.mentions.users.first()
		}
		if (!message.mentions.users.first()){
			user = message.author
		}
			

	
		if(inventory[user.id] == null){
			inventory[user.id] = `ID=${user.id}:A=0:B=0:C=0:D=0:E=0:F=0:G=0:H=0:I=0:J=0:K=0:L=0:M=0:N=0:O=0:P=0:Q=0:R=0:S=0:T=0:U=0:V=0:W=0:X=0:Y=0:Z=0`
			fs.writeFileSync(path.join(__dirname +'/../storage/globalinventory.json'), JSON.stringify(inventory));
		}

	
 function returnValue(userID, itemnum) {
	inv =  inventory[userID].split(/:+/g)
	poop = inv[itemnum]
	argument = poop.split(/=+/g)
	if (!argument[1]){
		return null
	}
	if (argument[1]){
		return argument[1]
	}
}



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
			.setAuthor(`${user.tag}'s Inventory`, user.displayAvatarURL({dynamic: true}))
		.addFields(
		  { name: returnValue(user.id, 1) == null ? `${user.tag} doesn't have any ${returnItemDetails("A", "name")}s! ${client.emojis.cache.find(emoji => emoji.name === "jimmypolice").toString()}!` : returnItemDetails("A", "name")+" "+client.emojis.cache.find(emoji => emoji.name === "jimmypolice").toString(), value: returnValue(user.id, 1) == null ? "‏‏‎ ‎‏‏‎ ‎" : "`"+returnValue(user.id, 1)+"`", inline: false },
		  { name: returnValue(user.id, 2) == null ? `${user.tag} doesn't have any ${returnItemDetails("B", "name")}s! ${client.emojis.cache.find(emoji => emoji.name === "jimmyvote").toString()}` : returnItemDetails("B", "name")+" "+client.emojis.cache.find(emoji => emoji.name === "jimmyvote").toString(), value: returnValue(user.id, 2) == null ? "‏‏‎ ‎‏‏‎ ‎" : "`"+returnValue(user.id, 2)+"`", inline: false },
		  { name: returnValue(user.id, 3) == null ? `${user.tag} doesn't have any ${returnItemDetails("C", "name")}s! ${client.emojis.cache.find(emoji => emoji.name === "goldenjimmy").toString()}` : returnItemDetails("C", "name")+" "+client.emojis.cache.find(emoji => emoji.name === "goldenjimmy").toString(), value: returnValue(user.id, 3) == null ? "‏‏‎ ‎‏‏‎ ‎" : "`"+returnValue(user.id, 3)+"`", inline: false }
		)
			.setFooter(`${user.tag} currently has ${money[user.id]} treats total.`);
		



message.channel.send(invem)

		













	
	},
};