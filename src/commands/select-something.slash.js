const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

function execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
        new StringSelectMenuBuilder().setCustomId("war").setPlaceholder("Nothing selected").addOptions(
            {
                label: "Le bien",
                description: "C'est cool",
                value: "choice_good",
            },
            {
                label: "Le mal",
                description: "C'est pas cool",
                value: "choice_evil",
            }
        ),
    );

    return interaction.reply({
        content: `Choose between:`,
        components: [row],
        ephemeral: true,
    });
}

module.exports = {
    data: new SlashCommandBuilder().setName("select-something").setDescription("You must choose something."),
    execute,
};