const Discord = require('discord.js');
global.fs = require('fs');
const moment = require('moment');
const ms = require('ms');
const { MessageButton, MessageActionRow } = require('discord-buttons');
const message = require('./message');


path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(path.join(__dirname +'/../storage/money.json')); // path may vary
prefix = require(path.join(__dirname +'/../storage/prefix.json')); // path may vary


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
            fs.writeFileSync(path.join(__dirname +'/../storage/money.json'), JSON.stringify(money))
           
            
    
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
      



      if(button.id.startsWith("SHOP")){
      
       
        
        inventory = require(path.join(__dirname +'/../storage/globalinventory.json')); // path may vary
        itemReg = require(path.join(__dirname +'/../storage/itemregistry.json')); // path may vary
        inv = inventory[button.clicker.user.id].split(/:+/g);

        if(inventory[button.clicker.user.id] == null){
          inventory[button.clicker.user.id] = `ID=${button.clicker.user.id}:A=0:B=0:C=0:D=0:E=0:F=0:G=0:H=0:I=0:J=0:K=0:L=0:M=0:N=0:O=0:P=0:Q=0:R=0:S=0:T=0:U=0:V=0:W=0:X=0:Y=0:Z=0`
          fs.writeFileSync(path.join(__dirname +'/../storage/globalinventory.json'), JSON.stringify(inventory));
        }


        splitID2 = button.id.split(/_+/g);

        function returnItemDetails(itemNum, detail) {
		
          detailsSplit = itemReg[itemNum].split(/@+/g);
          
          if(detail == "name"){
            return detailsSplit[0]
          }
      
          if(detail == "price"){
            return detailsSplit[1]
          }
      
          if(detail == "desc"){
            return detailsSplit[2]
          }
      
          if(detail == "emoji"){
            return detailsSplit[3]
          }
      
          }


        if(button.id.startsWith("SHOP_GLOBAL")){

         
          itemLetter =  splitID2[3]
          
          if(itemLetter == "A"){
            invNum = 1
          }
          if(itemLetter == "B"){
            invNum = 2
          }
          if(itemLetter == "C"){
            invNum = 3
          }


          	
             function returnValue(userID, itemnum) {
              inv =  inventory[userID].split(/:+/g)

              poop = inv[itemnum]


              argument =  poop.split(/=+/g)


              
                return argument[1]
              
            
                
              
            }


            if(button.id.startsWith("SHOP_GLOBAL")){
          if(Number( money[button.clicker.user.id] ) >= Number(returnItemDetails(itemLetter, "price") )){
           
            currentvalue = returnValue(button.clicker.user.id, invNum)
            



           
          newvalue = Number(currentvalue) + 1

          money[button.clicker.user.id] = Number(money[button.clicker.user.id]) - Number(returnItemDetails(itemLetter, "price"))
          fs.writeFileSync(path.join(__dirname +'/../storage/money.json'), JSON.stringify(money));
        
          newinvvalue = inventory[button.clicker.user.id].replace(`${inv[invNum]}`, `${invNum}=${newvalue}`)
          inventory[button.clicker.user.id] = newinvvalue
        
          fs.writeFileSync(path.join(__dirname +'/../storage/globalinventory.json'), JSON.stringify(inventory));
          button.reply.send(button.clicker.user.toString()+", You bought one "+returnItemDetails(itemLetter, "name")+` for \`     ${returnItemDetails(itemLetter, "price")} treats.\``,{
            ephemeral: false
          })
          }

        }
        else if(button.clicker.user.id !== userID){
          button.reply.send(button.clicker.user.toString() + ", you didn't execute this command, you can't press the buttons!",{
            ephemeral: true
        })
        }

        if(Number( money[button.clicker.user.id] ) < Number(returnItemDetails(itemLetter, "price") )){
          button.reply.send(button.clicker.user.toString() + ", you don't have enough money for this!",{
            ephemeral: true
          })
        }
      }
      if(button.id.startsWith("SHOP_ROLE")){
        await button.guild
        if(button.guild.me.hasPermission( "MANAGE_GUILD" && "MANAGE_ROLES" || "ADMINISTRATOR")){
          function returnItemDetails(itemNum, detail) {
		
            detailsSplit = itemReg[itemNum].split(/@+/g);
            
            if(detail == "name"){
              return detailsSplit[0]
            }
        
            if(detail == "price"){
              return detailsSplit[1]
            }
        
            if(detail == "desc"){
              return detailsSplit[2]
            }
        
            if(detail == "emoji"){
              return detailsSplit[3]
            }
        
            }

            await button.guild
            guildID = itemLetter =  splitID2[3]
          roleID =  returnItemDetails(guildID, "emoji")
          role = button.guild.roles.cache.get(roleID)

          if(role){
            
            if(button.clicker.member.roles.cache.has(roleID)){
              button.reply.send(button.clicker.user.toString()+", You already have this role, no need to buy it again!")
            }
            if(!button.clicker.member.roles.cache.has(roleID)){
             
              if(Number(money[button.clicker.user.id]) >= Number(returnItemDetails(guildID, "price"))){
                //subtract money and reply
                botmember = await button.guild.members.cache.get(client.user.id)
                let botrole = await botmember.roles.highest
          
                
              if(role.position < botrole.position){
              button.clicker.member.roles.add(role)
              money[button.clicker.user.id] = Number(money[button.clicker.user.id])-Number(returnItemDetails(guildID, "price"))
              fs.writeFileSync(path.join(__dirname +'/../storage/money.json'), JSON.stringify(money));
              button.reply.send(`${button.clicker.user}, you've bought the ${role.name} role for ${returnItemDetails(guildID, "price")} treats. Check your roles!`)
              }
              else{
            
                button.reply.send(`${button.clicker.user.toString()}, I don't have access to this role, it's higher than me on the role list. Either have an admin give me more perms by moving me up on the role list, or have an admin choose another role below me on the list.  For more info, join my support server, which you can access by pinging me.`)
              }
            }
              if(Number(money[button.clicker.user.id]) <= Number(returnItemDetails(guildID, "price"))){
                button.reply.send(`${button.clicker.user}, you do not have enough money to complete this transaction!`, {
                  ephemeral: true
                })
              
            }

            }
          }
          if(!role){
            const errorem = new Discord.MessageEmbed()
            .setColor('#CC0909')
            .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
            .setDescription("Button which caused the error: `"+button.id+"`. The error: `Role does not exist.`.")
            .setFooter('Error caught at: ClickButton');

            button.reply.send(`${button.clicker.user}, `,{
              embed: errorem
            })

          }






        }
        else{
         
          button.reply.send(`I'm missing permissions! For this command I need the \`MANAGE_SERVER\` and \`MANAGE_ROLES\` permissions. Please have an admin re-add me with the needed permissions!`)
          


        }



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

    console.log(error)
        channel.send(errorem).catch(() => channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
      }
      else{
        console.log("Jimmybot encountered a button error in a server!")
      }
    }





}