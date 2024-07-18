const bgm = require('../media/bgm.json');
const { plugin, config, mode } = require('../lib');

plugin({
        on: 'text',
        fromMe: mode
}, async (m, match) => {
        if (!config.BGMBOT) return;
        if (m.isCreator) return;
        let audios = [];
        const add = m.body.toLowerCase().trim().split(' ') || [m.body.toLowerCase().trim()];
        for (let key in bgm) {
                add.forEach(s => {
                        if (s.toLowerCase() == key.toLowerCase()) {
                                audios.push(bgm[key]);
                        }
                })
        }
        const mp3 = audios[Math.floor(Math.random() * audios.length)];
        if (!mp3) return;
        return await m.send({
                        url: mp3.trim()
                },{
                mimetype: "audio/mp4",
                ptt: true
        }, 'audio');
})
