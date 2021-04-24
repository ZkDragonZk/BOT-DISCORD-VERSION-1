const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "say",
    category: "extra",
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send("**Insira um texto para que eu fale.** `!say <texto>`");
        const sayMessage = args.join(" ");

        message.delete().catch(O_o => { });
        message.channel.send(sayMessage);
    }
}