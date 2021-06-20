const Discord = require('discord.js');


const activities_list = [ 
    "j!tricks", 
    "with my dev, @Water Bottle#0246",
    "Build " + version,
    "with my dev, @Water Bottle#0246",
    "j!tricks", 
]; // creates an arraylist containing phrases you want your bot to switch through.


module.exports = (client) => {
    
    console.log('I am ready!'); 
    
    
    
    
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 2000); // Runs this every 2 seconds.
  


    console.log("On "+client.guilds.cache.size+" servers.")
    console.log("On "+client.channels.cache.size+" channels.")
    console.log("Servers I'm on:")
    client.guilds.cache.forEach(guild => {
        var memberCount = guild.memberCount
       console.log("`"+guild.name+"` ("+guild.id+") " + "("+memberCount+").")

      })
}