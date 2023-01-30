const { Events, AuditLogEvent, EmbedBuilder, Colors} = require("discord.js");

module.exports = {
    name: Events.MessageDelete,
    once: false,
    async execute(message) {
        const auditLog = await message.client.guilds.cache.get(process.env.GUILD_ID).fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.MessageDelete
        })
        const deletionLog = auditLog.entries.first();
        const { executor, target } = deletionLog;

        // const channel = await message.client.channels.cache.get(process.env.LOG_ID);
        // const today = new Date(Date.now());
        //
        // const embed = new EmbedBuilder()
        //     .setTitle("Message removed")
        //     .setDescription("**Informations:**")
        //     .addFields([
        //         { name: "Author: ", value: message.author.tag + " (" + message.author.id + ")"},
        //         { name: "Deletor: ", value: executor.tag + " (" + executor.id + ")"}
        //     ])
        //     .setColor(Colors.Red)
        //     .setFooter({ "text": "In: " + message.channel.name + " At: " + today.toLocaleTimeString() });

        console.log("Something of " + message.author.tag + " was deleted.");
        // channel.send( { embeds: [embed] });
    }
}