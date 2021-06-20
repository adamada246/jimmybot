//goals: enroll command (creates message you react to to get a dm with info and a role in server), 
//done: finish recoding file system, bounty command, j!invite, j!bail, DON'T LET COMMANDS EXECUTE IF RUN IN DM!!!, changelog command, server blacklist, user blacklist
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
global.version = "Pre-release 7.0";
global.prefix = "j!"
global.date = "6/8/2021"
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

