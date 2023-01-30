const { Events } = require("discord.js");
const InteractionType = require("../utils/InteractionType");

function execute(interaction, type, target) {
    const command = interaction.client[type].get(target);
    try {
        command.execute(interaction);
    } catch (e) {
        console.error(e);
        interaction.reply({ content: "Il y a eu une erreur durant l'execution de la commande.", ephemeral: true });
    }
}

module.exports = {
    name: Events.InteractionCreate,
    once: false,
    async execute(interaction) {
        if (interaction.isChatInputCommand()) execute(interaction, InteractionType.Slash, interaction.commandName);
        else if (interaction.isButton()) execute(interaction, InteractionType.Button, interaction.customId);
        else if (interaction.isStringSelectMenu()) execute(interaction, InteractionType.Selection, interaction.customId);
        else if (interaction.isModalSubmit()) execute(interaction, InteractionType.Modal, interaction.customId);
    }
}