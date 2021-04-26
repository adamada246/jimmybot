const Discord = require('discord.js');

module.exports = {
	name: 'biden',
  guildOnly: false,
	description: 'ok',
	execute(message ) {

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }



    const badem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("The Bad Ending")
    .setDescription("[Original Video](https://www.youtube.com/watch?v=DCzJ5jqZAnM)")
    .setImage('https://cdn.discordapp.com/attachments/797682519939088395/827336072110276638/the_bad_ending.jpg')
    .setTimestamp()
    .setFooter('Jimmybot' +version);


    const goodem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("The Good Ending")
    .setDescription("[Original Video](https://www.youtube.com/watch?v=DCzJ5jqZAnM)")
    .setImage('https://cdn.discordapp.com/attachments/797682519939088395/827336217553010718/image0_1.png')
    .setTimestamp()
    .setFooter('Jimmybot' +version);

    const okem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("The Neutral Ending")
    .setDescription("[Original Video](https://www.youtube.com/watch?v=DCzJ5jqZAnM)")
    .setImage('https://cdn.discordapp.com/attachments/797682519939088395/827338565004165160/neatural_ending.jpg')
    .setTimestamp()
    .setFooter('Jimmybot' +version);

    const betrayem = new Discord.MessageEmbed()
    .setColor('#f0dc66')
    .setTitle("The Betrayed Ending")
    .setDescription("[Original Video](https://www.youtube.com/watch?v=DCzJ5jqZAnM)")
    .setImage('https://cdn.discordapp.com/attachments/797682519939088395/827338568300363786/betrayed_ending.jpg')
    .setTimestamp()
    .setFooter('Jimmybot' +version);
  

    result = getRandomInt(3)

    if (result == 0){
        message.channel.send(badem)
    }

    if (result == 1){
        message.channel.send(goodem)
    }

    if (result == 2){
        message.channel.send(okem)
    }

    if (result == 3){
        message.channel.send(betrayem)
    }
	},
};
