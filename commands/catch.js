const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
storage = require(__parentDir+'/storage/bounty.json'); // path may vary
money = require(__parentDir+'/storage/money.json'); // path may vary

const ms = require('ms');
  module.exports = {
	name: 'catch',
	description: 'ok',
    
	execute(message ) {
        
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
        if (!message.mentions.users.first()) {
             message.reply("You forgot to mention a user!")
        }
        
        if (message.mentions.users.first()) {
            catchuser(message);
       }
        
       async function catchuser(message) {
        if (message.mentions.users.first().id !== storage[message.guild.id]){
            message.reply("That's the wrong user! Make sure that you've executed j!bounty before executing this command!")
        }

       if (!money[message.author.id]){
            money[message.author.id] = 0
       }


        if (message.mentions.users.first().id == storage[message.guild.id]){
            let rewardamount = getRandomInt(5)
            message.channel.send("Nice job, "+message.author.username+"! You pinged the right user! Here are `"+rewardamount+ "` treats!")
            tempcheck = money[message.author.id]
            givethismon = tempcheck + rewardamount
            money[message.author.id] = givethismon
            fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
            storage[message.guild.id] = null;
            fs.writeFileSync(__parentDir+'/storage/bounty.json', JSON.stringify(storage));
        }
    }
        

        
            
        }
        
      
        
        

        

    
	
};