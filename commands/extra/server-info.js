const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "server-info",
    category: "extra",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#f3f3f3')
            .setTitle(`${message.guild.name} server status`)
            .addFields(
                {
                    name: "Dono: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "Membros: ",
                    value: `Existem ${message.guild.memberCount} usuarios!`,
                    inline: true
                },
                {
                    name: "Membros Online: ",
                    value: `Existem ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} usuarios online!`,
                    inline: true
                },
                {
                    name: "Total Bots: ",
                    value: `Existem ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Criado Em: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Contagem de funções: ",
                    value: `Existem ${message.guild.roles.cache.size} funções neste servidor.`,
                    inline: true,
                },
                {
                    name: `🗺 Região: `,
                    value: region,
                    inline: true
                },
                {
                    name: `Verificados: `,
                    value: message.guild.verified ? 'Server é Verificado' : `Servidor não verificado`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Existem ${message.guild.premiumSubscriptionCount} Boosters` : `Existem no boosters`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Existem ${message.guild.emojis.cache.size} emojis!` : 'Existem no emojis' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}