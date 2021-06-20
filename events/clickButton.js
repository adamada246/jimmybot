const Discord = require('discord.js');
global.fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const ms = require('ms');
const { MessageButton, MessageActionRow } = require('discord-buttons')




module.exports = async (client, button) => {

    splitID = button.id.split(/@+/g);
    userID = splitID[1]
    user = await client.users.fetch(userID)

    await button.clicker.fetch();

    if(button.id.startsWith("DEVTEST_1")){
        await button.clicker.fetch();
        if (button.clicker.member.hasPermission('KICK_MEMBERS')){
          console.log('yes')
      
          button.reply.send(button.clicker.user.toString() + ", Ok, i respect it")
        }
        else if (!button.clicker.member.hasPermission('KICK_MEMBERS')){
          console.log('no')
          
          button.reply.send(button.clicker.user.toString() +". ur not an admin doo doo face")
        }
      
        
      }
      if(button.id.startsWith("DEVTEST_2")){
    
        button.reply.send(button.clicker.user.toString() + ", pretty boring but ok i guess")
      }
      if(button.id.startsWith("DEVTEST_3")){
        await button.clicker.fetch();
        console.log(button.clicker.user.tag)
        if (button.clicker.user.id && button.clicker.user.id == userID){
        
          button.reply.send(button.clicker.user.toString() +", why bro ")
        }
        else{
      
    
          button.reply.send(button.clicker.user.toString() +", ur not the author! the user that triggered this message is: "+user.tag)
        }
        
      }
      if(!button.id){
        // this is a URL button, the action has alreayd been taken and in this case i dont want to do anything
      }


      if(button.id.startsWith("GAMBLE_1")){
        await button.clicker.fetch();
    
        if (button.clicker.user.id == userID){
            console.log("gambling")
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
            
        }
        else{
        button.reply.send(button.clicker.user.toString() + ", you didn't execute this command, you can't press the buttons!",{
            ephemeral: true
        })
        }
      }
      




}