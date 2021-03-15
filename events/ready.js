const Discord = require('discord.js');


const activities_list = [ 
    "j!tricks", 
    "with my dev, @Paper Towel#2880",
    "Build " + version,
    "with my dev, @Paper Towel#2880",
    "j!tricks", 
]; // creates an arraylist containing phrases you want your bot to switch through.


module.exports = (client, msg) => {
    
    console.log('I am ready!'); 
    
    
    
    
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 2000); // Runs this every 2 seconds.
  


}