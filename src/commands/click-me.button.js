const { ButtonBuilder, ButtonStyle } = require("discord.js");

function execute(interaction) {
    return interaction.reply({
        content: `*It's a trap!*`,
        ephemeral: true,
    });
}

module.exports = {
    data: new ButtonBuilder().setCustomId("click-me").setLabel("Press me").setStyle(ButtonStyle.Danger),
    execute,
};