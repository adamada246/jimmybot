const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons')
const disbut = require('discord-buttons')(client);


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

        




client.on('clickButton', async (button) =>{
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
    if (button.clicker.user.id && button.clicker.user.id == message.author.id){
    
      button.reply.send(button.clicker.user.toString() +", why bro ")
    }
    else{
  

      button.reply.send(button.clicker.user.toString() +", ur not the author! the user that triggered this message is: "+message.author.tag)
    }
    
  }
  if(!button.id){
    // this is a URL button, the action has alreayd been taken and in this case i dont want to do anything
  }

});
	},
};