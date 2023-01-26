const fs = require("fs");
const path = require('path');

function slashCommands(client) {
    const cmds = [];
    const cmdPaths = path.join(__dirname, 'commands');
    const cmdFiles = fs.readdirSync(cmdPaths).filter(file => file.endsWith('.' + InteractionType.Slash + '.js'));

    for (const file of cmdFiles) {
        const filePath = path.join(cmdPaths, file);
        const cmd = require(filePath);
        client[InteractionType.Slash].set(cmd.data.name, cmd);
        cmds.push(cmd.data.toJSON());
    }
    return cmds
}

function interactions(client, type) {
    console.log("Directory: " + __dirname);
    const cmdPaths = path.join(__dirname, 'commands');
    const cmdFiles = fs.readdirSync(cmdPaths).filter(file => file.endsWith('.' + type + '.js'));

    for (const file of cmdFiles) {
        const filePath = path.join(cmdPaths, file);
        const cmd = require(filePath);
        client[type].set(cmd.data.data.custom_id, cmd);
    }
}

function events(client) {
    const loadersPath = path.join(__dirname, "events");
    const loaderFiles = fs.readdirSync(loadersPath).filter((file) => file.endsWith(".js"));

    for (const file of loaderFiles) {
        const filePath = path.join(loadersPath, file);
        const event = require(filePath);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
}

const register = {
    slashCommands,
    interactions,
    events
}

module.exports = register;