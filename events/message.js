const Discord = require('discord.js');
global.fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const ms = require('ms');



module.exports = async (client, message) => {

  let poopyrole = message.guild.roles.cache.find(r => r.name === "Quarantined");
  

  path = require('path'),
  __parentDir = path.dirname(module.parent.filename);
  botstorage1 = require(__parentDir+'/storage/jimmybot.json'); // path may vary
  botstorage2 = require(__parentDir+'/storage/quarantines.json'); // path may vary
  botstorage3 = require(__parentDir+'/storage/bounties.json'); // path may vary
  botstorage4 = require(__parentDir+'/storage/timeout.json'); // path may vary



 money = require(__parentDir+'/storage/money.json'); // path may vary
  global.authorID = message.author.id; // or set it as the mentioned user's ID, etc.
  global.mentionedID = message.mentions.users.first.id; // or set it as the mentioned user's ID, etc.




  

  if (!message.channel == null){
      poopego(message);
    }

    if (message.channel == null){
      message.reply("Are you trying to crash me? Jimmybot doesn't work in DMs! Invite me to a server instead!")
      console.log(message.author.username+" just tried to dm me the following: "+message.content)
    }

     function poopego(message) {
     }

      if(botstorage1[message.guild.id] == null){
        botstorage1[message.guild.id] = true
        fs.writeFileSync(__parentDir+'/storage/jimmybot.json', JSON.stringify(botstorage1));
       }
  
       if(botstorage2[message.guild.id] == null){
        botstorage2[message.guild.id] = true
        fs.writeFileSync(__parentDir+'/storage/quarantines.json', JSON.stringify(botstorage2));
       }
  
       if(botstorage3[message.guild.id] == null ){
        botstorage3[message.guild.id] = true
        fs.writeFileSync(__parentDir+'/storage/quarantines.json', JSON.stringify(botstorage3));
       }
  
       if(money[message.author.id] == null){
        money[message.author.id] = 0
        fs.writeFileSync(__parentDir+'/storage/money.json', JSON.stringify(money));
       }
       4
       if(botstorage4[message.author.id] == null ){
        botstorage4[message.author.id] = false
        fs.writeFileSync(__parentDir+'/storage/timeout.json', JSON.stringify(botstorage4));
       }


       if (message.content.startsWith("j!bail") && message.author.bot == false ) {
        if (!client.commands.has('bail')) return;
        try {
          console.log("command has been read")
          client.commands.get('bail').execute(message );
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }

      if (message.content.startsWith("j!gm") && message.author.bot == false) {
          if (!client.commands.has('goodmorning')) return;
          try {
            client.commands.get('goodmorning').execute(message );
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }

        if (message.content.startsWith("j!invite") && message.author.bot == false) {
          if (!client.commands.has('invite')) return;
          try {
            client.commands.get('invite').execute(client, message );
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
        
      
        if (message.content.startsWith("j!gn") && message.author.bot == false ) {
          if (!client.commands.has('goodnight')) return;
          try {
            client.commands.get('goodnight').execute(message );
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }


        
        if (message.content.startsWith("j!catch") && message.author.bot == false  && botstorage3[message.guild.id] == true ) {
          if (!client.commands.has('catch')) return;
          try {
            client.commands.get('catch').execute(message );
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
      
        if (message.content.startsWith("j!bal") && !message.content.includes("j!balance") && message.author.bot == false || message.content.startsWith("j!balance") && message.author.bot == false ) {
          if (!client.commands.has('balance')) return;
          try {
            client.commands.get('balance').execute(message );
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }

        if (message.content.startsWith("j!pay") && message.author.bot == false ) {
          if (!client.commands.has('pay')) return;
          try {
            client.commands.get('pay').execute(message );
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
        
      
        if (message.content.startsWith("j!status") && message.author.bot == false) {
          if (!client.commands.has('status')) return;
          try {
            client.commands.get('status').execute(message );
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
      
        if (message.content.startsWith("j!hi") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('hi')) return;
          try {
            client.commands.get('hi').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("good boy") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('goodboy')) return;
          try {
            client.commands.get('goodboy').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("goodboy") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('goodboy')) return;
          try {
            client.commands.get('goodboy').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("j!good boy") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("j!goodboy") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
      
        if (message.content.startsWith("j!tricks") && message.author.bot == false || message.content.startsWith("j!cmds") && message.author.bot == false || message.content.startsWith("j!commands") && message.author.bot == false) {
          if (!client.commands.has('commandslist')) return;
          try {
            client.commands.get('commandslist').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
        
      
        if (message.content.startsWith("food") && message.content.endsWith("food") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('food')) return;
          try {
            client.commands.get('food').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("j!food") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
        
        if (message.content.startsWith("play") && message.content.endsWith("play") && !message.content.startsWith("-") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('play')) return;
          try {
            client.commands.get('play').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("j!play") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        const dumbem = new Discord.MessageEmbed()
        .setColor('#f0dc66')
        .setTitle('br')
        .setDescription("")
        .setImage('https://media.discordapp.net/attachments/797683414857154560/797683488483704902/image0.jpg')
        .setTimestamp()
        .setFooter('Jimmybot' +version);
      
        if (message.content.includes("dumb") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('dumb')) return;
          try {
            client.commands.get('dumb').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("j!dumb") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('eastereggwarn')) return;
          try {
            client.commands.get('eastereggwarn').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
        
        if (message.content.includes("j!sus") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('sus')) return;
          try {
            client.commands.get('sus').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("j!portrait") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('portrait')) return;
          try {
            client.commands.get('portrait').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("j!sad") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('sad')) return;
          try {
            client.commands.get('sad').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.includes("j!owner") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('owner')) return;
          try {
            client.commands.get('owner').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
        
      
        if (message.content.startsWith("j!talents") && message.content.endsWith("s") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('talents')) return;
          try {
            client.commands.get('talents').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.startsWith("j!talent") && message.content.endsWith("t") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has(talents)) return;
          try {
            client.commands.get(talents).execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.startsWith("!j") && message.author.bot == false && botstorage1[message.guild.id] == true) {
          if (!client.commands.has('wrongformat')) return;
          try {
            client.commands.get('wrongformat').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }

        function nomorecommands(message) {
          setTimeout(function(){ 
          storage4[message.author.id] = true
          fs.writeFileSync(__parentDir+'/storage/timeout.json', JSON.stringify(storage4));
          setTimeout(function(){ 
            storage4[message.author.id] = false
            fs.writeFileSync(__parentDir+'/storage/timeout.json', JSON.stringify(storage4));
          }, ms("30s"));
        }, ms("5"));
        }

        if (message.content.startsWith("j!bounty") && message.author.bot == false && botstorage3[message.guild.id] == true && botstorage4[message.author.id] == false ) { 
          if (!client.commands.has('bounty')) return;
          try {
            client.commands.get('bounty').execute(message , version);
            nomorecommands(message);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }

        if (message.content.startsWith("j!bounty") && message.author.bot == false && botstorage3[message.guild.id] == true && botstorage4[message.author.id] == true ) { 
          try {
            message.reply("There's a 30 second cooldown for this command!")
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }

      
        if (message.content.includes("j!about") && message.author.bot == false && botstorage1[message.guild.id] == true || message.content.includes("j!info") && message.author.bot == false && botstorage1[message.guild.id] == true)  {
          if (!client.commands.has("about")) return;
          try {
            client.commands.get("about").execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        
        
      
        if (message.content.startsWith("j!admin") &&  message.content.endsWith("n") && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR")) {
          if (!client.commands.has('adminwarn')) return;
          try {
            client.commands.get('adminwarn').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.startsWith("j!admin")  && message.content.endsWith("n") && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
      
        if (message.content.startsWith("j!adminpanel")   && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('adminpanel')) return;
          try {
            client.commands.get('adminpanel').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.startsWith("j!adminpanel")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        
      
        if (message.content.startsWith("j!quarantines false")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR")  || message.content.startsWith("j!quarantine false")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('turnqoff')) return;
          try {
            client.commands.get('turnqoff').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.startsWith("j!quarantines false")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine false")  && message.author.bot == false && !  message.member.hasPermission("ADMINISTRATOR")  ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
        
        if (message.content.startsWith("j!quarantines true")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine true")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('turnqon')) return;
          try {
            client.commands.get('turnqon').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.startsWith("j!quarantines true")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine true")  && message.author.bot == false && !  message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }


        if (message.content.startsWith("j!bounties false")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR")  ) {
          if (!client.commands.has('bountiesoff')) return;
          try {
            client.commands.get('bountiesoff').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.startsWith("j!bounties false")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
        
        if (message.content.startsWith("j!bounties true")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR")) {
          if (!client.commands.has('bountieson')) return;
          try {
            client.commands.get('bountieson').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.startsWith("j!bounties true")  && message.author.bot == false &&   !message.member.hasPermission("ADMINISTRATOR")  ) {
          if (!client.commands.has('notanadmin')) return;
          try {
            client.commands.get('notanadmin').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }

        if (message.content.startsWith("j!bounties") && message.content.endsWith("ies") && message.author.bot == false ) {
          if (!client.commands.has('bountystatus')) return;
          try {
            client.commands.get('bountystatus').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
        
        
      
        if (message.content.startsWith("j!quarantine") && message.content.endsWith("ne") && message.author.bot == false || message.content.startsWith("j!quarantines") && message.content.endsWith("es") && message.author.bot == false) {
          if (!client.commands.has('fartstatus')) return;
          try {
            client.commands.get('fartstatus').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        
      
        if (message.content.includes("fart")  && message.author.bot == false && botstorage2[message.guild.id] == true &&   !message.member.hasPermission("ADMINISTRATOR") || message.content.includes("Fart")  && !message.content.includes("status") && message.author.bot == false && botstorage2[message.guild.id] == true && !  message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('quarantine')) return;
          try {
            client.commands.get('quarantine').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('stop dming me fart u poo face');
          }
        }
      
        if (message.content.startsWith("j!suitup") && message.author.bot == false &&  !message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('hazmat')) return;
          try {
            client.commands.get('hazmat').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
        if (message.content.startsWith("j!suitup")  && message.author.bot == false &&  message.member.hasPermission("ADMINISTRATOR") ) {
          if (!client.commands.has('toomanyperms')) return;
          try {
            client.commands.get('toomanyperms').execute(message , version);
          } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
          }
        }
      
     
}