const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons')
client.gamblecooldown = new Map();
client.usergamble = new Map();
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(path.join(__dirname +'/../storage/money.json')); // path may vary
prefix = require(path.join(__dirname +'/../storage/prefix.json')); // path may vary

  module.exports = {
	name: 'gamble',
	description: 'ok',
	guildOnly: false,
	execute(message ) {
     
        

    if(!client.gamblecooldown.get(message.author.id)){
        client.gamblecooldown.set(message.author.id, "false")
      }
  
      if (client.gamblecooldown.get(message.author.id) == "false"){
        const args = message.content.slice(prefix[message.guild.id].length).trim().split(/ +/g);

        if (args[1]){
     
           
            if (Number(args[1]) > 0){

               
                if( Number(args[1]) < money[message.author.id]){
                //main code goes in here
                let gambleamt = Number(args[1]).toFixed(0)

		const confirmation = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('Gamble `'+gambleamt+"` treats?")
		.setDescription("Disclaimer: **LOSING UP TO 100% OF THE MONEY GAMBLED IS A POSSIBILITY, BE WARNED**")
		.setFooter('You currently have '+money[message.author.id]+" treats total.");

        


        
        const continuebutton = new MessageButton()
        .setStyle("red")
        .setLabel("I understand, I want to continue.")
        .setID("GAMBLE_1_"+message.guild.id+new Date().toLocaleString()+"@"+message.author.id)

        const abortbutton = new MessageButton()
        .setStyle("green")
        .setLabel("Nevermind, I don't want to gamble!")
        .setID("GAMBLE_2_"+message.guild.id+new Date().toLocaleString()+"@"+message.author.id)

        const gogo = new MessageActionRow()
        .addComponent(continuebutton)
        .addComponent(abortbutton)
      
        


        message.channel.send( {
            embed: confirmation,
            components: [gogo]

        })

        client.usergamble.set(message.author.id, gambleamt);




//end main section of code
    }
    else if (Number(args[1]) > money[message.author.id]){
        message.channel.send("You do not have enough money to gamble this much!",{
            ephemeral: true
        })
    }
            }
            else{
                message.channel.send("That's not a valid integer! The money gambled must be a whole number above 0.",{
                    ephemeral: true
                })
            }
        }
        else{
            message.channel.send("That's not a valid integer! The correct format for this command is `"+prefix[message.guild.id]+"gamble [amount]`.",{
                ephemeral: true
            })
        }
      }
      else{
        message.channel.send("Slow down there, "+message.author.tag+"! You're on cooldown! You can only run this command every 2 minutes.",{
            ephemeral: true
        })
      }

        
	},
};