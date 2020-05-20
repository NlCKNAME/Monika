const { Command } = require('discord.js-commando');
const translate = require('google-translate-api');
const GiphyRandom = require('giphy-random');
 
const giphyRandom = new GiphyRandom({ apiKey: 'tq5yjTUwNgsGjwuRykgAsmk60eA5wiEe' });

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'gun',
            group: 'random',
            memberName: 'gun',
            description: 'Gun Gif because MOTHER RUSSIA !!!',
            examples: ['dm @User Hi there!'],
        });    
    }

    async run(message,) {
        const embed = new Discord.RichEmbed()
         .then(data => console.log(data))
         .catch(e => console.error(e.message))
         .setImage()
        
        //(giphyRandom.get({ tag: 'cat' })
        
    }
    
    
};

