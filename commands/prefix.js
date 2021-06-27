const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
prefix = require(path.join(__dirname +'/../storage/prefix.json')); // path may vary


  module.exports = {
	name: 'prefix',
	description: 'ok',
	guildOnly: false,
	execute(message ) {


       
        if(message.content.startsWith("j!prefix")){
            prefixurmom = "j!"
        const args = message.content.slice(prefixurmom.length).trim().split(/ +/g);
        let changePrefixTo = args[1];
        

        if(changePrefixTo && message.member.hasPermission("ADMINISTRATOR")){
        prefix[message.guild.id] = changePrefixTo
           fs.writeFileSync(path.join(__dirname +'/../storage/prefix.json'), JSON.stringify(prefix))
            
        
        const embed = new Discord.MessageEmbed()
            .setColor("#f0dc66")
            .setTitle("Server prefix changed!")
            .setDescription("The prefix from now on will be: `" + changePrefixTo + "`!")
            .setTimestamp();

            


        
            message.channel.send(embed);
        }
        if(changePrefixTo && !message.member.hasPermission("ADMINISTRATOR")){
            const notanadmin = new Discord.MessageEmbed()
            .setColor('#f0dc66')
            .setTitle("Hey! You can't do that")
            .setDescription("You must have Administrator permissions in order to run that commmand.")
            .setTimestamp()
            .setFooter('Jimmybot' +version);
             message.channel.send(notanadmin)
        }
        if(!changePrefixTo){
            const embed2 = new Discord.MessageEmbed()
            .setColor("#f0dc66")
            .setTitle("Server prefix!")
            .setDescription("The prefix on this server is: `" + prefix[message.guild.id] + "`!")
            .setTimestamp();

            message.channel.send(embed2)
        }
    }
    else{
        const args = message.content.slice(prefix[message.guild.id].length).trim().split(/ +/g);
        let changePrefixTo = args[1];
        

        if(changePrefixTo && message.member.hasPermission("ADMINISTRATOR")){
        prefix[message.guild.id] = changePrefixTo
           fs.writeFileSync(path.join(__dirname +'/../storage/prefix.json'), JSON.stringify(prefix))
            
        
        const embed = new Discord.MessageEmbed()
            .setColor("#f0dc66")
            .setTitle("Server prefix changed!")
            .setDescription("The prefix from now on will be: `" + changePrefixTo + "`!")
            .setTimestamp();

            


        
            message.channel.send(embed);
        }
        if(changePrefixTo && !message.member.hasPermission("ADMINISTRATOR")){
            const notanadmin = new Discord.MessageEmbed()
            .setColor('#f0dc66')
            .setTitle("Hey! You can't do that")
            .setDescription("You must have Administrator permissions in order to run that commmand.")
            .setTimestamp()
            .setFooter('Jimmybot' +version);
             message.channel.send(notanadmin)
        }
        if(!changePrefixTo){
            const embed2 = new Discord.MessageEmbed()
            .setColor("#f0dc66")
            .setTitle("Server prefix!")
            .setDescription("The prefix on this server is: `" + prefix[message.guild.id] + "`!")
            .setTimestamp();

            message.channel.send(embed2)
        }
    }

	},
};
