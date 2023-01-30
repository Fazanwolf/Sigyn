const { Events, ActivityType } = require("discord.js");
const logger = require("../utils/logger");

module.exports = {
    name: Events.ClientReady,
    once: true,
    /** Events.ClientReady
     * Set the bot status, activity and say when the bot is ready.
     * ActivityType: Playing, Streaming, Listening, Watching, Competing
     * Status: dnd, online, idle, invisible
     * @param {Client} client
     */
    execute(client) {
        client.user.setPresence({
            activities: [
                { name: "You.", type: ActivityType.Competing },
                // { name: "Nobody come closer of you.", type: ActivityType.Watching }
            ],
            status: "dnd"
        })
        logger("events/ready:execute").info("BOT (" + client.user.tag + ") STATUS: READY\n");
    }
}