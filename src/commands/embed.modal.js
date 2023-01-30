const { ModalBuilder, EmbedBuilder, Colors} = require("discord.js");

function execute(interaction) {
    const [title, description, footer] = [
        'titleInput',
        'descriptionInput',
        'footerInput',
    ].map((id) => interaction.fields.getTextInputValue(id));

    const embed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setColor(Colors.Gold)
        .setFooter({
            text: footer
        });

    return interaction.reply({
        embeds: [embed],
        ephemeral: true,
    });
}

module.exports = {
    data: new ModalBuilder().setCustomId("embed").setTitle("Embed"),
    execute,
};