const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons')

path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(__parentDir+'/storage/money.json'); // path may vary
prefix = require(__parentDir+'/storage/prefix.json'); // path may vary
client.gamblemessage = new Map();

  module.exports = {
	name: 'gamble',
	description: 'ok',
	guildOnly: false,
	execute(message ) {
        client.gamblemessage.set(message.author.id, message);
        
        const args = message.content.slice(prefix[message.guild.id].length).trim().split(/ +/g);

        if (args[1]){
     
           
            if (Number(args[1]) > 0){
                //main code goes in here
                let gambleamt = Number(args[1])

		const confirmation = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('Gamble `'+gambleamt+"` treats?")
		.setDescription("Disclaimer: **LOSING UP TO 100% OF THE MONEY GAMBLED IS A POSSIBILITY, BE WARNED**")
		.setFooter('You currently have `'+money[message.author.id]+"` treats total.");

        


        
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

        const stopstop = new MessageActionRow()
        .addComponent(abortbutton)


        message.channel.send( {
            embed: confirmation,
            components: [gogo, stopstop]

        })

        




//end main section of code
            }
            else{
                message.channel.send("That's not a valid integer! The money gambled must be a whole number above 0.")
            }
        }
        else{
            message.channel.send("That's not a valid integer! The correct format for this command is `"+prefix[message.guild.id]+"gamble [amount]`.")
        }
    

        
	},
};