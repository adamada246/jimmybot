try{
//goals: jimmy listen command (joins vc)
//done: 
const fs = require('fs');
const Discord = require('discord.js');
const { callbackify } = require('util');
global.client = new Discord.Client();
client.commands = new Discord.Collection();

const config = require("./config.json");
const ms = require('ms');
const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// https://discord.com/api/oauth2/authorize?client_id=808768146135318595&permissions=268445750&scope=bot
// https://discord.com/api/oauth2/authorize?client_id=808768146135318595&permissions=8&scope=bot
global.version = " Release 7.1";
global.prefix = "j!"
global.date = "6/27/2021"
const { MessageButton, MessageActionRow } = require('discord-buttons')
const disbut = require('discord-buttons')(client);


for (const file of commandFile) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]

    client.on(eventName, arg => eventHandler(client, arg));
  })
})

  
client.login(config.BOT_TOKEN);

}
catch (error){
  console.log(error)
}