const Discord = require('discord.js');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(path.join(__dirname +'/../storage/money.json')); // path may vary
  module.exports = {
	name: 'pay',
	description: 'ok',
    
  
	execute(message ) {
       
        path = require('path'),
        __parentDir = path.dirname(module.parent.filename);
        prefix = require(path.join(__dirname +'/../storage/prefix.json')); // path may vary
        const args = message.content.slice(prefix[message.guild.id].length).trim().split(/ +/g);
        let amount = args[2]
        giver = message.author.id
        giverrecall = message.author
        
        var path = require('path'),
        moneydir = path.join(__dirname + '/../storage/money.json')


        message.author.bot == false

        if (!message.mentions.users.first() || !amount){
          message.reply("You forgot to supply the amount/user! The correct format is j!pay (@user) (amount)")
      } 

      if (message.mentions.users.first() && amount){
        secondfunction(message);
    } 


    async function secondfunction (message) {
        reciever = message.mentions.users.first().id
        recieverrecall = message.mentions.users.first()

        if(amount>0 && message.mentions.users.first() !== message.author){
          mainfunction(message);
        }

        if(message.mentions.users.first() == message.author){
          message.reply("You can't pay yourself!")
        }


        if(amount<=0){
          message.reply("Hey! You can't pay 0 treats or less! The number must be above 0.")
        }
    }

        async function mainfunction(message) {
        if (!money[reciever]){
            money[reciever] = 0
          }

        if (!money[giver]){
            money[giver]=  0
        }

        if (message.mentions.users.first() && amount && money[giver]>=amount) {
            money[giver] -= amount;
            fs.writeFileSync(path.join(__dirname +'/../storage/money.json'), JSON.stringify(money));
           tempcheck = money[reciever]
           givethismon = Number(tempcheck) + Number(amount)
           money[reciever] = givethismon
           fs.writeFileSync(path.join(__dirname +'/../storage/money.json'), JSON.stringify(money));
            console.log(giverrecall.username+" gave "+amount+" treats to "+recieverrecall.username+". The giver's balance is now "+money[giver]+" treats and the reciever's balance is now "+money[reciever]+" treats.");
            message.channel.send(giverrecall.username+" successfully gave "+amount+" treats to "+recieverrecall.username+". The giver's balance is now "+money[giver]+" treats and the reciever's balance is now "+money[reciever]+" treats.")
        }
      
      if (message.mentions.users.first() && amount && money[giver]<amount){
        message.reply(giverrecall.username+" does not have enough treats to complete this transfer!")
         }

        
      }
	},
};

