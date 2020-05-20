const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'random',
            memberName: 'about',
            description: 'Les infos à propos d\'\ un utilisateur',
            examples: ['dm @User Hi there!'],
            args: [
                {
                    key: 'user',
                    prompt: 'Quel utilisateur ?',
                    type: 'user'
                },
            ]
        });    
    }

    run(message, { user}) {

        var event = new Date(message.guild.member(user).joinedTimestamp).toISOString().slice(-24, -14);


        var name = message.guild.member(user).nickname


        var nickname = message.guild.member(user).user.username

        message.channel.send({
            "embed": {
            "color": 16747771,
            "author": {
             "name": message.guild.member(user).user.tag,
             "url": "https://discordapp.com",
             "icon_url": message.guild.member(user).user.displayAvatarURL
           },
             "fields": [
             {
               "name": "**𝘾𝙧𝙚𝙖𝙩𝙞𝙤𝙣**",
               "value": event,
               "inline": true
             },
             {
               "name": "**𝙎𝙩𝙖𝙩𝙪𝙚**",
               "value": ":white_check_mark: " + message.guild.member(user).presence.status,
               "inline": true
             },
             {
               "name": "*𝙄𝘿*",
               "value": message.guild.member(user).id,
               "inline": true
             },
             {
                "name": "*N𝙖𝙢𝙚*",
                "value": message.guild.member(user).user.username,
                "inline": true
              },
            ]
           }
         })
       
                     
     };
    
};