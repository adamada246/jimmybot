//goals: , changelog command, enroll command (creates message you react to to get a dm with info and a role in server)
//done: finish recoding file system, bounty command, j!invite, j!bail
const fs = require('fs');
const Discord = require('discord.js');
const { callbackify } = require('util');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const config = require("./config.json");
const ms = require('ms');
const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.cooldowns = new Discord.Collection();





// https://discord.com/api/oauth2/authorize?client_id=808768146135318595&permissions=805825655&scope=bot
// https://discord.com/api/oauth2/authorize?client_id=808768146135318595&permissions=8&scope=bot
global.version = " Release 5.0";
global.prefix = "j!"
global.date = "3/15/2021"


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
