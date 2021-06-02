const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(__parentDir+'/storage/money.json'); // path may vary
  module.exports = {
	name: 'steal',
	description: 'ok',
    
  
	execute(message ) {
       

         function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }


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
            recoilchance = getRandomInt(5)
            if (recoilchance == 0){
              recoilamt = getRandomInt(100)
              message.reply("Looks like "+stealee.tag+" caught you in the act! `"+recoilamt+"%` of your treats have been given to them! Tough luck.")
            }
            else{
              stealamt = getRandomInt(100)
              stealfnc(message, stealamt)
            }
          }
          else{
            jimmychance = getRandomInt(9)

            if(jimmychance !== 0){
            message.reply("Looks like the person you tried to steal from has a Jimmy guarding them! The Jimmy stole 10 treats from you and gave it to the person you tried to steal from.")
             stealeemon = money[message.author.id]
              stealermon = money[message.mentions.users.first().id]
              newmongive = stealermon + 10
              newmontake = stealeemon - 10
              money[message.mentions.users.first().id] = newmongive
              money[message.author.id] = newmontake
              fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
              message.mentions.users.first().send(message.author.tag+" tried to steal from you but failed due to Jimmy! They've given you 10 treats.")
          .catch(() => console.log("user does not have dms on"));
            }
            else if(jimmychance == 0){
             message.reply("Wow! The person you tried to steal from had a Jimmy guarding their treats, but luckily it was sleeping.")
              recoilamt = getRandomInt(100)
              stealfnc(message, stealamt)
            }
          }
        }

        async function stealfnc (message, stealamt) {
          //make dm to stealee 30 seconds waiting
          stealeemon = money[message.mentions.users.first().id]
          percent = stealamt/100
          givemoneyamt = stealeemon * percent
          stealermon = money[message.author.id]
          newmongive = stealermon + givemoneyamt
          newmontake = stealeemon - givemoneyamt
          money[message.author.id] = newmongive
          money[message.mentions.users.first().id] = newmontake
          fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
         
        }



        
      }
	},
};
