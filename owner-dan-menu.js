const fs = require('fs')

global.namabot = "Bot Budianto Store"
global.namaowner = "Budianto"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/lol1.jpg")
global.qris = fs.readFileSync("./image/donasi1.jpg")
global.owner = ['6282216565720','6285794178917']
global.pairingNumber = ""
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `💳 Payment :
*QRIS ALL PAYMENT* 
- Bayar via qris +1% pajak (HARGA +1%)
- contoh 10.000 + 1% = 10.100 jadi bayar 10.100

*E-WALET*
- 082216565720 (Ewallet : DANA, OVO, GOPAY, SHOPEEPAY)
A/N BUDIANTO 
Dana +100
Tf dari bank ke dana +500 | bank ke ovo +1500

*BANK*
BI-FAST : 082216565720
- BCA 
Norek : 2990702619 
A/N BUDIANTO

- OCBC NISP
Norek : 693815440419 
A/N BUDIANTO

- BRI 
Norek : 429701039085535
A/N BUDIANTO

- Mandiri
Norek : 1340024414343
A/N BUDIANTO

- SEABANK 
901710113223 
A/N BUDIANTO

- KEB HANA 
Norek : 12271073170
A/N BUDIANTO
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`» /owner
» /addsewa
» /delsewa
» /ceksewa
» /listsewa
» /pay
» /setpay
» /list
» /addlist
» /updatelist
» /renamelist
» /dellist
» /jeda
» /tambah
» /kurang
» /kali
» /bagi
» /setproses
» /changeproses
» /delsetproses
» /setdone
» /changedone
» /delsetdone
» /proses
» /done
» /welcome
» /goodbye
» /setwelcome
» /changewelcome
» /delsetwelcome
» /setleft
» /changeleft
» /delsetleft
» /antiwame
» /antiwame2
» /antilink
» /antilink2
» /open
» /close
» /hidetag
» /add
» /kick
» /stiker
» /ffid
» /mlid
» /setppgc
» /setnamegc
» /setdesgc
» /linkgc
» /resetlinkgc
» /promote
» /demote
» /setbot
» /updatesetbot
» /delsetbot
» /bot
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}
