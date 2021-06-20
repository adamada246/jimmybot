const Discord = require('discord.js');
client.stealcooldown = new Map();
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(__parentDir+'/storage/money.json'); // path may vary
const ms = require('ms');
  module.exports = {
	name: 'steal',
	description: 'ok',
    
  
	execute(message ) {
       

    if(!client.stealcooldown.get(message.author.id)){
      client.stealcooldown.set(message.author.id, "false")
    }



if (client.stealcooldown.get(message.author.id) == "false"){

         function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    if(money[message.author.id] == null){
      money[message.author.id] = 0
      fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
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
            recoilchance = getRandomInt(6)
            if (recoilchance == 0){
              recoilamt = getRandomInt(100)
              message.reply("Oh no! You accidentally triggered the alarm while trying to steal! `"+recoilamt+"%` of your treats have been given to the person you tried to steal from! Tough luck.")
              percentpoop = (recoilamt/100)

              stealeemon = money[message.author.id]
              stealermon = money[message.mentions.users.first().id]
              newmongive = Number(stealermon) * (1+Number(percentpoop))
              newmontake = Number(stealeemon ) * (1-Number(percentpoop))
              money[message.mentions.users.first().id] = newmongive
              money[message.author.id] = newmontake
              fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
           
              client.stealcooldown.set(message.author.id, "true")
              setTimeout(() => {
                client.stealcooldown.set(message.author.id, "false")
              }, ms("5m")); 
      
            }
            else if (recoilchance !== 0){
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
              newmongive = Number(stealermon) + 10
              newmontake = Number(stealeemon) - 10
              money[message.mentions.users.first().id] = newmongive
              money[message.author.id] = newmontake
              fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
              message.mentions.users.first().send(message.author.tag+" tried to steal from you but failed due to Jimmy! They've given you 10 treats.")
              
              
          .catch(() => console.log("user does not have dms on"));
          client.stealcooldown.set(message.author.id, "true")
          setTimeout(() => {
            client.stealcooldown.set(message.author.id, "false")
          }, ms("5m")); 
  
            }
            else if(jimmychance == 0){
             message.reply("Wow! The person you tried to steal from had a Jimmy guarding their treats, but luckily it was sleeping.")
              recoilamt = getRandomInt(100)
              stealfnc(message, stealamt)
            }
          }
        }

        
        async function stealfnc (message, stealamt) {
          message.channel.send("Got it! The user you stole from has 15 seconds to catch you!")
          message.mentions.users.first().send("You're being stolen from by `"+message.author.tag+"`! React to this message within 15 seconds to catch them!")
         
          
          .catch(() => message.channel.send("Oh no! This user does not have dms on!").then(()=>{return}))
          
          
          .then(function (messagea) {
            messagea.react("🚨")
            setTimeout(() => {
              const reactMessage = message.channel.messages.cache.get(messagea.id);
              const reactionsYes = messagea.reactions.cache.get("🚨");

              if (reactionsYes.count == 1){
                console.log("poop")
                stealeemon = money[message.mentions.users.first().id]
                percent = stealamt/100
                givemoneyamt = Number(stealeemon) * Number(percent)
                stealermon = money[message.author.id]
                newmongive = Number(stealermon) +Number( givemoneyamt)
                newmontake = Number( stealeemon )- Number(givemoneyamt)
                money[message.author.id] = newmongive
                money[message.mentions.users.first().id] = newmontake
                fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
                message.channel.send(message.author.tag+" stole "+givemoneyamt+" ("+stealamt+"%) treats from "+message.mentions.users.first().tag+".")
                client.stealcooldown.set(message.author.id, "true")
                setTimeout(() => {
                  client.stealcooldown.set(message.author.id, "false")
                }, ms("5m")); 
              }

              if (reactionsYes.count == 2) {
                console.log("pee")
                message.reply("Looks like the person you tried to steal from caught you! As compensation, you gave them 10 treats.")
                stealeemon = money[message.author.id]
                 stealermon = money[message.mentions.users.first().id]
                 newmongive = Number(stealermon) + 10
                 newmontake = Number(stealeemon )- 10
                 money[message.mentions.users.first().id] = newmongive
                 money[message.author.id] = newmontake
                 fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
                 message.mentions.users.first().send(message.author.tag+" tried to steal from you but failed due to you catching them! They've given you 10 treats.")
                 client.stealcooldown.set(message.author.id, "true")
                 setTimeout(() => {
                  client.stealcooldown.set(message.author.id, "false")
                }, ms("5m")); 
              }
              else if(!reactionsYes){
                console.log("oh no")
                message.channel.send("Jimmybot ran into an error: `NO REACTIONS PRESENT`. If this problem persists join my support server, which you can find by pinging me.")
                client.stealcooldown.set(message.author.id, "true")
                setTimeout(() => {
                  client.stealcooldown.set(message.author.id, "false")
                }, ms("5m")); 
              }
            }, ms("15s")); 
    




        })



        
      }
    }
    
  }
  else if (client.stealcooldown.get(message.author.id) == "true"){
    message.channel.send("Slow down there, "+message.author.tag+"! You're on cooldown! You can only run this command every 5 minutes.")
  }

	},
};
