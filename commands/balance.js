const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(path.join(__dirname +'/../storage/money.json')); // path may vary



  module.exports = {
	name: 'balance',
	description: 'ok',
    

	execute(message ) {
    
    async function getuser(message) {
      if (message.mentions.users.first()){
      userbal = message.mentions.users.first().id
      userbalrecall = message.mentions.users.first()
      }


      if (!message.mentions.users.first()) {
        userbal = message.author.id
        userbalrecall = message.author
      }

    }




      getuser(message);
        var path = require('path'),
        moneydir = path.join(__dirname + '/../storage/money.json')
        const money = require(moneydir); // path may vary
        if (!money[userbal]){
          money[userbal] = 0
        }
        console.log(userbalrecall.username+" now has "+money[userbal]+" treats.");
        
        message.channel.send(userbalrecall.username+" currently has `"+money[userbal]+"` treats!")

    
	},
};

