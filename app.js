var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});
server.listen(process.env.PORT);

const { CommandoClient, MessageEmbed } = require('discord.js-commando');
const path = require('path');
const client = new CommandoClient({
    commandPrefix: '>_',
    unknownCommandResponse: false,
    owner: 'ID_OWNER',
    disableEveryone: true
});
const translate = require('google-translate-api');
const Discord = require('discord.js');
const Sound = require('ffmpeg-binaries');
const video = ('https://www.youtube.com/watch?v=JMlyKto9MpQ');
const ytdl = require('ytdl-core');
const {YTSearcher} = require('ytsearcher');
const yi = require('youtube-playlist-info');
const PACKAGE = require('./package.json');
const Music = require('discord.js-musicbot-addon');
var ytAudioQueue = [];

const cara = {
    a: "b",
    b: "a", 
  };


Music.start(client, {
  youtubeKey: 'ID_CLIENT'
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
    client.user.setActivity('vec du Python');
});

client.login('ID_BOT');

require('events').EventEmitter.defaultMaxListeners = 20;

var xvent = 0;

//-----------------------------------------COMMANDS PLAY WORK-----------------------------------//
client.on('redy', ready => { 

if( xvent = 0 ) {

var temps = Math.floor(Math.random() * (30000 - 2000 +1)) + 1;
   
client.on('message', message => {
  const russia = ['russie','Russia',"Russie","russia"]
  if( russia.some(word => message.content.includes(word)) ) {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
      .then(connection => { // Connection is an instance of VoiceConnection   
      const dispatcher = connection.playFile("/data/app/music/russie.mp3");
            dispatcher.on('end', () => {
                message.member.voiceChannel.leave();
                message.channel.send("Cyka Blyat");
            }
            );
          }
      );
        }
      }
    });
client.on('message', message => {
  const undert = ['undertale',"Undertale"]
  if( undert.some(word => message.content.includes(word)) ) {
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
   .then(connection => { // Connection is an instance of VoiceConnection
    const dispatcher = connection.playFile("/data/app/music/undertale.mp3");
          dispatcher.on('end', () => {
              message.member.voiceChannel.leave();
              message.channel.send("This is all just a bad dream... ");
              }
              );
            }
        );
          }
        }
      });

client.on('message', message => {

  const sty = [ "Nop, pas d'otaku ici......:rage: ",
                  'Arrête avec ça.....',
                  'Non, non, non et non !',
                  "Ce n'est pas en accord avec les règles !",
      ];

  const swearWords = ["XD", "Xd", "xD", "xd"];
  
  const nats = ["Natsuki stop !",
  "Natsuki je t'ai déjà dit ! Pas de ça ici !",
  "Qu'est ce qu'on avait dit Natsuki ? :rage:",
  "Je vais finir par te supprimer Natsuki !"
  ];

    if( swearWords.some(word => message.content.includes(word)) ) {
      if(message.author.id === "476344133972262928") {
        var oulah = [Math.floor((Math.random() * nats.length) + 0)]
        message.channel.send(nats[oulah]);

      }else {  
      var result = Math.floor(Math.random() * (5 - 1 +1)) + 1;
      if(result === 1 ) {
      message.delete()
      }else{ 
        var oula = Math.floor(Math.random() * (10 - 1 +1)) + 1;
        if (oula === 1)
        var oulap = [Math.floor((Math.random() * sty.length) + 0)]
        {message.channel.send(sty[oulap])}
      }
      }
    }
});
  

client.on('message', message => {
      // Voice only works in guilds, if the message does not come from a guild,
     // we ignore it
     if (!message.guild) return;
      const pianoj = ["joue du piano","Joue du piano"]
      if( pianoj.some(word => message.content.includes(word)) ) {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voiceChannel) {
        var hunter = Math.floor(Math.random() * (100 - 1 +1)) + 1;
        if (hunter === 1) {
          message.channel.send(
            "Let's scream", {files: ["https://i.ytimg.com/vi/1xJwr2bSKvk/maxresdefault.jpg"]}
            );
          message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const dispatcher = connection.playFile("/data/app/music/hunter.mp3");
            dispatcher.on('end', () => {
                message.member.voiceChannel.leave();
                message.channel.send("hihi <3")
             // The song has finished
           });
          })
        }else{

        const imagep = ["http://pm1.narvii.com/6721/d8e804fe3cbd3b3e1f4f675af7fb5e18b9bb9f63_00.jpg",
                       "https://img00.deviantart.net/7987/i/2018/026/0/9/monika_s_piano_by_yumesketch-dc1adnh.png",
                       "https://i.pinimg.com/originals/e3/bc/08/e3bc0873fd374a4a829947897e2ab7af.jpg",
                       "https://i.redd.it/uvy3nwu85to01.png",
                       "https://static.zerochan.net/Monika.%28Doki.Doki.Literature.Club%21%29.full.2310817.jpg"];
        const textp= ["D'accord jouons du piano......:musical_note:  ",
                      "J'avais justement envie de m'entrainer au piano !"];
        const finp = ["Alors, c'était comment ? ",
                     "As-tu aimé ma musique?"];
        var finmess = Math.floor(Math.random() * finp.length) + 0
        var piano = Math.floor(Math.random() * imagep.length) + 0
        var messpi = Math.floor(Math.random() * textp.length) + 0
        message.channel.send(
          textp[messpi], {files: [imagep[piano]]}
          );
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            const musicp = ["/data/app/music/ddlc.mp3","/data/app/music/ddlc1.mp3","/data/app/music/ddlc2.mp3"];
            var pian = Math.floor(Math.random() * musicp.length) + 0
            const dispatcher = connection.playFile(musicp[pian]);
            dispatcher.on('end', () => {
                message.member.voiceChannel.leave();
                message.channel.send(finp[finmess])
             // The song has finished
           });
          })
          .catch(console.log);
        }
      } else {
        message.reply('Rejoins un channel vocal pour pouvoir écouter ma mélodie !');
    }
  }
});



