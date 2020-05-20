const { CommandoClient } = require('discord.js-commando');
const token = ('MzkwNjExMjQ4NzM3MTU3MTU1.DeHYIw.Oo0l-16dLveKoJ4Hs6FhJQW_8KU');

const path = require('path');

const client = new CommandoClient({
    commandPrefix: '!',
    unknownCommandResponse: false,
    owner: '303293576211857409',
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['random', 'Random']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setActivity('game');
});

client.login('MzkwNjExMjQ4NzM3MTU3MTU1.DeHYIw.Oo0l-16dLveKoJ4Hs6FhJQW_8KU');



//----------------------------------------COMMANDS----------------------------------------//
//----------------------------------------------------------------------------------------//
