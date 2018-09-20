const Discord = require('discord.js');
exports.run = function(client, message, args) {
  var args = message.content.split(' ').slice(1).join(' ');
  if (!args) return message.reply("**Kanalın adını ne yapmam gerektiğini söylemelisin.**");
  message.channel.setName(`${args}`)
  .then(newChannel => message.channel.send(`Bu kanalın yeni ismi ***#${args}***`))
  .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
