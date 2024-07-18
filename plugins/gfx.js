const {
	plugin,
	config
} = require('../lib');
const axios = require('axios');

const postJson = async(id, options) =>{
const res = await axios.post(`${config.BASE_URL}api/gfx/${id}`, options);
return Buffer.from(res.data.result)
}

plugin({
	pattern: 'gfx1 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx1 inrl|its me|dev_');
	if(match.startsWith(1)) return;
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx1', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx2 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx2 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx2', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx3 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx3 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx3', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx4 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx4 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx4', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx5 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx5 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx5', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx6 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx6 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx6', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx7 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx7 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx7', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx8 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx8 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx8', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx9 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx9 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx9', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx10 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx10 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx10', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx11 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx11 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx11', options);
	return await message.send(res, {quoted: message.data},'image');
});
plugin({
	pattern: 'gfx12 ?(.*)',
	desc: "generate gfx logo",
	type: 'gfx',
}, async (message, match) => {
	match = match || message.reply_message.text;
	if(!match) return await message.send('_*Example:* gfx12 inrl|its me|dev_');
	let options = {apikey:config.INRL_KEY}, n= 1;
	if(match.includes('|')){
	options.text = match.split('|')[0];
	match.split('|').splice(0).map(a=>options[`text${n++}`] = a);
	} else options['text'] = match
	const res = await postJson('gfx12', options);
	return await message.send(res, {quoted: message.data},'image');
});
