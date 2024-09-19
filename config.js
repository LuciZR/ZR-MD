const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "https://zr-md.koyeb.app";
let HANDLER = "false";
module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  SESSION_ID:process.env.SESSION_ID || " ",
  LANG: process.env.LANG || "EN",
  HANDLERS: process.env.PREFIX || '^[.]',
  BRANCH: "main",
  WARN_COUNT: 3,
  STICKER_DATA: process.env.STICKER_DATA || "𝐀𝐈𝐙𝐄𝐍-𝐌𝐃;𝐁𝐚𝐝𝐚𝐧 𝐬𝐞𝐫⚇",
  BOT_INFO: process.env.BOT_INFO || "𝐀𝐈𝐙𝐄𝐍-𝐌𝐃;𝐙𝐞𝐭𝐚𝐡𝐡;https://i.imgur.com/nAkM1zV.mp4",
  AUDIO_DATA: process.env.AUDIO_DATA || "𝐀𝐈𝐙𝐄𝐍-𝐌𝐃;𝐀𝐈𝐙𝐄𝐍-𝐌𝐃;https://i.imgur.com/Ou56ggv.jpeg",
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE) || false,
  STATUS_VIEW : process.env.STATUS_VIEW || "false",
  CAPTION: process.env.CAPTION || "𝐳𝐞𝐭𝐚𝐚𝐡𝐡👁️!",
  WORK_TYPE: process.env.WORK_TYPE || "private",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "https://zr-md.koyeb.app"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  SUDO: process.env.SUDO || "918293838182",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
};
