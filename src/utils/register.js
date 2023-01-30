const fs = require("fs");
const path = require('path');
const InteractionType = require("./InteractionType");
const logger = require("./logger");

function slashCommands(client) {
    const cmds = [];
    const cmdPaths = path.join(process.cwd(), "src", "commands");
    const cmdFiles = fs.readdirSync(cmdPaths).filter(file => file.endsWith('.' + InteractionType.Slash + '.js'));

    logger("register:slashCommands").info("Registering slash commands...");
    for (const file of cmdFiles) {
        const filePath = path.join(cmdPaths, file);
        const cmd = require(filePath);
        client[InteractionType.Slash].set(cmd.data.name, cmd);
        cmds.push(cmd.data.toJSON());
        logger("register:slashCommands").info("- " + cmd.data.name);
    }
    console.log();
    return cmds
}

function interactions(client, type) {
    const cmdPaths = path.join(process.cwd(), "src", "commands");
    const cmdFiles = fs.readdirSync(cmdPaths).filter(file => file.endsWith('.' + type + '.js'));

    logger("register:interactions").info("Registering " + type + " interaction commands...");
    for (const file of cmdFiles) {
        const filePath = path.join(cmdPaths, file);
        const cmd = require(filePath);
        client[type].set(cmd.data.data.custom_id, cmd);
        logger("register:interactions").info("- " + cmd.data.data.custom_id);
    }
    console.log();
}

function events(client) {
    const loadersPath = path.join(process.cwd(), "src", "events");
    const loaderFiles = fs.readdirSync(loadersPath).filter((file) => file.endsWith(".js"));

    logger("register:events").info("Registering events...");
    for (const file of loaderFiles) {
        const filePath = path.join(loadersPath, file);
        const event = require(filePath);
        logger("register:events").info("- " + event.name);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
    console.log();
}

const register = {
    slashCommands,
    interactions,
    events
}

module.exports = register;