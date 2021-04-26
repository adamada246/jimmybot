const Discord = require("discord.js");

module.exports = {
name: 'invite',
description: 'ok',
guildOnly: true,
execute(client, message ) {
  const dogepic = client.emojis.cache.find(emoji => emoji.name === "dogepic");
  
  const embed = new Discord.MessageEmbed()
    .setColor("#f0dc66")
    .setDescription(" [amogus ](https://www.youtube.com/watch?v=i5zitZZ068k)"+ dogepic.toString() + " Click on [me lon](https://discord.com/api/oauth2/authorize?client_id=808768146135318595&permissions=8&scope=bot) to add jimmybot to your servers!!!!1111!!!!")
  
  message.channel.send(embed);
}
}