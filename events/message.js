const { timeStamp } = require('console');
const Discord = require('discord.js');
global.fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const ms = require('ms');

client.bountycooldown = new Map();


module.exports = async (client, message) => {

  try{
 


  path = require('path'),
  __parentDir = path.dirname(module.parent.filename);

  botstorage2 = require(path.join(__dirname +'/../storage/quarantines.json')); // path may vary
  botstorage3 = require(path.join(__dirname +'/../storage/bounties.json')); // path may vary
  botstorage4 = require(path.join(__dirname +'/../storage/timeout.json')); // path may vary
  ublacklist = require(path.join(__dirname +'/../storage/userbl.json')); // path may vary
  sblacklist = require(path.join(__dirname +'/../storage/serverbl.json')); // path may vary
  prefix = require(path.join(__dirname +'/../storage/prefix.json'));
  inventory = require(path.join(__dirname +'/../storage/globalinventory.json')); // path may vary
  
 money = require(path.join(__dirname +'/../storage/money.json')); // path may vary
  global.authorID = message.author.id; // or set it as the mentioned user's ID, etc.
  global.mentionedID = message.mentions.users.first.id; // or set it as the mentioned user's ID, etc.

  
  //startup = await client.channels.cache.get('856547819800363018')
  //startup.send("@</743256356533960754>")
 


  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  

  if (message.guild === null){
    
    
    if (message.author.bot == false){
      const dmrespond = new Discord.MessageEmbed()
      .setColor("#f0dc66")
      .setTitle("Are you trying to crash me?")
      .setDescription("Jimmybot doesn't work in DMs! [Invite me to a server instead!](https://discord.com/api/oauth2/authorize?client_id=808768146135318595&permissions=805825655&scope=bot)")
      .setFooter("This is a security feature! Your message has been logged. If you are purposely trying to crash Jimmybot, you will be blacklisted from using the bot.")

      message.channel.send(dmrespond)
      
      console.log("["+new Date().toLocaleString()+"] "+message.author.tag+" (User id: "+message.author.id+") just tried to dm me the following: "+message.content)
      }
      return
  }
  else{
    stopcheck(message);
  }

  if(!prefix[message.guild.id]){
    prefix[message.guild.id] = "j!"
    fs.writeFileSync(path.join(__dirname +'/../storage/prefix.json'), JSON.stringify(prefix));
}


  function stopcheck(message) {
    if(!sblacklist[message.guild.id] && !ublacklist[message.author.id] || message.author.id ==  743256356533960754){
      poopego(message)
    }
    else{
      if(message.author.bot == false){
        if(message.content.toLowerCase().startsWith(prefix[message.guild.id])){
         message.channel.send("This user/server is blacklisted from using jimmybot!")
        }
      }
    }
  }


     function poopego(message) {
     
      
      if(!client.bountycooldown.get(message.author.id)){
        client.bountycooldown.set(message.author.id, "false")
      }

     
  
       if(botstorage2[message.guild.id] == null){
        botstorage2[message.guild.id] = true
        fs.writeFileSync(path.join(__dirname +'/../storage/quarantines.json'), JSON.stringify(botstorage2));
       }
  
       if(inventory[message.author.id] == null){
        inventory[message.author.id] = `ID=${message.author.id}:A=0:B=0:C=0:D=0:E=0:F=0:G=0:H=0:I=0:J=0:K=0:L=0:M=0:N=0:O=0:P=0:Q=0:R=0:S=0:T=0:U=0:V=0:W=0:X=0:Y=0:Z=0`
        fs.writeFileSync(path.join(__dirname +'/../storage/globalinventory.json'), JSON.stringify(inventory));
       }

       if(botstorage3[message.guild.id] == null ){
        botstorage3[message.guild.id] = true
        fs.writeFileSync(path.join(__dirname +'/../storage/quarantines.json'), JSON.stringify(botstorage3));
       }
  

       
       if(money[message.author.id] == null){
        money[message.author.id] = 0
        fs.writeFileSync(path.join(__dirname +'/../storage/money.json'), JSON.stringify(money));
       }
     
       fullmoney = Number( money[message.author.id]).toFixed(0);
       money[message.author.id] = fullmoney
       fs.writeFileSync(path.join(__dirname +'/../storage/money.json'), JSON.stringify(money));


       
       if(botstorage4[message.author.id] == null ){
        botstorage4[message.author.id] = false
        fs.writeFileSync(path.join(__dirname +'/../storage/timeout.json'), JSON.stringify(botstorage4));
       }

       if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"bail") && message.author.bot == false && message.member.roles.cache.some(r => r.name === "Quarantined") ) {
        if (!client.commands.has('bail')) return;
        try {
          client.commands.get('bail').execute(message );
        } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
          console.error(error);
         message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
        }
      }

      if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"prefix") && message.author.bot == false || message.content.toLowerCase().startsWith("j!prefix") && message.author.bot == false) {
        if (!client.commands.has('prefix')) return;
        try {
          client.commands.get('prefix').execute(message );
        } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
          console.error(error);
         message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
        }
      }


        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"blacklistserver") && message.author.bot == false && message.author.id ==  743256356533960754) {
          if (!client.commands.has('blacklistserver')) return;
          try {
            client.commands.get('blacklistserver').execute(message );
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"blacklistuser") && message.author.bot == false && message.author.id ==  743256356533960754) {
          if (!client.commands.has('blacklistuser')) return;
          try {
            client.commands.get('blacklistuser').execute(message );
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith("j!devtest")) {
          if (!client.commands.has('devtest')) return;
          try {
            client.commands.get('devtest').execute(message );
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        
        if (message.content.toLowerCase().startsWith("j!legal") && message.author.bot == false || message.content.toLowerCase().startsWith("j!privacy") && message.author.bot == false || message.content.toLowerCase().startsWith("j!privacypolicy") && message.author.bot == false || message.content.toLowerCase().startsWith("j!EULA") && message.author.bot == false || message.content.toLowerCase().startsWith("j!license") && message.author.bot == false || message.content.toLowerCase().startsWith("j!TOS") && message.author.bot == false ){
          if (!client.commands.has('legal')) return;
          try {
            client.commands.get('legal').execute(message );
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"invite") && message.author.bot == false) {
          if (!client.commands.has('invite')) return;
          try {
            client.commands.get('invite').execute(client, message );
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
        
        
        
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"catch") && message.author.bot == false  && botstorage3[message.guild.id] == true || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"claim") && message.author.bot == false  && botstorage3[message.guild.id] == true) {
          if (!client.commands.has('catch')) return;
          try {
            client.commands.get('catch').execute(message );
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"bal") && !message.content.toLowerCase().includes(prefix[message.guild.id]+"balance") && message.author.bot == false || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"balance") && message.author.bot == false ) {
          if (!client.commands.has('balance')) return;
          try {
            client.commands.get('balance').execute(message );
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"pay") && message.author.bot == false ) {
          if (!client.commands.has('pay')) return;
          try {
            client.commands.get('pay').execute(message );
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
        
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"hi") && message.author.bot == false  ) {
          if (!client.commands.has('hi')) return;
          try {
            client.commands.get('hi').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().includes("good boy") && message.author.bot == false  ) {
          if (!client.commands.has('goodboy')) return;
          try {
            client.commands.get('goodboy').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"biden") && message.author.bot == false  ) {
          if (!client.commands.has('biden')) return;
          try {
            result = getRandomInt(3)
            client.commands.get('biden').execute(message , version, result);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"inv") && message.author.bot == false   || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"inventory") && message.author.bot == false  ) {
          if (!client.commands.has('inventory')) return;
          try {
            
            client.commands.get('inventory').execute(message , version);
          }  catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          } 
        }
        
        
    

        setInterval(() => {

          global.shopDate = new Date().toLocaleString()
          global.hourlyDiscount = (getRandomInt(75) + 50)/100
          global.shopitemnum = getRandomInt(2)
          
        }, ms(`1h`));

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"shop") && message.author.bot == false   ) {
          if (!client.commands.has('shop')) return;
          try {
           
            client.commands.get('shop').execute(message , version, shopitemnum);
          }  catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          } 
        }
      
        if (message.content.toLowerCase().includes("goodboy") && message.author.bot == false  ) {
          if (!client.commands.has('goodboy')) return;
          try {
            client.commands.get('goodboy').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        
      
        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"good boy") && message.author.bot == false  ) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"gamble") && message.author.bot == false  ) {
          if (!client.commands.has('gamble')) return;
          try {
            client.commands.get('gamble').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"goodboy") && message.author.bot == false  ) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"tricks") && message.author.bot == false || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"cmds") && message.author.bot == false || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"commands") && message.author.bot == false || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"help") && message.author.bot == false || message.content.toLowerCase().startsWith("j!tricks") && message.author.bot == false || message.content.toLowerCase().startsWith("j!cmds") && message.author.bot == false || message.content.toLowerCase().startsWith("j!commands") && message.author.bot == false || message.content.toLowerCase().startsWith("j!help") && message.author.bot == false) {
          if (!client.commands.has('commandslist')) return;
          try {
            client.commands.get('commandslist').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
        
      
        if (message.content.toLowerCase().startsWith("food") && message.content.toLowerCase().endsWith("food") && message.author.bot == false  ) {
          if (!client.commands.has('food')) return;
          try {
            client.commands.get('food').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith("bowie") && message.content.toLowerCase().endsWith("bowie") && message.author.bot == false  ) {
          message.reply("This command is no longer valid.")
        }
      
        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"food") && message.author.bot == false  ) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
        
        if (message.content.toLowerCase().startsWith("play") && message.content.toLowerCase().endsWith("play") && !message.content.toLowerCase().startsWith("-") && message.author.bot == false  ) {
          if (!client.commands.has('play')) return;
          try {
            client.commands.get('play').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"play") && message.author.bot == false  ) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"changelog") && message.author.bot == false) {
          if (!client.commands.has('changelog')) return;
          try {
            client.commands.get('changelog').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
      
        if (message.content.toLowerCase().includes("dumb") && message.author.bot == false  ) {
          if (!client.commands.has('dumb')) return;
          try {
            client.commands.get('dumb').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"dumb") && message.author.bot == false  ) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
        
        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"sus") && message.author.bot == false  ) {
          if (!client.commands.has('sus')) return;
          try {
            client.commands.get('sus').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"portrait") && message.author.bot == false  ) {
          if (!client.commands.has('portrait')) return;
          try {
            client.commands.get('portrait').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"sad") && message.author.bot == false  ) {
          if (!client.commands.has('sad')) return;
          try {
            client.commands.get('sad').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"steal") && message.author.bot == false  ) {
          if (!client.commands.has('steal')) return;
          try {
            client.commands.get('steal').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
       
       if (message.content.toLowerCase().includes(prefix[message.guild.id]+"apple") && message.author.bot == false  ) {
          if (!client.commands.has('apple')) return;
          try {
            client.commands.get('apple').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"friend") && message.author.bot == false  ) {
          message.reply("This command is no longer valid.")
        }
      
        if (message.content.toLowerCase().includes(prefix[message.guild.id]+"owner") && message.author.bot == false  ) {
          if (!client.commands.has('owner')) return;
          try {
            client.commands.get('owner').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
        
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"talents") && message.content.toLowerCase().endsWith("s") && message.author.bot == false  ) {
          if (!client.commands.has('talents')) return;
          try {
            client.commands.get('talents').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"talent") && message.content.toLowerCase().endsWith("t") && message.author.bot == false  ) {
          if (!client.commands.has('talents')) return;
          try {
            client.commands.get('talents').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith("!j") && message.author.bot == false  ) {
          if (!client.commands.has('wrongformat')) return;
          try {
            client.commands.get('wrongformat').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        function nomorecommands(message) {
          setTimeout(function(){ 
            client.bountycooldown.set(message.author.id, "true")
          
     
          setTimeout(function(){ 
            client.bountycooldown.set(message.author.id, "false")
           
          }, ms("30s"));
        }, ms("5"));
        }
        
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"bounty") && message.author.bot == false && botstorage3[message.guild.id] == true && client.bountycooldown.get(message.author.id) == "false" ) { 
          if (!client.commands.has('bounty')) return;
          try {
            client.commands.get('bounty').execute(message , version);
            nomorecommands(message);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"bounty") && message.author.bot == false && botstorage3[message.guild.id] == true && client.bountycooldown.get(message.author.id) == "true" ) { 
          try {
            message.reply("There's a 30 second cooldown for this command!")
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

      
        if (message.content.toLowerCase().toLowerCase().includes(prefix[message.guild.id]+"about") && message.author.bot == false   || message.content.toLowerCase().includes(prefix[message.guild.id]+"info") && message.author.bot == false  )  {
          if (!client.commands.has("about")) return;
          try {
            client.commands.get("about").execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"event") && message.author.bot == false) {
          if (!client.commands.has('event')) return;
          try {
            client.commands.get('event').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"admin") &&  message.content.toLowerCase().endsWith("n") && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR")) {
          if (!client.commands.has('adminwarn')) return;
          try {
            client.commands.get('adminwarn').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"admin")  && message.content.toLowerCase().endsWith("n") && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"adminpanel")   && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('adminpanel')) return;
          try {
            client.commands.get('adminpanel').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"adminpanel")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantines false")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR")  || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantine false")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('turnqoff')) return;
          try {
            client.commands.get('turnqoff').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantines false")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantine false")  && message.author.bot == false && !  message.member.hasPermission("ADMINISTRATOR")  ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
        
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantines true")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR") || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantine true")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('turnqon')) return;
          try {
            client.commands.get('turnqon').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantines true")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantine true")  && message.author.bot == false && !  message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }


        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"bounties false")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR")  ) {
          if (!client.commands.has('bountiesoff')) return;
          try {
            client.commands.get('bountiesoff').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"bounties false")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
        
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"bounties true")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR")) {
          if (!client.commands.has('bountieson')) return;
          try {
            client.commands.get('bountieson').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"bounties true")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR")  ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"bounties") && message.content.toLowerCase().endsWith("ies") && message.author.bot == false ) {
          if (!client.commands.has('bountystatus')) return;
          try {
            client.commands.get('bountystatus').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
        
        
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantine") && message.content.toLowerCase().endsWith("ne") && message.author.bot == false || message.content.toLowerCase().startsWith(prefix[message.guild.id]+"quarantines") && message.content.toLowerCase().endsWith("es") && message.author.bot == false) {
          if (!client.commands.has('fartstatus')) return;
          try {
            client.commands.get('fartstatus').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        
      
        if (message.content.toLowerCase().includes("fart")  && message.author.bot == false && botstorage2[message.guild.id] == true &&   !message.member.hasPermission("ADMINISTRATOR") || message.content.toLowerCase().includes("Fart")  && !message.content.toLowerCase().includes("status") && message.author.bot == false && botstorage2[message.guild.id] == true && !message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('quarantine')) return;
          try {
            client.commands.get('quarantine').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
            message.reply('stop dming me fart u poo face');
          }
        }

      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"suitup") && message.author.bot == false &&  !message.member.hasPermission("ADMINISTRATOR") && !message.member.roles.cache.some(r => r.name === "Visiting Quarantine") && !message.member.roles.cache.some(r => r.name === "Quarantined") ) {
          if (!client.commands.has('hazmat')) return;
          try {
            client.commands.get('hazmat').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }
      
        if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"suitup")  && message.author.bot == false &&  message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('toomanyperms')) return;
          try {
            client.commands.get('toomanyperms').execute(message , version);
          } catch (error) { const errorem = new Discord.MessageEmbed()
  .setColor('#CC0909')
  .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
  .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
  .setFooter('Error caught at: Message');
            console.error(error);
           message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
          }
        }

        if (message.mentions.users.first()){
          if (message.mentions.users.first().id == client.user.id && message.author.bot == false){
            const pinged = new Discord.MessageEmbed()
              .setColor('#f0dc66')
              .setTitle('Jimmybot')
              .setDescription("[Click here for Support](https://discord.gg/2nhwcgfsfv)")
              .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
              .addFields(
                { name: '**Prefix:**', value: 'The Prefix on this server is `'+prefix[message.guild.id]+"`", inline: false },
                { name: '**List of Commands:**', value: 'To get a list of commands use: `' +prefix[message.guild.id]+'help`', inline: false },

              )
              .setFooter("Thanks for using Jimmybot!");


              message.channel.send(pinged)
                    }
                  }








                  if (message.author.id == 743256356533960754 && message.content.startsWith("emit{") && message.content.endsWith("}end")){


                    
                    const input = message.content.replace("emit{", "")
                    const output = input.replace("}end", "")


                    const updatedem = new Discord.MessageEmbed()
                    .setColor('#f0dc66')
                    .setTitle("Jimmybot has updated!")
                    .setDescription(output)
                    .setFooter('Jimmybot' +version);
              
                
                    
                    client.guilds.cache.forEach(guild => {
                      channel3 = guild.channels.cache.find(channel => channel.type === 'text' && channel.name == "jimmybot")

                      if (channel3){
                      channel3.send(updatedem)
                      }

                    });

                    





                  }

                  if (message.author.id == 743256356533960754 && message.content.startsWith("j!warnguilds") ){
                    client.guilds.cache.forEach(guild => {
                      const poobychicken = new Discord.MessageEmbed()
                      .setColor('#ff1900')
                      .setTitle("Alert!")
                      .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
                      .setDescription("Due to an error with Jimmybot from  3/30/2021 to 5/3/2021. Servers Jimmybot was added to at the time did not create channels correctly. To create #jimmybot for update logs, and more features: Kick Jimmybot and readd it with sufficent permsissions. This is highly recommended!")
                      .setFooter("[For more information/support join the Jimmybot Support Discord](https://discord.gg/2nhwcgfsfv)");

                      jimchan = guild.channels.cache.find(channel => channel.type === 'text' && channel.name == "jimmybot")
                      const channel10 = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))



                        
                        if (!jimchan){
                        if(channel10){
                          channel10.send(poobychicken)
                        }
                        else if(!channel10){

                      

                          console.log(guild.name+" ("+guild.id+") has no channels I can type in.")
                        }
                      }

                    
              

                    
                    
                  
                  })

                  }



              


     }


     if (message.content.toLowerCase().startsWith(prefix[message.guild.id]+"vote") && message.author.bot == false){
      const voteem = new Discord.MessageEmbed()
      .setColor('#f0dc66')
      .setTitle('Vote for Jimmybot!')
      .setDescription("Click [here](https://top.gg/bot/808768146135318595/vote) and/or [here](https://discordbotlist.com/bots/jimmybot/upvote) to vote for Jimmybot!")
      .setImage('')
      .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
      .setFooter("For voting you'll recieve 20 treats and you'll be supporting Jimmybot! Thanks!");

      message.channel.send(voteem)
     }
     

     if (message.channel.id == 844302734579466280){

        if(message.content){

          const thanksem = new Discord.MessageEmbed()
            .setColor('#f0dc66')
            .setTitle('Thanks for voting for Jimmybot!')
            .setDescription("20 Treats were added to your balance! Thanks for supporting us!")
            .setImage('')
            .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
            .setFooter("Don't forget you can vote again in 12 hours!");




          voterID = message.content
          const voter = client.users.cache.find(user => user.id == voterID)

          console.log("New vote: "+voter.tag+" ("+voter.id+")!")
          voter.send(thanksem)
          .catch(() => console.log("The voter has dms off!"));

         
          function returnValue(userID, itemnum) {
            inv =  inventory[userID].split(/:+/g)
            poop = inv[itemnum]
            argument = poop.split(/=+/g)
            if (!argument[1]){
              return null
            }
            if (argument[1]){
              return argument[1]
            }
          }

          

          if(money[voterID] == null || !money[voterID]){
            money[message.author.id] = 0
            fs.writeFileSync(path.join(__dirname +'/../storage/money.json'), JSON.stringify(money));
        }

           voterbal1 = money[voterID]
           voternewbal = Number(voterbal1) + 20
           money[voterID] = voternewbal

           if(Number(returnValue(voterID, 2)) !== 0){
             money[voterID] = Number(money[voterID]) + 180
             voter.send("Psst... Because of the vote multiplier you had in your inventory, your reward amount has been multiplied by 10, so you actually got a reward of 200 treats!")
             currentvalue = returnValue(voterID, 2)
             newvalue = (Number(returnValue(voterID, 2)) - Number(1)).toFixed(0)
             inventory[voterID] = inventory[voterID].replace(`${inv[2]}`,`B=${newvalue}`)
             fs.writeFileSync(path.join(__dirname +'/../storage/globalinventory.json'), JSON.stringify(inventory));
           }



           fs.writeFileSync(path.join(__dirname +'/../storage/money.json'), JSON.stringify(money));



        }

     }
    }
    catch (error){
      console.log(error)
      const errorem = new Discord.MessageEmbed()
      .setColor('#CC0909')
      .setTitle('Jimmybot ran into an error. If this persists join our support server, which you can access by pinging the bot.')
      .setDescription("Message which caused the error: `"+message.url+"`. The error: `"+error+"`.")
      .setFooter('Error caught at: Message');

  message.channel.send(errorem).catch(() => message.channel.send("Jimmybot encountered a fatal error, for help, please join the support server, which you can get by pinging the bot.").catch(() => console.log("Jimmybot encountered a button error in a server!")))
    }
}
