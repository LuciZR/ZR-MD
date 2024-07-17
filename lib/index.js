//database
const {
    personalDB,
    groupDB
} = require("./database")
//main
const {
    plugin,
    commands,
    serialize,
    WAConnection,
    GPT,
    elevenlabs
} = require("./main");
//base
const {
    isInstagramURL,
    linkPreview,
    AudioMetaData,
    addSpace,
    sendUrl,
    send_menu,
    send_alive,
    poll,
    getRandom,
    getBuffer,
    fetchJson,
    runtime,
    sleep,
    isUrl,
    bytesToSize,
    getSizeMedia,
    check
} = require('./base');
//handler
const {
    cutAudio,
    cutVideo,
    toAudio,
    toPTT,
    isAdmin,
    isBotAdmin,
    getCompo,
    getDate,
    parsedJid,
    PREFIX,
    mode,
    extractUrlsFromString,
    getJson,
    isIgUrl,
    getUrl,
    isNumber,
    MediaUrls
} = require('./handler');
//sticker
const {
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    writeExifWebp
} = require("./sticker");
//mention
const {
    mention
} = require('./mention')
//wcg
const {
    WCG
} = require('./wcg');
//config
const config = require('../config');
//youtube

const {
    stream2buffer,
    searchYT,
    downloadMp3,
    downloadMp4,
    GenListMessage,
    TTS,
    TRT,
    getYTInfo
} = require('./youtube');
module.exports = {
    personalDB,
    groupDB,
    plugin,
    commands,
    serialize,
    WAConnection,
    GPT,
    elevenlabs,
    isInstagramURL,
    linkPreview,
    AudioMetaData,
    addSpace,
    sendUrl,
    send_menu,
    send_alive,
    poll,
    getRandom,
    getBuffer,
    fetchJson,
    runtime,
    sleep,
    isUrl,
    bytesToSize,
    getSizeMedia,
    check,
    cutAudio,
    cutVideo,
    toAudio,
    toPTT,
    isAdmin,
    isBotAdmin,
    getCompo,
    getDate,
    parsedJid,
    PREFIX,
    mode,
    extractUrlsFromString,
    getJson,
    isIgUrl,
    getUrl,
    isNumber,
    MediaUrls,
    imageToWebp,
    videoToWebp,
    writeExifImg,
    writeExifVid,
    writeExifWebp,
    mention,
    config,
    WCG,
    stream2buffer,
    searchYT,
    downloadMp3,
    downloadMp4,
    GenListMessage,
    TTS,
    TRT,
    getYTInfo
}
