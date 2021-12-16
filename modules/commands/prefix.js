const fs = require("fs");
module.exports.config = {
	name: "prefix",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Main zed", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Xài sao")==0 || (event.body.indexOf("Prefix")==0)) {
		var msg = {
				body: "Bạn Muốn Biết Bot Có Dấu Lệnh Gì Đúng Không. lệnh Bot Này Hiện Tại Là Dấu _\n Mong Các Bạn Trải nghiệm Tốt Cảm Ơn Đã Sử Dụng 🦄💜",
				attachment: fs.createReadStream(__dirname + `/noprefix/prefix.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                        }