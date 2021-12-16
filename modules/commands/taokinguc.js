const fs = require("fs");
module.exports.config = {
	name: "Kí ngực",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Kí ngực",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Kinguc")==0 || (event.body.indexOf("Tao ki nguc fan""")==0)) {
		var msg = {
				body: "Yo !! Tao kí ngực fan !!",
				attachment: fs.createReadStream(__dirname + `/noprefix/taokinguc.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}