const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  category: "info",
  description: "Returns Latency and API Ping",
  timeout: 10000,
    run: async (client, message, args) => {
      const msg = await message.channel.send("Pinging...");
      const Embed = new MessageEmbed()
        .setTitle("Pong!")
        .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
        .setDescription(
          `\u231B Latency é ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n\n\u23F0 API Ping is ${Math.round(client.ws.ping)}`
        )
        .setColor('#140700');
      msg.edit(Embed);
      msg.edit("\u200b");
    }
};