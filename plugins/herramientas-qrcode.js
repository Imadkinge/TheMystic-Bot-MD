import {toDataURL} from 'qrcode';


const handler = async (m, {text, conn}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/ar.json`))
  const tradutor = _translate.plugins.herramientas_qrcode

  if (!text) throw tradutor.texto1;
  conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), {scale: 8}), 'qrcode.png', 'instagram:https://www.instagram.com/chatbi.imad?igshid=YTQwZjQ0NmI0OA==', m);
};
handler.help = ['', 'code'].map((v) => 'qr' + v + ' <teks>');
handler.tags = ['tools'];
handler.command = /^qr(code)?$/i;
export default handler;
