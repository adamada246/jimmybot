const Discord = require('discord.js');




  module.exports = {
	name: 'pingbounty',
	description: 'ok',
    
	execute(message ) {
        
        let guildprefix = message.guild.ID

        async function chooseuser(message) {
            message.replybountytarget[message.guild.id].usename()
        
          message.channel.send(dothisuser)
        }
        
      
        
        chooseuser(message);

        

    
	},
};