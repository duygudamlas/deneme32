const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Tıkla ve davet et !")
  .setAuthor("FrostRot", "https://cdn.discordapp.com/avatars/463351955046006795/bc2c393d05d5d3a3632e7b5f6ea256a3.png?size=2048")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("RANDOM")
  .setDescription("FrostRot botu sunucunuza ekleyip FrostRot BOT ile sunucunuzda arkadaşlarınızla eğlenebilirsiniz.")
  .setFooter('FrostRot Bot', client.user.FrostRotURL)
  .setFooter('FrostRot Bot', client.user.FrostRotURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL('https://discordapp.com/api/oauth2/authorize?client_id=463351955046006795&permissions=8&scope=bot')

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};
