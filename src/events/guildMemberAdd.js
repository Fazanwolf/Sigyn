const { Events } = require("discord.js");

module.exports = {
    name: Events.GuildMemberAdd,
    once: true,
    execute(client) {
        console.log('New User', client.user.tag);
    }
}