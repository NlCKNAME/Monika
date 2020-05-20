const { Command } = require('discord.js-commando');
const translate = require('google-translate-api');
// Require with custom API key
//var Giphy = require('giphy-api')('tq5yjTUwNgsGjwuRykgAsmk60eA5wiEe');
const termImg = require('term-img');
const http = require('http');
var GphApiClient = require('giphy-js-sdk-core');
client = GphApiClient("tq5yjTUwNgsGjwuRykgAsmk60eA5wiEe");
const giph = require('giph');
keywords = 'fun' ;

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
        name: 'fun',
        group: 'random',
        memberName: 'fun',
        description: 'Generate random fun gif!',
        examples: ['dm @User Hi there!'],
    });    
}


    
async run(message) {
    giph(keywords)
     .then(img => {
    console.log(img)
    message.reply(img.image_url)
     })
     .catch(err => {
    console.error(err)
     })
    
}

};


