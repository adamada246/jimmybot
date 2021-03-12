const Discord = require('discord.js');




  module.exports = {
	name: 'balance',
	description: 'ok',
    
	execute(message ) {

        var path = require('path'),
        moneydir = path.join(__dirname + '/../storage/money.json')
        const money = require(moneydir); // path may vary
        money[authorID] +=2;
        fs.writeFileSync(moneydir, JSON.stringify(money));
        console.log(money[authorID]);
        
        message.channel.send("Thanks for running this command! 2 treats have been added. You currently have "+money[authorID]+" treats!")

    
	},
};

