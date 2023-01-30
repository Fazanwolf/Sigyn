const { Events } = require("discord.js");

module.exports = {
    name: Events.GuildMemberRemove,
    once: true,
    execute(client) {
        console.log('User ', client.user.tag, ' left the server.');
    }
}