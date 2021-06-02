const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(__parentDir+'/storage/money.json'); // path may vary
  module.exports = {
	name: 'steal',
	description: 'ok',
    
  
	execute(message ) {
       
        path = require('path'),
        __parentDir = path.dirname(module.parent.filename);
        prefix = require(__parentDir+'/storage/prefix.json'); // path may vary
        giver = message.author.id
        giverrecall = message.author
        stealing = require(__parentDir+'/storage/stealing.json'); // path may vary
        moneydir = path.join(__dirname + '/../storage/money.json')


        message.author.bot == false

        if (!message.mentions.users.first()){
          message.reply("You forgot to supply the user! The correct format is j!steal @user")
      } 

      if (message.mentions.users.first()){
        secondfunction(message);
    } 


    async function secondfunction (message) {
        stealeeID = message.mentions.users.first().id
        stealee = message.mentions.users.first()

       

        if(message.mentions.users.first() == message.author){
          message.reply("You can't steal from yourself!")
        }
        else{
          if (stealing[stealeeID] == false || !stealing[stealeeID]){
            //continue
          }
          else{
            message.reply("Looks like the person you tried to steal from has a Jimmy guarding them! The Jimmy stole 10 treats from you and gave it to the person you tried to steal from.")
          }
        }

        
      }
	},
};
