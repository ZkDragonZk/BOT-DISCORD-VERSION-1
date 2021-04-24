const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "fumar",
    category: "extra",
    run: async (client, message, args) => {
        return message.channel.send(`Vai um cigarrinho \uD83D\uDEAC`)
    }
}