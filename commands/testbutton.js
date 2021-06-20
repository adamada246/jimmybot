const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons')



  module.exports = {
	name: 'testbutton',
	description: 'ok',
	guildOnly: false,
	execute(message ) {
		const aboutjmem = new Discord.MessageEmbed()
		.setColor('#f0dc66')
		.setTitle('im using this to test buttons')
		.setDescription("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
		.setFooter('so anyway whats ur favorite color');

        const button1 = new MessageButton()
        .setStyle("green")
        .setLabel("im normal, (normal color)")
        .setID("DEVTEST_1_"+message.guild.id+new Date().toLocaleString()+"@"+message.author.id)


        const button2 = new MessageButton()
        .setStyle("grey")
        .setLabel("im boring, grey")
        .setID("DEVTEST_2_"+message.guild.id+new Date().toLocaleString()+"@"+message.author.id)

        const button3 = new MessageButton()
        .setStyle("red")
        .setLabel("I HATE ALL COLORS I WANT TO DESTORY THEM")
        .setID("DEVTEST_3_"+message.guild.id+new Date().toLocaleString()+"@"+message.author.id)

        const button4 = new MessageButton()
        .setStyle("url")
        .setLabel("DONT CLICK ON THIS BUTTON")
        .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")


        const green = new MessageActionRow()
        .addComponent(button1)

        const grey = new MessageActionRow()
        .addComponent(button2)

        const red = new MessageActionRow()
        .addComponent(button3)

        const url = new MessageActionRow()
        .addComponent(button4)


        message.channel.send("test", {
            embed: aboutjmem,
            components: [green, grey, red, url]

        })

        


	},
};