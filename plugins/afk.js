let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
${conn.getName(m.sender)} 〖 is now AFK 〗\n\n*📝 Alasan:*${text ? ': ' + text : ''}\\ ⫹⫺ © NR-Rifky28
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.limit = true

module.exports = handler
