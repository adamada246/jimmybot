const Discord = require('discord.js');
const { callbackify } = require('util');
const client = new Discord.Client();
const ms = require('ms');
let jimmybot = true;
let isolations = true;

// https://discord.com/api/oauth2/authorize?client_id=808768146135318595&permissions=8&scope=bot

let version = "Release 4.01";
let prefix = "j!"
let date = "3/9/2021"


//this will go into  the if message => message section i have on my main bot.js


  async function bannedword(message) {
    let role555 = message.guild.roles.cache.find(r => r.name === "Quarantined");
    
    setTimeout(() => { 
    message.member.roles.add(role555.id);
    }, ms('1s'));
    setTimeout(() => { 
      message.member.roles.remove(role555.id);
    }, ms('30m'));
  }

  async function hazmatsuit(message) {
    let rolepee = message.guild.roles.cache.find(r => r.name === "Visiting Quarantine");
    
    setTimeout(() => { 
    message.member.roles.add(rolepee.id);
    }, ms('1s'));
    setTimeout(() => { 
      message.member.roles.remove(rolepee.id);
    }, ms('5m'));
}

async function ServerNew(guild) {
  
  const addedtoserver = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('Thanks for adding me! To get started, type in j!tricks')
  .setDescription("Admins: For the best experience leave the channels and roles created as is. You can move them into a category but do NOT change permissions. For a full list of mod commands, have an admin type in j!admin")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);
  
  guild.roles.create({
    data: {
      name: 'Quarantined',
      color: '#fcff3b',
    },
  })
    .then(console.log)
    .catch(console.error);
  
  guild.roles.create({
    data: {
      name: 'Visiting Quarantine',
      color: '#42ff3b',
    },
  })
    .then(console.log)
    .catch(console.error);


  guild.channels.create('Jimmybot', { type: 'category' });
  

  setTimeout(() => {   
    let Qpeeps = guild.roles.cache.find(role => role.name === "Quarantined");
    let Qvis = guild.roles.cache.find(role => role.name === "Visiting Quarantine");

    


    guild.channels.create('jimmybot', {
      type: 'text',
      permissionOverwrites: [
        {
          id: guild.id,
          allow: ['VIEW_CHANNEL'],
        },
        {
          id: Qpeeps.id,
          deny: ['VIEW_CHANNEL'],
        },
      ],
    })
  
  
    guild.channels.create('jimmybot-quarantine', {
      type: 'text',
      permissionOverwrites: [
        {
          id: guild.id,
          deny: ['VIEW_CHANNEL'],
        },
        {
          id: Qpeeps.id,
          allow: ['VIEW_CHANNEL'],
        },
        {
          id: Qvis.id,
          allow: ['VIEW_CHANNEL'],
        },
      ],
    })
   
  }, 3000);
  
  
  
 
  setTimeout(() => {   
    let channel1 = guild.channels.cache.find(c => c.name == "jimmybot" && c.type == "text");
    let category1 = guild.channels.cache.find(c => c.name == "Jimmybot" && c.type == "category");
    if (category1 && channel1) channel1.setParent(category1.id);
    else console.error(`One of the channels is missing:\nCategory: ${!!category1}\nChannel: ${!!channel1}`);

    let channel2 = guild.channels.cache.find(c => c.name == "jimmybot-quarantine" && c.type == "text");
    let category2 = guild.channels.cache.find(c => c.name == "Jimmybot" && c.type == "category");
    if (category2 && channel2) channel2.setParent(category2.id);
    else console.error(`One of the channels is missing:\nCategory: ${!!category2}\nChannel: ${!!channel2}`);

    
  }, 6000);

  setTimeout(() => {   
    let channel11 = guild.channels.cache.find(c => c.name == "jimmybot" && c.type == "text");
    channel11.send(addedtoserver)
  }, 8000);

  setTimeout(() => {   
    let origchan = guild.channels.cache.find(c => c.name == "jimmybot" && c.type == "text");
    let lockchan = guild.channels.cache.find(c => c.name == "jimmybot-quarantine" && c.type == "text");
    let Qpeeps = guild.roles.cache.find(role => role.name === "Quarantined");
    let Qvis = guild.roles.cache.find(role => role.name === "Visiting Quarantine");

    origchan.overwritePermissions([
      {
          id: guild.id,
          allow: ['VIEW_CHANNEL'],
      },
      {
          id: Qpeeps.id,
          deny: ['VIEW_CHANNEL'],
      },
    ], 'bc lol' );


    lockchan.overwritePermissions([
      {
          id: guild.id,
          deny: ['VIEW_CHANNEL'],
      },
      {
          id: Qpeeps.id,
          allow: ['VIEW_CHANNEL'],
      },
      {
          id: Qvis.id,
          allow: ['VIEW_CHANNEL'],
      },
    ], 'plz work lol' );

  }, 8900);

}


