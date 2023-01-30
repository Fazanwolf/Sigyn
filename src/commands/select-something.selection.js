const {
    StringSelectMenuBuilder,
} = require("discord.js");

function execute(interaction) {
    const choice = interaction.values[0];
    if (choice === "choice_good") {
        return interaction.reply({
            content: `https://i.pinimg.com/564x/e6/79/f7/e679f70e56f50bda9549a2b84ab38582.jpg`,
            ephemeral: true,
        });
    } else if (choice === "choice_evil") {
        return interaction.reply({
            content: `https://i.pinimg.com/564x/64/00/6d/64006d4d0751fc9a088ff8b8d08932a2.jpg`,
            ephemeral: true,
        });
    } else {
        return interaction.reply({
            content: `You didn't select anything. Please choose between the two options.`,
            ephemeral: true,
        });
    }
}

module.exports = {
    data: new StringSelectMenuBuilder().setCustomId("war").setPlaceholder("Nothing selected").addOptions(
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
    execute,
};