
const Discord = require('discord.js');

async function ServerNew(guild) {
  
  if (guild.me.hasPermission( "MANAGE_GUILD" && "MANAGE_ROLES" && "MANAGE_CHANNELS" && "SEND_MESSAGES" && "MANAGE_MESSAGES" || "ADMINISTRATOR")){
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
      .catch(console.error);
    
    guild.roles.create({
      data: {
        name: 'Visiting Quarantine',
        color: '#42ff3b',
      },
    })
      .catch(console.error);
  
  
    guild.channels.create('Jimmybot', { type: 'category' });
    
  
    setTimeout(() => {   
      let Qpeeps = guild.roles.cache.find(role => role.name === "Quarantined");
      let Qvis = guild.roles.cache.find(role => role.name === "Visiting Quarantine");
  
      
  
  
      guild.channels.create('jimmybot', {
        type: 'text',
        permissionOverwrites: [
          {
            id: client.user.id,
            allow: ['VIEW_CHANNEL'],
        },
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
            id: client.user.id,
            allow: ['VIEW_CHANNEL'],
        },
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
          id: client.user.id,
          allow: ['VIEW_CHANNEL'],
      },
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
          id: client.user.id,
          allow: ['VIEW_CHANNEL'],
      },
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
  else{
    try{
      const addedtoserver = new Discord.MessageEmbed()
      .setColor('#f0dc66')
      .setTitle('Thanks for adding me! To get started, type in j!tricks')
      .setDescription("Admins: For the best experience leave the channels and roles created as is. You can move them into a category but do NOT change permissions. For a full list of mod commands, have an admin type in j!admin")
      .setThumbnail('https://cdn.discordapp.com/attachments/797683414857154560/811423274486857748/jimmybotlogo.png')
      .setTimestamp()
      .setFooter('Jimmybot' +version);

      const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    if(channel){
    channel.send(`I'm missing some permissions! Some features like quarantine may not work correctly. Please re-add me with the needed permissions!`);
    channel.send(addedtoserver)
    return
    }
    if(!channel){
      console.log(guild.name+" doesn't have any channels I can type in....")
    }
  }
  catch{
    console.log("Somebody in "+guild.name+" tried to add me with no perms. Why. Just why")
  }
  }


  
}

  
module.exports = (client, guild) => {
try{
    ServerNew(guild);
}
catch (error){
  console.log(error)
}

}