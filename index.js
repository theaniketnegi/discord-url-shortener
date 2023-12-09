const { Client, GatewayIntentBits } = require("discord.js");
const { fetchID } = require("./controllers/discord_url");
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("create")) {
    const url = msg.content.split("create ")[1];
    if(!url)
      return msg.reply("Attach a URL");
    fetchID(process.env.FETCH_URL, url).then((res) => msg.reply(`Generated URL: ${res}`));
    return msg.reply({ content: `Generating short URL for ${url}` });
  }
});

client.on("interactionCreate", (interaction) => {
  if (interaction.commandName === "ping") return interaction.reply("PONG!");
  if(interaction.commandName === "create"){
    const url = interaction.options._hoistedOptions[0].value;
    fetchID(process.env.FETCH_URL, url).then((res) => interaction.reply(`Generated URL: ${res}`));
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
