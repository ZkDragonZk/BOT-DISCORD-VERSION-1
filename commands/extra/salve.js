const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var linguagem = ("[JavaScript](https://nodejs.org/)")
    var livraria = ("[Discord.js](https://discord.js.org/)")
    var dono = ('(!    Sr standy  木#8075)')
    var foto = ("https://i.imgur.com/sjjUdl7.jpg")

    let embed = new Discord.MessageEmbed()
    .setTitle(`SOBRE`)
    .setThumbnail(foto)
    .setDescription(`Salve salve **${message.author.username}-chan** 👋\n\n Meu nome é **Standy**, sou um programador Javascript, o bot foi criada por ${dono}. Como eu sou uma inteligência artificial, não tenho uma idade definida, mas pode me reconhecer como maior de idade.\n Fui desenvolvida em  ${linguagem} e  ${livraria}. Atualmente, estou ajudando **${client.users.cache.size}** usuários, sempre tento pedir para meu papai criar novas funções para que assim, consiga te ajudar um pouco mais :3\n\nQuer ficar por dentro de minhas atualizações? Se sim, entre no meu discord = https://discord.gg/tmE7ZWNQ`)
    .setImage('https://media.discordapp.net/attachments/821498514131255327/831900642199994399/c71c933a6609c4e80c6c318f14026461.jpg?width=434&height=434')
    .setFooter(`Obrigada por ler!`)

    message.author.send(embed).catch(err => {
        message.channel.send('**:octagonal_sign: Não foi possível enviar mensagens diretas pra você!**')
    })
    message.channel.send(`:mailbox: **»** Salve E os Guri!! **${message.author.username}**, enviei pro seu PV.`)
}

module.export = {
    name: 'Salve',
    category: "extra",
    aliases: []
}