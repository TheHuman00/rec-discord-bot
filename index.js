const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const commands = require(`./bin/commands`);

client.on('message', msg => {
    if (msg.content.startsWith(config.PREFIX)) {
        const commandBody = msg.content.substring(config.PREFIX.length).split(' ');
        const channelName = commandBody[1];

        if (commandBody[0] === ('enter')) commands.enter(msg);
        if (commandBody[0] === ('join')) commands.enter(msg);
        if (commandBody[0] === ('rejoindre')) commands.enter(msg);
        if (commandBody[0] === ('go')) commands.enter(msg);

        if (commandBody[0] === ('exit')) commands.exit(msg);
        if (commandBody[0] === ('quitter')) commands.exit(msg);µ
        if (commandBody[0] === ('quitte')) commands.exit(msg);
        if (commandBody[0] === ('quit')) commands.exit(msg);
        if (commandBody[0] === ('leave')) commands.exit(msg);

    }
});

client.login(config.BOT_TOKEN);

client.on('ready', () => {
    console.log(`\nEn ligne !\n`);
});