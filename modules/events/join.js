module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "BOT Của Kadeer Okla" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`▂▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂\n⫸ 𝑲𝒆̂́𝒕 𝒏𝒐̂́𝒊 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 ⫷\n𝑩𝒐𝒕 𝒃𝒚 châm chần  ;3\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬\n▷ 𝑅𝑈𝐿𝐸 𝐵𝑜𝑡 ◁\n⏩ 𝐾ℎ𝑜̂𝑛𝑔 𝑠𝑝𝑎𝑚\n⏩ 𝐾ℎ𝑜̂𝑛𝑔 𝑐ℎ𝑢̛̉𝑖 𝑏𝑜𝑡\n⏩ 𝐾ℎ𝑜̂𝑛𝑔 𝑘𝑖𝑐𝑘 𝑏𝑜𝑡\n⏩ 𝐻𝑎̣𝑛 𝑐ℎ𝑒̂́ 𝑠𝑝𝑎𝑚 🔞+.....\n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●\n❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙[+ ]❫･━━❜\n📲𝑴𝒐̣𝒊 𝒕𝒉𝒂̆́𝒄 𝒎𝒂̆́𝒄 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂\n𝒂𝒅𝒎𝒊𝒏:https:https://www.facebook.com/taolaphu15102\n📲 sᴜᴘᴘᴏʀᴛ ʙᴏᴛ ᴍᴇss\n⚠️ 𝐃𝐨 𝐧𝐨𝐭 sp𝘢𝘮❗`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path,`chao.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "💗𝙃𝙚𝙡𝙡𝙤 𝙘𝙤𝙣 𝙫𝙤̛̣ {name}💗. \n🐳𝘾𝙝𝙖̀𝙤 𝙢𝙪̛̀𝙣𝙜 đ𝙖̃ đ𝙚̂́𝙣 𝙫𝙤̛́𝙞 {threadName}.\n{type} 𝙡𝙖̀ 𝙩𝙝𝙖̀𝙣𝙝 𝙫𝙞𝙚̂𝙣 𝙩𝙝𝙪̛́ {soThanhVien} 𝙘𝙪̉𝙖 𝙣𝙝𝙤́𝙢. 𝙏𝙪̛𝙤̛𝙣𝙜 𝙩𝙖́𝙘 𝙣𝙝𝙞𝙚̂̀𝙪 𝙫𝙖̀𝙤 𝙣𝙝𝙖 𝙠𝙝𝙤̂𝙣𝙜 𝙡𝙖̀ 𝙖̆𝙣 𝙠𝙞𝙘𝙠 đ𝙖̂́𝙮 ♥" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
        }