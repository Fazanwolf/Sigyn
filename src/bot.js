const register = require('./utils/register');
const InteractionType = require("./utils/InterractionType");
const dotenv = require('dotenv');
dotenv.config();

const { Client, GatewayIntentBits, REST, Routes, Collection } = require("discord.js");

const client = new Client({
    intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages ]
})

client[InteractionType.Slash] = new Collection();
const cmds = register.slashCommands(client);

const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: cmds });

const command_id = "";
if (command_id !== "") {
    rest.delete(Routes.applicationCommand(process.env.CLIENT_ID, command_id));
}

client[InteractionType.Button] = new Collection();
client[InteractionType.Selection] = new Collection();
client[InteractionType.Modal] = new Collection();

register.interactions(client, InteractionType.Button);
register.interactions(client, InteractionType.Selection);
register.interactions(client, InteractionType.Modal);

register.events(client);

client.login(process.env.BOT_TOKEN).then(() => {
    console.log("Login...");
});