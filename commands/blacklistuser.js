const Discord = require('discord.js');




  module.exports = {
	name: 'blacklistuser',
	description: 'ok',
	guildOnly: true,
	execute(message ) {
        path = require('path'),
        __parentDir = path.dirname(module.parent.filename);
        prefix = require(path.join(__dirname +'/../storage/prefix.json')); // path may vary
        ublacklist = require(path.join(__dirname +'/../storage/userbl.json')); // path may vary
    
    
        
        let poopyguild = message.mentions.users.first()
        poopyguildid = message.mentions.users.first().id
        
        if(!poopyguildid){
            message.reply("Mention a user!")
        }
        
        
        
       

        if(poopyguildid){

        const blacklisteddm = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('Guild Blacklisted')
		.setDescription('Jimmybot commands can no longer be executed by `'+poopyguild.username+"`!")
		.setTimestamp()
		.setFooter('Jimmybot' +version);


        ublacklist[poopyguildid] = true
        fs.writeFileSync(path.join(__dirname +'/../storage/userbl.json'), JSON.stringify(ublacklist));
        message.author.send(blacklisteddm)
        }
        
	},
};