const {
    plugin,
    commands,
    send_alive,
    send_menu,
    personalDB,
    mode
} = require('../lib')

plugin({
	pattern: 'list',
	desc: 'list all command with description',
	react: "💯",
	type: 'info',
	fromMe: mode
}, async (message) => {
	let count = 1,
		list = "";
	commands.map((cmd => {
		if (cmd.pattern && cmd.desc) {
			list += `${count++} *${cmd.pattern.replace(/[^a-zA-Z0-9,-]/g,"")}*\n_${cmd.desc}_\n\n`;
		} else {
			list += `${count++} *${cmd.pattern?cmd.pattern.replace(/[^a-zA-Z0-9,-]/g,""):''}*\n`
		}
	}));
	return await message.send(list);
});

plugin({
    pattern: 'menu',
    desc: 'list all commands',
    react: "📰",
    type: 'whatsapp',
    fromMe: mode
}, async (message, match) => {
    return await send_menu(message);
});

plugin({
    pattern: 'alive',
    desc: 'show bot online',
    react: "🥰",
    type: 'info',
    fromMe: mode
}, async (message, match) => {
    if(match == "get" && message.isCreator){
	    const {alive} = await personalDB(['alive'], {content:{}},'get');
	    return await message.send(alive);
    } else if(match && message.isCreator){
	    await personalDB(['alive'], {content: match},'set');
	    return await message.send('*success*');
    }
    const {alive} = await personalDB(['alive'], {content:{}},'get');
    return await send_alive(message, alive);
});
