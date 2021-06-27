const Discord = require('discord.js');




  module.exports = {
	name: 'blacklistserver',
	description: 'ok',
	guildOnly: true,
	execute(message ) {
        path = require('path'),
        __parentDir = path.dirname(module.parent.filename);
        prefix = require(path.join(__dirname +'/../storage/prefix.json')); // path may vary
        sblacklist = require(path.join(__dirname +'/../storage/serverbl.json')); // path may vary
    
    
        const args = message.content.slice(prefix[message.guild.id].length).trim().split(/ +/g);
        let poopyguildid = args[1]

        if(!poopyguildid){
            poopyguildid = message.guild.id
        }
        
        const blacklisteddm = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('Guild Blacklisted')
		.setDescription('Jimmybot commands are no longer executable in guild `'+poopyguildid+"`!")
		.setTimestamp()
		.setFooter('Jimmybot' +version);
        
       


        sblacklist[poopyguildid] = true
        fs.writeFileSync(path.join(__dirname +'/../storage/serverbl.json'), JSON.stringify(sblacklist));
        message.author.send(blacklisteddm)
		
        
	},
};