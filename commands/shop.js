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
const ms = require('ms');


  module.exports = {
	name: 'shop',
	description: 'ok',
	guildOnly: false,
	execute(message, version, shopitemnum ) {

        const messagecheck = message.content.slice(prefix[message.guild.id].length).trim().split(/ +/g);

        if (messagecheck[1] == "set"){
            if (message.member.hasPermission("MANAGE_ROLES")){
                if(messagecheck[1] && messagecheck[2] && messagecheck[3] && messagecheck[4]){
                   roleID = messagecheck[2]
                   rolePrice = messagecheck[3]
                   roleDesc = messagecheck.slice(4).join(" ");
                   let role = message.guild.roles.cache.get(roleID)

                    if(role){
                       botmember = message.guild.members.cache.get(client.user.id)
                        let botrole = botmember.roles.highest
                        
                        
                        if(role.position > botrole.position){
                            message.reply("I don't have access to this role, it's higher than me on the role list. Either give me more perms by moving me up on the role list, or choose another role below me on the list.")
                        }
                        if(role.position < botrole.position){
                            if(role.position > message.member.roles.highest.position){
                                message.reply("Nice try! The role you provided is above your highest role, so I can't use it. Either have someone with a role higher than the role you provied perform the command, or choose another role below yours.")
                            }
                            if(role.position < message.member.roles.highest.position){
                                itemReg[message.guild.id] = role.name+"@"+rolePrice+"@"+roleDesc+"@"+roleID
                                fs.writeFileSync(path.join(__dirname +'/../storage/itemregistry.json'), JSON.stringify(itemReg));
                                message.reply(`👍 Users can now buy the ${role.name} role for ${rolePrice} in the shop.`)
                            }
                        }
                        




                    }
                    if(!role){
                        message.reply(`That's not a valid role ID, the correct format for this command is \`${prefix[message.guild.id]}shop set [roleID] [price] [description]\`.`)
                    }


                }
                else{
                    message.reply(`You're missing some required components! The correct format for this command is \`${prefix[message.guild.id]}shop set [roleID] [price] [description]\`.`)
                }


            }
            else if(!message.member.hasPermission("MANAGE_ROLES")){
                const notanadmin = new Discord.MessageEmbed()
                .setColor('#f0dc66')
                .setTitle("Hey! You can't do that")
                .setDescription("You must have `MANAGE_ROLES` permissions in order to run that commmand.")
                .setTimestamp()
                .setFooter('Jimmybot' +version);

                message.channel.send(`${message.author}, `, {
                    embed: notanadmin
                })
            }






        }
        if (!messagecheck[1]){







      shopitemID = null
      emojo = null
    if (shopitemnum == 0){
        shopitemID = "A"
        emoji = client.emojis.cache.find(emoji => emoji.name === "jimmypolice").toString()
    }

    if (shopitemnum == 1){
        shopitemID = "B"
        emoji = client.emojis.cache.find(emoji => emoji.name === "jimmyvote").toString()
    }

    if (shopitemnum == 2){
        shopitemID = "C"
        emoji = client.emojis.cache.find(emoji => emoji.name === "goldenjimmy").toString()
    }

	
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
      

			const shopem = new Discord.MessageEmbed()
			.setColor('#f0dc66')
			.setAuthor(`This Hour's Shop`)
		.addFields(
		  { name: `${returnItemDetails(shopitemID, "name")}  ${emoji}`, value: `${returnItemDetails(shopitemID, "desc")} \` Cost: ${returnItemDetails(shopitemID, "price")} treats \``, inline: false },
		  { name: itemReg[message.guild.id] ? `${returnItemDetails(message.guild.id, "name")} Role` : `Server Specific Role`, value: itemReg[message.guild.id] ? `Get a Role on this server (${message.guild.name}), role description: ${returnItemDetails(message.guild.id, "desc")}.  \`   Cost: ${returnItemDetails(message.guild.id, "price")} treats\`   ` : `The admins on this server did not specify a role to sell in the shop! (They can do this by using the command ${prefix[message.guild.id]}shop set [role ID])`, inline: false }
		)
			.setFooter(`${message.author.tag} currently has ${money[message.author.id]} treats total. || The shop resets every hour, be sure to check back soon! `)
            .setTimestamp();
		





    
        if (!itemReg[message.guild.id]){
            const buyGlobal = new MessageButton()
            .setStyle("blurple")
            .setLabel(`Buy 1 ${returnItemDetails(shopitemID, "name")}`)
            .setID("SHOP_GLOBAL_"+new Date().toLocaleString()+"_"+shopitemID+"_@"+message.author.id)

            const buybig = new MessageActionRow()
            .addComponent(buyGlobal)

            message.channel.send('‏‏‎ ‎‏‏‎ ‎', {
                embed: shopem,
                components:  [buybig] 
            }).then(async function(message) {
                setTimeout(function(){
                    message.edit("This shop has timed out! Make another one with `"+prefix[message.guild.id]+"shop`",{
                        embeds: null,
                        components: null
                    })
                }, ms(`1h`))
            })


        }

    if(itemReg[message.guild.id]){
            const buyRole = new MessageButton()
            .setStyle("blurple")
            .setLabel(`Buy ${returnItemDetails(message.guild.id, "name")} role`)
            .setID("SHOP_ROLE_"+new Date().toLocaleString()+"_"+message.guild.id+"_@"+message.author.id)
    
            
            const buyGlobal = new MessageButton()
            .setStyle("blurple")
            .setLabel(`Buy 1 ${returnItemDetails(shopitemID, "name")}`)
            .setID("SHOP_GLOBAL_"+new Date().toLocaleString()+"_"+shopitemID+"_@"+message.author.id)

    
            const buylocal = new MessageActionRow()
            .addComponent(buyGlobal)
            .addComponent(buyRole)


            message.channel.send('‏‏‎ ‎‏‏‎ ‎', {
                embed: shopem,
                components:  [buylocal] 
            }).then(async function(message) {
                setTimeout(function(){
                    message.edit("This shop has timed out! Make another one with `"+prefix[message.guild.id]+"shop`",{
                        embeds: null,
                        components: null
                    })
                }, ms(`1h`))
            })

    }
}



   















	
	},
};