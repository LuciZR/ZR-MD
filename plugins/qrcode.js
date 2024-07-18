const {
        plugin,
        mode,
        config,
        getJson
} = require("../lib/");
const jimp = require('jimp');
const QRReader = require('qrcode-reader');


plugin({
        pattern: 'qr ?(.*)',
        fromMe: mode,
        desc: 'qr code reader & generater',
        type: 'plugin'
}, async (message, match) => {
        match = match || message.reply_message.text;
        if (!message.reply_message.image && !match) return await message.reply("_Reply to a qr image/text message_")
        if (message.reply_message.image) {
                const {
                        bitmap
                } = await jimp.read(await message.reply_message.download())
                const qr = new QRReader()
                qr.callback = (err, value) => message.reply(err ?? value.result)
                qr.decode(bitmap)
        } else {
                        return await message.sendReply(config.BASE_URL + 'api/qrcode?text=' + match, {
                                caption: "*result for* ```" + match + "```"
                        }, "image");
        }
});
