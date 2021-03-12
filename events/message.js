const Discord = require('discord.js');
global.fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


module.exports = async (client, message) => {


  var path = require('path'),
    __parentDir = path.dirname(module.parent.filename);

  global.money = require(__parentDir+'/storage/money.json'); // path may vary
  global.authorID = message.author.id; // or set it as the mentioned user's ID, etc.
  global.mentionedID = message.mentions.users.first.id; // or set it as the mentioned user's ID, etc.

     if (message.content.startsWith("j!gm") && message.author.bot == false) {
        if (!client.commands.has('goodmorning')) return;
        try {
          client.commands.get('goodmorning').execute(message );
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
    
    
      if (message.content.startsWith("j!bal") && message.author.bot == false ) {
        if (!client.commands.has('balance')) return;
        try {
          client.commands.get('balance').execute(message );
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
    
    
      if (message.content.startsWith("j!hi") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('hi')) return;
        try {
          client.commands.get('hi').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("good boy") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('goodboy')) return;
        try {
          client.commands.get('goodboy').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("goodboy") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('goodboy')) return;
        try {
          client.commands.get('goodboy').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("j!good boy") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('eastereggwarn')) return;
        try {
          client.commands.get('eastereggwarn').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("j!goodboy") && message.author.bot == false && jimmybot == true) {
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
      
    
      if (message.content.includes("food") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('food')) return;
        try {
          client.commands.get('food').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("j!food") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('eastereggwarn')) return;
        try {
          client.commands.get('eastereggwarn').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
      
      if (message.content.includes("play") && !message.content.startsWith("-") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('play')) return;
        try {
          client.commands.get('play').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("j!play") && message.author.bot == false && jimmybot == true) {
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
    
      if (message.content.includes("dumb") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('dumb')) return;
        try {
          client.commands.get('dumb').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("j!dumb") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('eastereggwarn')) return;
        try {
          client.commands.get('eastereggwarn').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
      
      if (message.content.includes("j!sus") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('sus')) return;
        try {
          client.commands.get('sus').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("j!portrait") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('portrait')) return;
        try {
          client.commands.get('portrait').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("j!sad") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('sad')) return;
        try {
          client.commands.get('sad').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.includes("j!owner") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('owner')) return;
        try {
          client.commands.get('owner').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
      
    
      if (message.content.startsWith("j!talents") && message.content.endsWith("s") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('talents')) return;
        try {
          client.commands.get('talents').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.startsWith("j!talent") && message.content.endsWith("t") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has(talents)) return;
        try {
          client.commands.get(talents).execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.startsWith("!j") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('wrongformat')) return;
        try {
          client.commands.get('wrongformat').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }

      if (message.content.startsWith("j!bounty") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('bounty')) return;
        try {
          client.commands.get('bounty').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
//bountytarget[message.guild.id]
//.then
     // if (message.content.startsWith("j!claim") && !bountytarget[message.guild.id] == null && jimmybot == true) {
     //   if (!client.commands.has('bountyping')) return;
//if (!bountytarget[message.guild.id]) {
       //   message.reply("you must run j!bounty first!")
      //  } 
//try {
     //     client.commands.get('bountyping').execute(message , version);
      //  } catch (error) {
       //   console.error(error);
      //    message.reply('there was an error trying to execute that command!');
      //  }
    //  }
     
    //  bountytarget[message.guild.id]


      if (message.content.includes("j!about") && message.author.bot == false && jimmybot == true || message.content.includes("j!info") && message.author.bot == false && jimmybot == true)  {
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
    
      if (message.content.startsWith("j!quarantines false")  && message.author.bot == false &&   message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine false")  && message.author.bot == false && !  message.member.hasPermission("ADMINISTRATOR")  ) {
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
    
      
      
    
      if (message.content.startsWith("j!quarantine") && message.content.endsWith("ne") && message.author.bot == false || message.content.startsWith("j!quarantines") && message.content.endsWith("es") && message.author.bot == false) {
        if (!client.commands.has('fartstatus')) return;
        try {
          client.commands.get('fartstatus').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      
    
      if (message.content.includes("fart")  && message.author.bot == false && isolations == true &&   !message.member.hasPermission("ADMINISTRATOR") || message.content.includes("Fart")  && !message.content.includes("status") && message.author.bot == false && isolations == true && !  message.member.hasPermission("ADMINISTRATOR") ) {
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