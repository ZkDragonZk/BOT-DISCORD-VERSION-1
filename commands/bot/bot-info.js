const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "bot-info",
    category: "bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Servidores',
                    value: `Estou em ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Canais',
                    value: `Estou em ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Usuário',
                    value: `Total ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Create Bot',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Server Info',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}