const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

function execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId("click-me").setLabel("Press me").setStyle(ButtonStyle.Danger)
    );

    return interaction.reply({
        content: `A button that you must click.`,
        components: [row],
        ephemeral: true,
    });
}

module.exports = {
    data: new SlashCommandBuilder().setName("click-me").setDescription("A button that you must click"),
    execute,
};