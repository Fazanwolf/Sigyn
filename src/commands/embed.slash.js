const { ModalBuilder, ActionRowBuilder, TextInputBuilder, SlashCommandBuilder, TextInputStyle } = require("discord.js");

async function execute(interaction) {
    const titleInput = new TextInputBuilder()
        .setCustomId("titleInput")
        .setLabel("Title")
        .setPlaceholder("Your title")
        .setValue("")
        .setStyle(TextInputStyle.Short)
        .setRequired(true);
    const descriptionInput = new TextInputBuilder()
        .setCustomId("descriptionInput")
        .setLabel("Description")
        .setPlaceholder("Your description")
        .setValue("")
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true);
    const footerInput = new TextInputBuilder().setCustomId("footerInput")
        .setLabel("Footer")
        .setPlaceholder("Your footer")
        .setValue("")
        .setStyle(TextInputStyle.Short)
        .setRequired(true);

    const modal = new ModalBuilder().setCustomId("embed").setTitle("Embed").addComponents(
        new ActionRowBuilder().addComponents(titleInput),
        new ActionRowBuilder().addComponents(descriptionInput),
        new ActionRowBuilder().addComponents(footerInput),
    );
    await interaction.showModal(modal);
}

module.exports = {
    data: new SlashCommandBuilder().setName("embed").setDescription("Create an message embed from a modal"),
    execute,
};