const Commando = require('discord.js-commando');

class Purge extends Commando.Command {

constructor(client) {

    super(client, {
        name: 'purge',
        group: 'random',
        memberName: 'purge',
        description: "Pour supprimer des messages",
        args: [
            {
                key: 'number',
                prompt: 'Combien de msg ?',
                type: 'string'
            },
            
        ]

    });
}

async run(message, {number =args}) {
    let messagecount = parseInt(number);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
  message.say('For' + number + ' messages !')
}

}

module.exports = Purge;