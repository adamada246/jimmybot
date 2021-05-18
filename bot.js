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
global.version = " Release 6.0";
global.prefix = "j!"
global.date = "5/4/2021"



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


const http = require("http")
const express = require('express'); // make sure to install express from npm
const app = express();
app.use(express.json({extended: false}))
app.post("/dblwebhook", async (req, res) => { // make sure you put as http://your-server-name/dblwebhook
  if(req.headers.authorization) {
    if(req.headers.authorization === mewhenthepoop09) { // replace webhook_secret with your webhook secret (the one you put in your application)
      res.send({status: 200});
      console.log(req.body.id) // logs the user id who voted
    } else {
      res.send({status: 401, error: 'The auth received does not match the one in your config file.'})
    }
  } else {
    res.send({status: 403, error: 'There was no auth header in the webhook'})
  }
})
http.createServer(app).listen(80); // or use another port