client.on('message', message => {
        
  //if (message.content.includes("monika")) { //Si le message contient le mot Monika
  const monikastp = ["monika", "Monika"]
    if( monikastp.some(word => message.content.includes(word)) ) {
    if (message.author.id === "476183841074184194") {
      const reponsesay = ["Qu'y a-t-il Sayori ?", "Ca ne va pas Sayori ? Je peux faire quelque chose pour toi ?", "Allons parler en privé.", "Oui ?", "Que se passe-t-il ?", "Je peux faire quelque chose pour toi ?", "Je suis occupée Sayori !"]
      var reponsesayo =  Math.floor(Math.random() * reponsesay.length) + 0
      setTimeout(function(){
        message.channel.send(reponsesay[reponsesayo])
      }, temps) 
    }else{
    const parle = ['On parle de moi ?', "Quelqu'un m'a parlé ?","Oui ?" ];
    var moi = Math.floor(Math.random() * parle.length) + 0
    setTimeout(function(){  
    message.channel.send(parle[moi])
  }, temps) }
}});

client.on('message', message => {
  if (message.content.includes("J'aimerai te parler de")) {
    if (message.author.id === "476183841074184194") {
      const reponsesay = ["Allons parler de ca en privé, il faudrait éviter de brusquer quelqu'un ici."];
      setTimeout(function(){
      message.channel.send(reponsesay)
    }, temps)}}});

client.on('message', message => {
  if (message.content.includes("Je me pose des questions sur la vie, aide moi s'il te plait.")) {
    if (message.author.id === "476183841074184194") {
      const reponsesay = ["**Je** contrôle ta vie."];
      setTimeout(function(){
      message.channel.send(reponsesay).then((msg)=>{
        setTimeout(function(){
        msg.edit('Intéressant, dis moi tout ça en privé.');
        }, 250)});
      }, temps)}
    }});

client.on('message', message => {
  if (message.content.includes("Non rien hihi")) {
    if (message.author.id === "476183841074184194") {
      const reponsesay = [">_deleting Sayori.chr"];
      setTimeout(function(){
      message.channel.send(reponsesay).then((msg)=>{
        setTimeout(function(){
        msg.edit('>_deleting Sayori.chr.').then((msg)=>{
          setTimeout(function(){
          msg.edit('>_deleting Sayori.chr..').then((msg)=>{
            setTimeout(function(){
            msg.edit('>_deleting Sayori.chr...').then((msg)=>{
              setTimeout(function(){
              msg.edit('>_Canceled').then((msg)=>{
                setTimeout(function(){
                msg.edit('Connasse :(')
                }, 250)})
              }, 250)})
            }, 250)})
          }, 250)})
        }, 250)});
      }, temps)}}});


client.on('message', message => {
        
  //if (message.content.includes("monika")) { //Si le message contient le mot Monika
  if (message.content.includes("monika2")) {
      message.channel.send('𝓞𝓷 𝓹𝓪𝓻𝓵𝓮 𝓭𝓮 𝓶𝓸𝓲 ? :heart_eyes:')
      message.channel.send("test " + message.author.presence.activity )
      message.channel.send("test " + client.user )
      message.channel.send("test " + message.author.createdTimestamp )
      message.channel.send("test " + client.owners )
      message.channel.send("test " + message.guild.member(h).permissions )
      message.channel.send("test " + h.createdTimestamp )
      message.channel.send("test " + message.guild.members.get(h) )
      message.channel.send("test " + h.setVoiceChannel("447410965428830209"))
       .catch(console.error);
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("bonjour")
        .addField("Full name", message.author.username)
        .addField("create", message.author.createdAt)
      message.channel.sendEmbed(embed);
 }
});





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////[ROLES PARAMETER END]////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("ready", () => {

  var t=client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club')
  

  if (!t) {
    client.guilds.get("352174496427278336").createRole({
      
        name: 'Member Of The Club',
        hoist: true,
        mentionable: false,
      
    });
  }else {
    
  }
});


client.on("ready", () => {

  var hj=0;
  if (!client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club')) {
    
  }else {
  for (hj=0; hj<999; hj++) {
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#f3caf9");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#f1b6f9");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#eda5f7");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#f191ff");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#c262d1");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#aa54b7");
  
    }
  }
});

client.on("roleCreate", () => {

  var hj=0;
  var yu=client.guilds.get("352174496427278336").members.find('id', '464898820401004545')
  const colo = ["#f3caf9", "#f1b6f9", "#eda5f7", "#c262d1", "#aa54b7"];

  if (yu.roles.find('name', 'Member Of The Club')) {
    console.log(`rgdgddgdgdr`)
  }else {

  yu.addRole(client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club'))

  for (hj=0; hj<999; hj++) {
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#f3caf9");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#f1b6f9");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#eda5f7");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#f191ff");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#c262d1");
    client.guilds.get("352174496427278336").roles.find('name', 'Member Of The Club').setColor("#aa54b7");
    }
  }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////[ROLES PARAMETER END]////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}else{

  client.on('message', message => {
    if (message.content === 'version') {
      message.channel.send('XVENT ACTIF')    
    }
  })
}

})


