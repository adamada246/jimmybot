const Discord = require('discord.js');
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

module.exports = async (client, message) => {
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
    
    
      
      
    
      if (message.content.startsWith("j!status") && message.author.bot == false && jimmybot == false) {
        if (!client.commands.has('status false')) return;
        try {
          client.commands.get('status false').execute(message );
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.startsWith("j!status") && message.author.bot == false && jimmybot == true) {
        if (!client.commands.has('status true')) return;
        try {
          client.commands.get('status true').execute(message , version);
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
    
    
     
    
      if (message.content.includes("j!about") && message.author.bot == false && jimmybot == true || message.content.includes("j!info") && message.author.bot == false && jimmybot == true)  {
        if (!client.commands.has("about")) return;
        try {
          client.commands.get("about").execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      
      
    
      if (message.content.startsWith("j!admin") &&  message.content.endsWith("n") && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR")) {
        if (!client.commands.has('adminwarn')) return;
        try {
          client.commands.get('adminwarn').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.startsWith("j!admin")  && message.content.endsWith("n") && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR") ) {
        if (!client.commands.has('notanadmin')) return;
        try {
          client.commands.get('notanadmin').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
    
      if (message.content.startsWith("j!adminpanel")   && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR") ) {
        if (!client.commands.has('adminpanel')) return;
        try {
          client.commands.get('adminpanel').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.startsWith("j!adminpanel")  && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR") ) {
        if (!client.commands.has('notanadmin')) return;
        try {
          client.commands.get('notanadmin').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      
    
      if (message.content.startsWith("j!quarantines false")  && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR")  || message.content.startsWith("j!quarantine false")  && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR") ) {
        if (!client.commands.has('turnqoff')) return;
        try {
          client.commands.get('turnqoff').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.startsWith("j!quarantines false")  && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine false")  && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR")  ) {
        if (!client.commands.has('notanadmin')) return;
        try {
          client.commands.get('notanadmin').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
      
      if (message.content.startsWith("j!quarantines true")  && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine true")  && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR") ) {
        if (!client.commands.has('turnqon')) return;
        try {
          client.commands.get('turnqon').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.startsWith("j!quarantines true")  && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine true")  && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR") ) {
        if (!client.commands.has('notanadmin')) return;
        try {
          client.commands.get('notanadmin').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      
      
    
      if (message.content.startsWith("j!fartstatus") && message.author.bot == false && isolations == false) {
        if (!client.commands.has('fartoff')) return;
        try {
          client.commands.get('fartoff').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.startsWith("j!fartstatus") && message.author.bot == false && isolations == true) {
        if (!client.commands.has('farton')) return;
        try {
          client.commands.get('farton').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      
    
      if (message.content.includes("fart")  && !message.content.includes("status") && message.author.bot == false && isolations == true && !message.member.hasPermission("ADMINISTRATOR") || message.content.includes("Fart")  && !message.content.includes("status") && message.author.bot == false && isolations == true && !message.member.hasPermission("ADMINISTRATOR") ) {
        if (!client.commands.has('quarantine')) return;
        try {
          client.commands.get('quarantine').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('stop dming me fart u poo face');
        }
      }
    
      if (message.content.startsWith("j!suitup") && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR") ) {
        if (!client.commands.has('hazmat')) return;
        try {
          client.commands.get('hazmat').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
    
      if (message.content.startsWith("j!suitup")  && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR") ) {
        if (!client.commands.has('toomanyperms')) return;
        try {
          client.commands.get('toomanyperms').execute(message , version);
        } catch (error) {
          console.error(error);
          message.reply('there was an error trying to execute that command!');
        }
      }
}