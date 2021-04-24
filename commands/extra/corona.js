const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "corona",
    category: "extra",
    run: async (client, message, args) => {
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send(`***${args[0]}*** não existe ou os dados não estão sendo coletados`)
        }

        const embed = new MessageEmbed()
            .setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Total de casos Corona em todo o mundo')
            .setColor('#fb644c')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://media.giphy.com/media/4xi4jEPUlouaIPRNUR/giphy.gif')
            .addFields(
                {
                    name: 'Total Casos:',
                    value: corona.cases.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Mortes:',
                    value: corona.deaths.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Recumperados:',
                    value: corona.recovered.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Casos Ativos:',
                    value: corona.active.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Casos Criticos:',
                    value: corona.critical.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Recuperações Hoje:',
                    value: corona.todayRecovered.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'Mortes Hoje:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true
                })

        await message.channel.send(embed)
    }
};