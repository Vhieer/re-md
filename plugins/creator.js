function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('62859106985947@s.whatsapp.net')}\nitem1.TEL;waid=62859106985947:62859106985947\nitem1.X-ABLabel:Busy.\nURL;My Web: https://teamsecret.gg\nEMAIL;Email Owner: teamsecret@business.com\nORG: ITS BOT , SO DONT NOT CHAT JUST USE ME\nTEL;Bot Number : ;waid=62859106985947:62859106985947\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
