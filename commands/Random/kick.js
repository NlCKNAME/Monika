const Commando = require('discord.js-commando');

class kick extends Commando.Command {

constructor(client) {

    super(client, {
        name: 'kick',
        group: 'random',
        memberName: 'kick',
        description: 'Supprimer quelq\'\ un du club de littérature :joy:',
        examples: ['>>>- kick @l\'\ utilisateur'],
        args: [
                {
                    key: 'user',
                    prompt: 'Which user do you want to send the DM to?',
                    type: 'user'
                },
                
            ]
    });
}

run(message, {user, raison}) {
    // Kick
    //member.kick(raison).then((member) => {
        // Successmessage
     //   message.channel.send(":wave: " + member.displayName + " à été supprimer :point_right: ");
   // }).catch(() => {
         // Failmessage
  //      message.channel.send("Access Denied");




   // });
     //(user => user.username === 'Bob');

      var membert= message.guild.member(user);
      // Kick
      if (!membert) {
        message.channel.send("Mentionne l'utilisateur que tu veut supprimer après le prefix")
      } 
      else {
         membert.kick().then((membert) => {
          // Successmessage
          message.channel.send(```*>_ delete **" + membert.displayName + "**.chr*```);
      }).catch(() => {
           // Failmessage
          message.channel.send("Access Denied");
      });
    }
}

}

module.exports = kick;


