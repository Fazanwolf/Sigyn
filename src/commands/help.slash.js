const {SlashCommandBuilder, EmbedBuilder, Colors} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder().setName('help').setDescription("Votre première commande qui affiche l'help!"),
    async execute(interaction) {
        const today = new Date(Date.now());
        const embed = new EmbedBuilder()
            .setTitle("Helper")
            .setDescription("**Affiche la liste des commandes avec les informations nécessaires.**")
            .addFields([
                { name: "- help", value: "Affiche la liste des commandes avec les informations nécessaires."},
                { name: "- example ", value: "Exemple d'affichage avec une autre commande"},
                { name: "- example ", value: "Exemple d'affichage avec une autre commande"}
            ])
            .setColor(Colors.Blurple)
            .setFooter({ "text": today.toLocaleTimeString() });
        return interaction.reply({ embeds: [embed], ephemeral: true });
    }
}