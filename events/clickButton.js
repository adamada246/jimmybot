const Discord = require('discord.js');
global.fs = require('fs');

const ms = require('ms');
const { MessageButton, MessageActionRow } = require('discord-buttons')

path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(__parentDir+'/storage/money.json'); // path may vary
prefix = require(__parentDir+'/storage/prefix.json'); // path may vary


module.exports = async (client, button) => {

    splitID = button.id.split(/@+/g);
    userID = splitID[1]
    user = await client.users.fetch(userID)

    await button.clicker.fetch();
try{
    
        
      
      if(!button.id){
        // this is a URL button, the action has alreayd been taken and in this case i dont want to do anything
      }


      if(button.id.startsWith("GAMBLE_1")){
   
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

        await button.clicker.fetch();
    
        
        if (button.clicker.user.id == userID){
          if (client.gamblecooldown.get(userID) == "false"){
            if (Number(client.usergamble.get(userID)) < Number(money[userID])){
            percentprofit = (getRandomInt(200) - 100)/100
      
            
            newmoneygamble = Number(Number((client.usergamble.get(userID) * percentprofit)).toFixed(0)) + Number(money[userID])
            moneynet = Number(client.usergamble.get(userID) * percentprofit).toFixed(0)
            money[userID] = newmoneygamble
            fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money))
           
            
    
            client.gamblecooldown.set(userID, "true")
          

            const gambleoutcome = new Discord.MessageEmbed()
        .setColor('#f0dc66')
        .setTitle('Gamble outcome!')
    .addFields(
      { name: moneynet > 0 ? "You gained money!" : "You lost money :(", value: moneynet > 0 ? "You gained `"+moneynet+"` treats!" : "You lost `"+Number(moneynet)*-1+"` treats...", inline: false }
    )
        .setFooter('You currently have '+money[userID]+" treats total.");

    button.message.edit(button.clicker.user.toString() + ", ", {

      embed: gambleoutcome,
      components: null
    })
         
          //  button.reply.send(button.clicker.user.toString() + ", ", {
//
          //    embed: gambleoutcome
        //    })
            setTimeout(() => {
              client.gamblecooldown.set(userID, "false")
            }, ms("2m")); 
          }
          else{
            button.reply.send(button.clicker.user.toString()+", you don't have enough money to gamble this much!")
          }

          
          
        }
        else{
          button.reply.send("Slow down there, "+button.clicker.user.toString()+"! You're on cooldown! This command can only be executed every 2 minutes.",{
            ephemeral: true
          })
        }
        }
        else{
        button.reply.send(button.clicker.user.toString() + ", you didn't execute this command, you can't press the buttons!",{
            ephemeral: true
        })
        }
      
        
      }
      if(button.id.startsWith("GAMBLE_2")){
        await button.clicker.fetch();
    
        if (button.clicker.user.id == userID){
            button.reply.send(button.clicker.user.toString() + ", I won't gamble your money!",{
                ephemeral: true
            })
            await button.message.fetch()
            button.message.delete()
            
        }
        else{
        button.reply.send(button.clicker.user.toString() + ", you didn't execute this command, you can't press the buttons!",{
            ephemeral: true
        })
        }
      }
      
    }catch (error) {
      await button.guild
      const channel = button.guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(button.guild.me).has('SEND_MESSAGES'))
      if (channel){
        const errorem = new Discord.MessageEmbed()
		.setColor('#CC0909')
		.setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
		.setDescription("Button which caused the error: `"+button.id+"`. The error: `"+error+"`.")
		.setFooter('Error caught at: ClickButton');

        channel.send(errorem).catch(() => channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
      }
      else{
        console.log("Jimmybot encountered a button error in a server!")
      }
    }




}