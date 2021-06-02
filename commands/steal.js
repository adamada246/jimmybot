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
        
        var path = require('path'),
        moneydir = path.join(__dirname + '/../storage/money.json')


        message.author.bot == false

        if (!message.mentions.users.first()){
          message.reply("You forgot to supply the user! The correct format is j!steal @user")
      } 

      if (message.mentions.users.first()){
        secondfunction(message);
    } 


    async function secondfunction (message) {
        reciever = message.mentions.users.first().id
        stealee = message.mentions.users.first()

       

        if(message.mentions.users.first() == message.author){
          message.reply("You can't steal from yourself!")
        }

        
      }
	},
};
