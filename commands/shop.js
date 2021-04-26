const Discord = require('discord.js');
const ms = require('ms');
path = require('path'),
__parentDir = path.dirname(module.parent.filename);
money = require(__parentDir+'/storage/money.json'); // path may vary
shop = require(__parentDir+'/storage/shop.json'); // path may vary
prefix = require(__parentDir+'/storage/prefix.json'); // path may vary

  module.exports = {
	name: 'bail',
  guildOnly: true,
	description: 'ok',
	execute(message ) {

if(message.content.endsWith("shop")){
        if (!shop[message.guild.id] || shop[message.guild.id] == null){
            const shopempty = new Discord.MessageEmbed()
            .setColor('#f0dc66')
            .setTitle(message.server.name+"'s Shop!")
            .setDescription("Oh no! THis server's shop is empty! Tell an admin to manage the shop using `j!shop admin`")
            .setThumbnail(message.guild.iconURL())
        }
        else{
        const args = shop[message.guild.id].split(/,+/g);

        
        item1 =  message.guild.roles.cache.get(args[0])
        

        if (args[1]){
             
             item2 = message.guild.roles.cache.get(args[1])
            if (args[2]){
              item3 = message.guild.roles.cache.get(args[2])
              if (args[3]){
                item4 = message.guild.roles.cache.get(args[3])
                if (args[4]){
                  item5 = message.guild.roles.cache.get(args[4])
                  const shop5item = new Discord.MessageEmbed()
                  .setColor('#f0dc66')
                  .setTitle(message.server.name+"'s Shop!")
                  .setDescription("To buy an Item use `j!shop buy rolenum`")
                  .setThumbnail(message.guild.iconURL())
                  .addFields(
                    { name: 'Role 1', value: item1.name, inline: true },
                    { name: 'Role 2', value: item2.name, inline: true },
                    { name: 'Role 3', value: item3.name, inline: true },
                    { name: 'Role 4', value: item4.name, inline: true },
                    { name: 'Role 4', value: item5.name, inline: true },
                  )
                  .setFooter("Admins: Use `j!shop admin` to manage the shop");
                  
                  message.channel.send(shop5item)
                }
                else{
                  const shop4item = new Discord.MessageEmbed()
                  .setColor('#f0dc66')
                  .setTitle(message.server.name+"'s Shop!")
                  .setDescription("To buy an Item use `j!shop buy rolenum`")
                  .setThumbnail(message.guild.iconURL())
                  .addFields(
                    { name: 'Role 1', value: item1.name, inline: true },
                    { name: 'Role 2', value: item2.name, inline: true },
                    { name: 'Role 3', value: item3.name, inline: true },
                    { name: 'Role 4', value: item4.name, inline: true },
                  )
                  .setFooter("Admins: Use `j!shop admin` to manage the shop");
                  
                  message.channel.send(shop4item)
                  }
    }
              else{
              const shop3item = new Discord.MessageEmbed()
              .setColor('#f0dc66')
              .setTitle(message.server.name+"'s Shop!")
              .setDescription("To buy an Item use `j!shop buy rolenum`")
              .setThumbnail(message.guild.iconURL())
              .addFields(
                { name: 'Role 1', value: item1.name, inline: true },
                { name: 'Role 2', value: item2.name, inline: true },
                { name: 'Role 3', value: item3.name, inline: true },
              )
              .setFooter("Admins: Use `j!shop admin` to manage the shop");
              
              message.channel.send(shop3item)
              }
            }
            else{
              const shop2item = new Discord.MessageEmbed()
              .setColor('#f0dc66')
              .setTitle(message.server.name+"'s Shop!")
              .setDescription("To buy an Item use `j!shop buy rolenum`")
              .setThumbnail(message.guild.iconURL())
              .addFields(
                { name: 'Role 1', value: item1.name, inline: true },
                { name: 'Role 2', value: item2.name, inline: true },
              )
              .setFooter("Admins: Use `j!shop admin` to manage the shop");
              
              message.channel.send(shop2item)
            }
        }
        else{
          const shop1item = new Discord.MessageEmbed()
          .setColor('#f0dc66')
          .setTitle(message.server.name+"'s Shop!")
          .setDescription("To buy an Item use `j!shop buy rolenum`")
          .setThumbnail(message.guild.iconURL())
          .addFields(
            { name: 'Role 1', value: item1.name, inline: true },
      
          )
          .setFooter("Admins: Use `j!shop admin` to manage the shop");
          }

        message.channel.send(shop1item)

        }
      }


        

    
	},
};