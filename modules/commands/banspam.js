const timeup = 120
const lan = 7
module.exports.config = {
	name: "spam",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Đăng fix by Phạm Minh Duy",
	description: "Auto ban khi spam bot",
	commandCategory: "System",
	usages: "",
	cooldowns: 0
};
 
module.exports.handleEvent = async function({ api, args, Users, event, Threads, utils, client }) {
	let {messageID, threadID, senderID,mentions} = event;
var prefi = `${global.config.PREFIX}`
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX
 
	var fs = require("fs-extra")
if (event.body.indexOf(prefix)==0 )
{		if (!fs.existsSync(__dirname + `/cache/dataspam.json`)) {
			const dataaa = { spam: {}, time: {} };
			fs.writeFileSync(__dirname + `/cache/dataspam.json`, JSON.stringify(dataaa));
					}
var dataspam = JSON.parse(fs.readFileSync(__dirname + `/cache/dataspam.json`));
 
if (global.config.ADMINBOT.includes(senderID) ) return;
 
 
if(!dataspam.spam.hasOwnProperty(senderID)) {
dataspam.spam[senderID] = {};
dataspam.time[senderID] = []
fs.writeFileSync(__dirname + `/cache/dataspam.json`, JSON.stringify(dataspam, null, 2),'utf8');
var time = Date.now()
			dataspam.spam[senderID][time] = []; 
dataspam.time[senderID].push(time)
fs.writeFileSync(__dirname + `/cache/dataspam.json`, JSON.stringify(dataspam, null, 2),'utf8');
 
  }
var che = dataspam.time[senderID]
var spam = dataspam.spam[senderID][che]
if ( (timeup * 1000 + parseInt(che) ) > Date.now() ) { dataspam.spam[senderID][che].push(senderID)
fs.writeFileSync(__dirname + `/cache/dataspam.json`, JSON.stringify(dataspam, null, 2),'utf8');
}
if ( spam.length > lan )
{const name = await Users.getNameUser(senderID)
var threadInfo = await 
api.getThreadInfo(event.threadID);
const moment = require("moment-timezone");
const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
 let data = (await Users.getData(senderID)).data || {};
			data.banned = true;
				data.reason = "Spam bot" ;
				data.dateAdded = time ;
				await Users.setData(senderID, { data });
				global.data.userBanned.set(senderID, { reason: data.reason, dateAdded: data.dateAdded });
        api.sendMessage(`Bạn đã bị ban vì sử dụng bot quá nhanh ${lan} lần` +"/"+ `${timeup} giây
Vui lòng liên hệ Admin để gỡ ban
https://www.facebook.com/duybraves`,threadID,messageID) ;
api.sendMessage(`${name} Đã bị ban vì spam bot ${lan} lần` + "/" + `${timeup} giây
Vào lúc: ${time}
ID: ${senderID}
Box: ${threadInfo.threadName}
ID Box: ${threadID}`,"100048357344107")
delete dataspam.time[senderID]
delete dataspam.spam[senderID]
fs.writeFileSync(__dirname + `/cache/dataspam.json`, JSON.stringify(dataspam, null, 2),'utf8');
}
if ( (timeup *1000 + parseInt(che) ) < Date.now() ) { 
var tii = Date.now()
delete dataspam.spam[senderID]
delete dataspam.time[senderID]
dataspam.time[senderID] =[]
dataspam.spam[senderID] = {}
dataspam.time[senderID].push(tii)
dataspam.spam[senderID][tii] = []
dataspam.spam[senderID][tii].push(senderID)
fs.writeFileSync(__dirname + `/cache/dataspam.json`, JSON.stringify(dataspam, null, 2),'utf8');
}
 
 
 
} };
module.exports.run = function({  api, args, Users, event, Threads, utils, client}) {
api.sendMessage(`Số lần ${lan} / ${timeup} giây`,event.threadID,event.messageID)
}