client.on('guildCreate', guild => {
  
  ServerNew(guild);

})





const activities_list = [ 
  "j!tricks", 
  "with my dev, @Paper Towel#2880",
  "Build " + version,
  "with my dev, @Paper Towel#2880",
  "j!tricks", 
  ]; // creates an arraylist containing phrases you want your bot to switch through.
  

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 2000); // Runs this every 2 seconds.

  if (jimmybot == false) {
    client.user.setStatus('idle')
  }

  if (jimmybot == true) {
    client.user.setStatus('online')
  }

});

client.on("presenceUpdate", function(oldPresence, newPresence){
  
  
  if (member.presence.activity.includes("fart") && isolations == true) {
    var beingquared = message.guild.roles.find(role => role.name === "Quarantined");
    member.addRole(beingquared);

  }
});

client.on('message', message => {
  
  const goodmorning = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('Good morning!')
  .setDescription("Jimmy bot is up! He'll go back to sleep if you run the command j!gn")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("j!gm") && message.author.bot == false) {
    jimmybot = true;
    message.channel.send(goodmorning)
  }
  
  const goodnight = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('Good night!')
  .setDescription("Jimmy bot is sleeping! He'll go wake up if you run the command j!gm")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("j!gn") && message.author.bot == false ) {
    jimmybot = false;
    message.channel.send(goodnight)
  }

  const statustrue = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle("I'm awake!")
  .setDescription("Jimmy bot is is currently awake! To see a list of commands type in j!tricks")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);
  
  const statusfalse = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle("I'm currently sleeping!")
  .setDescription("Jimmybot is sleeping! To run most command you need to wake him up with j!gm")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("j!status") && message.author.bot == false && jimmybot == false) {
    jimmybot = false;
    message.channel.send(statusfalse)
  }

  if (message.content.startsWith("j!status") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(statustrue)
  }

  if (message.content.startsWith("j!hi") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.reply("i jimmy hello");
  }

  const goodboy = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('yes i good boy')
  .setDescription("")
  .setImage('https://media.discordapp.net/attachments/797683414857154560/797683508214366308/image0.png?width=507&height=676')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.includes("good boy") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(goodboy)
  }

  if (message.content.includes("goodboy") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(goodboy)
  }

  if (message.content.includes("j!good boy") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.reply("This command is an easter egg! Easter eggs don't have j! so just put the word in chat");
  }

  if (message.content.includes("j!goodboy") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.reply("This command is an easter egg! Easter eggs don't have j! so just put the word in chat");
  }

  const commands1 = new Discord.MessageEmbed()
	.setColor('#f0dc66')
	.setTitle('Jimmybot Commands')
	.setDescription('All commands (except easter eggs) follow the format of j!command')
	.setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
	.addFields(
		{ name: 'j!tricks', value: 'displays a list of all commands', inline: true },
    { name: 'j!admin', value: 'brings up a list of admin commands (only runnable by admins)', inline: true },
		{ name: 'j!status', value: 'displays if Jimmybot is on or off', inline: true },
    { name: 'j!fartstatus', value: 'displays if Jimmybot quarantines are being given', inline: true },
    { name: 'j!gm', value: 'turns on jimmybot', ninline: true },
    { name: 'j!gn', value: 'turns off jimmybot', inline: true },
    { name: 'j!hi', value: 'jimmy says hello', inline: true },
    { name: 'j!sus', value: ' a reference to the popular hit video game amogus!!111!!1', inline: true },
    { name: 'j!portrait', value: 'displays a portrait of jimmy', inline: true },
    { name: 'j!sad', value: ' makes jimmy sad :(', inline: true },
    { name: 'j!suitup', value: 'makes you temporarily put on a hazmat suit to visit the quarantine', inline: true },
    { name: 'j!owner', value: 'displays the creator of jimmybot', inline: true },
    { name: 'j!talent', value: "displays jimmy's secret talent", inline: true },
    { name: 'j!about', value: 'displays information about jimmybot', inline: true },
    { name: 'fart', value: 'A risky thing to say if quarantines are on', inline: true },
    { name: 'food', value: 'Easter egg!', inline: true },
    { name: 'play', value: 'Easter egg!', inline: true },
    { name: 'dumb', value: 'Easter egg!', inline: true },
    { name: 'good boy', value: 'Easter egg!', inline: true },
	)
	.setTimestamp()
	.setFooter('Jimmybot' +version);


  if (message.content.startsWith("j!tricks") && message.author.bot == false || message.content.startsWith("j!cmds") && message.author.bot == false || message.content.startsWith("j!commands") && message.author.bot == false) {
    message.channel.send(commands1)
  }
  
  const foodem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('give me the food now')
  .setDescription("")
  .setImage('https://media.discordapp.net/attachments/797683414857154560/803775453105356820/5a7f01ee-6caf-495d-a16d-ff5218323579.JPG?width=507&height=676')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.includes("food") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(foodem)
  }

  if (message.content.includes("j!food") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.reply("This command is an easter egg! Easter eggs don't have j! so just put the word in chat");
  }
  const playem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('ok play')
  .setDescription("")
  .setImage('https://media.discordapp.net/attachments/797683414857154560/803775452820537364/2acad3f4-723b-47db-ae4e-af1c616d4646.JPG?width=507&height=676')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.includes("play") && !message.content.startsWith("-") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(playem)
  }

  if (message.content.includes("j!play") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.reply("This command is an easter egg! Easter eggs don't have j! so just put the word in chat");
  }
  const dumbem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('br')
  .setDescription("")
  .setImage('https://media.discordapp.net/attachments/797683414857154560/797683488483704902/image0.jpg')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.includes("dumb") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(dumbem)
  }

  if (message.content.includes("j!dumb") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.reply("This command is an easter egg! Easter eggs don't have j! so just put the word in chat");
  }
  const susem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('amogus')
  .setDescription("")
  .setImage('https://media.discordapp.net/attachments/797683414857154560/809623350288187423/jimmongus.png?width=533&height=676')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.includes("j!sus") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(susem)
  }
  const portraitem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('')
  .setDescription("")
  .setImage('https://media.discordapp.net/attachments/797683414857154560/809613572380426240/IMG_0846.jpg?width=507&height=676')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.includes("j!portrait") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(portraitem)
  }
  const sadem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('i sad :(')
  .setDescription("")
  .setImage('https://media.discordapp.net/attachments/797683414857154560/809613303382409247/IMG_0872.jpg?width=507&height=676')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.includes("j!sad") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(sadem)
  }
  const ownerem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('heres my owner :dog:')
  .setDescription("@Paper Towel#2880")
  .setImage('')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.includes("j!owner") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(ownerem)
  }
  const talentsem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('yes i have talents')
  .setDescription("i can float")
  .setImage('https://media.discordapp.net/attachments/797683414857154560/797683459380084746/image0.jpg?width=404&height=675')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("j!talents") && message.content.endsWith("s") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(talentsem)
  }

  if (message.content.startsWith("j!talent") && message.content.endsWith("t") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(talentsem)
  }

  const wrongformatem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('Hey!')
  .setDescription("this is awkward but all jimmybot commands follow the format of j!command")
  .setImage('')
  .setTimestamp()
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("!j") && message.author.bot == false && jimmybot == true) {
    jimmybot = true;
    message.channel.send(wrongformatem)
  }


  const aboutjmem = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('About Jimmybot')
  .setDescription("Build " +version+ ", "+date+", developed by @Paper Towel#2880")
  .setImage('')
  .setTimestamp()
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setFooter('Jimmybot' +version);

  if (message.content.includes("j!about") && message.author.bot == false && jimmybot == true || message.content.includes("j!info") && message.author.bot == false && jimmybot == true)  {
    jimmybot = true;
    message.channel.send(aboutjmem)
  }

  const adminwarn = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('Warning')
  .setDescription("The admin panel may contain sensetive information, confirm you are in a staff channel and continue by typing in j!adminpanel")
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  const notanadmin = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle("Hey! You can't do that")
  .setDescription("You must have Administrator permissions in order to run that commmand.")
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("j!admin") && message.content.endsWith("n") && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(adminwarn)
  }

  if (message.content.startsWith("j!admin") && message.content.endsWith("n") && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(notanadmin)
  }

  const adminpanel = new Discord.MessageEmbed()
	.setColor('#f0dc66')
	.setTitle('Jimmybot admin panel')
	.setDescription('A list of all commands for use by server admins')
	.setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
	.addFields(
		{ name: 'j!quarantines (true/false)', value: "turns on or off Jimmybot's quarantine feature", inline: true },
    { name: 'j!fartstatus', value: "displays if Jimmybot's quarantine feature is currently on/off", inline: true },
	)
	.setTimestamp()
	.setFooter('Jimmybot' +version);


  if (message.content.startsWith("j!adminpanel") && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(adminpanel)
  }

  if (message.content.startsWith("j!adminpanel") && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(notanadmin)
  }

  const isofalse = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('Epidemic over')
  .setDescription("Jimmybot will no longer quarantine server members")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("j!quarantines false") && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine false") && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR")) {
    isolations = false;
    message.channel.send(isofalse)
  }

  if (message.content.startsWith("j!quarantines false") && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine false") && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(notanadmin)
  }
  
  const isotrue = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle('Quarantines will now be issued!')
  .setDescription("Server members will now be quarantined if they are suspected of having fart syndrome")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("j!quarantines true") && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine true") && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR")) {
    isolations = true;
    message.channel.send(isotrue)
  }

  if (message.content.startsWith("j!quarantines true") && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR") || message.content.startsWith("j!quarantine true") && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(notanadmin)
  }

  const quarson = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle("Quarantines are being initiated!")
  .setDescription("Server members can be quarantined for being suspected of having fart syndrome.")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);
  
  const quarsoff = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle("Quarantines are not needed!")
  .setDescription("Server members are not being issued quarantines")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("j!fartstatus") && message.author.bot == false && isolations == false) {
    message.channel.send(quarsoff)
  }

  if (message.content.startsWith("j!fartstatus") && message.author.bot == false && isolations == true) {
    message.channel.send(quarson)
  }

  const publicquarantined = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle("☣️ "+message.author.username+" has been quarantined! ☣️")
  .setDescription("Judging by the message sent: '"+message.content+ "' we suspect they may have fart syndrome. They cannot use #jimmybot for 30 minutes, to have a friend come over a non-quarantined user can use the command j!suitup")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/818234308157505606/jimmybothazmat.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);


  const dmquarantined = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle("☣️ You've been quarantined! ☣️")
  .setDescription("Judging by your message: '"+message.content+ "' we suspect you may have fart syndrome. You cannot use #jimmybot for 30 minutes, to have a friend come over they can use the command j!suitup")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/818234308157505606/jimmybothazmat.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.includes("fart") && !message.content.includes("status") && message.author.bot == false && isolations == true && !message.member.hasPermission("ADMINISTRATOR")|| message.content.includes("Fart") && !message.content.includes("status") && message.author.bot == false && isolations == true && !message.member.hasPermission("ADMINISTRATOR")) {
    bannedword(message);
    message.channel.send(publicquarantined)
    message.author.send(dmquarantined);
  }
  
  const toomanyperms = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle("Hey! There's no need to do that")
  .setDescription("Users with the Administrator permission can always see both channels at all times.")
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  const msgsuiton = new Discord.MessageEmbed()
  .setColor('#f0dc66')
  .setTitle(message.author.username+" been haz-matted!")
  .setDescription("You put on a hazmat suit that lasts 5 minutes! During that time you can visit those in quarantine!")
  .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/818234308157505606/jimmybothazmat.png')
  .setTimestamp()
  .setFooter('Jimmybot' +version);

  if (message.content.startsWith("j!suitup") && message.author.bot == false && !message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(msgsuiton)
    hazmatsuit(message);
  }

  if (message.content.startsWith("j!suitup") && message.author.bot == false && message.member.hasPermission("ADMINISTRATOR")) {
    message.author.send(toomanyperms)
  }

  


 });



client.on('ready', () => {
  console.log('I am ready!'); 
});


client.login('ODA4NzY4MTQ2MTM1MzE4NTk1.YCLWCA.fU15J1A3NimIbTaacj49rpkQpwE');