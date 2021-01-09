const fs = require('fs');
const Discord = require('discord.js')

const createNewChunk = () => {
    const pathToFile = __dirname + `/../rec/${Date.now()}.pcm`;
    return fs.createWriteStream(pathToFile);
};

exports.enter = function(msg) {
    // const voiceChannel = msg.guild.channels.cache.find(channel => channel.name === channelName);

    // if (!voiceChannel || voiceChannel.type !== 'voice')
    //     return msg.reply(`La channel #${channelName} n'existe pas ou n'est pas un channel vocal.`);
    console.log(`Connection dans un ${msg.member.voice.name} ...`);
    msg.member.voice.channel.join()
        .then(conn => {

            const dispatcher = conn.play(__dirname + '/../son/connect.mp3');
            dispatcher.on('finish', () => { console.log(`Rejoint ${msg.member.voice.name}!\n\nPRET A ENREGISTRER\n`); });

            const receiver = conn.receiver;
            conn.on('speaking', (user, speaking) => {
                if (speaking) {
                    console.log(`${user.username} a commencé à parler`);
                    const audioStream = receiver.createStream(user, { mode: 'pcm' });
                    audioStream.pipe(createNewChunk());
                    audioStream.on('end', () => { console.log(`${user.username} arrêté de parler`); });
                }
            });
        })
        .catch(err => { throw err; });

}

exports.exit = function (msg) {
    // Use optional chaining when we upgrade to Node 14.
    if (
        !(
            msg &&
            msg.guild &&
            msg.guild.voice &&
            msg.guild.voice.channel &&
            msg.guild.voice.connection
        )
    )
        return;

    const { channel: voiceChannel, connection: conn } = msg.guild.voice;
    const dispatcher = conn.play(__dirname + "/../son/disconnect.mp3", { volume: 0.45 });
    dispatcher.on("finish", () => {
        voiceChannel.leave();
        console.log(`\nENREGISTREMENT ARRÊTÉ\n`);
    });
};