const Discord = require('discord.js');
const ms = require('ms');



module.exports =  (client) => {
    try{
    console.log('I am ready!'); 
    
    
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
    
    global.shopitemnum = getRandomInt(2)
    global.shopDate = new Date().toLocaleString()
   
    
    
  
 client.guilds.cache.forEach(guild => {
    startupchan = guild.channels.cache.find(channel => channel.id === '856547819800363018')

    if (startupchan){
    startupchan.send("<@743256356533960754>").then( function (message) {
        global.adam = message.mentions.users.first()
        
        const activities_list = [ 
            "j!tricks", 
            "with my dev, "+adam.tag,
            "Build " + version,
            "with my dev, "+adam.tag,
            "j!tricks", 
        ]; // creates an arraylist containing phrases you want your bot to switch through.
        
          setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
        }, 2000); // Runs this every 2 seconds.

        if (client.user.id == 808768146135318595){
        adam.send(`On ${client.guilds.cache.size} Servers, ${client.channels.cache.size} Channels.  List of servers I'm on:`)
        client.guilds.cache.forEach(guild => {
          var memberCount = guild.memberCount
         adam.send("`"+guild.name+"` ("+guild.id+") " + "("+memberCount+").")
        })
        setInterval(() => {
          adam.send(`On ${client.guilds.cache.size} Servers, ${client.channels.cache.size} Channels.  List of servers I'm on:`)
          client.guilds.cache.forEach(guild => {
            var memberCount = guild.memberCount
           adam.send("`"+guild.name+"` ("+guild.id+") " + "("+memberCount+").")
    
          })
        }, ms(`24h`)); 
       
      }
      })    
    
    }

  });

  

    console.log("On "+client.guilds.cache.size+" servers.")
    console.log("On "+client.channels.cache.size+" channels.")
    console.log("Servers I'm on:")

    client.guilds.cache.forEach(guild => {
        var memberCount = guild.memberCount
       console.log("`"+guild.name+"` ("+guild.id+") " + "("+memberCount+").")

      })

     

     

   

}
catch (error){
    console.log(error)
}

}