const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://imgur.com/gallery/H4WSHQA.jpg";
  
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Amalser*

*Bgm updation💘*

*Owner number wa.me/919895828468*

*githublink       https://github.com/cyberchekuthan/Amalser_v1*

*audio commads    https://github.com/cyberchekuthan/Amalser_v1/tree/master/uploads*

*youtube link  https://youtu.be/VR_ppqEl2q8*

`}) 

}));
