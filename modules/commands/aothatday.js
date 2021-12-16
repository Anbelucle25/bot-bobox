const fs = require("fs");
module.exports.config = {
name: "Ảo",
	version: "1.0.0",
  hasPermssion: 0,
  craedits:"Mainzed",
  description: "Ảo thật đấy!",
  commandCategory: "Không cần dấu lệnh",
  usages: "noprefix",
  cooldowns: 5,
            };
            module.exports.onLoad = () => {
                const fs = require("fs-extra");
                    const request = require("request");
                        const dirMaterial = __dirname + `/noprefix/`;
                            if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
                                if (!fs.existsSync(dirMaterial + "ao.mp4")) request("https://tinyurl.com/yh4nrtlp").pipe(fs.createWriteStream(dirMaterial + "ao.mp4"));
                                }
                                module.exports.handleEvent = function({ api, event }) {
                                	var { threadID, messageID } = event;
                                  	if (event.body.indexOf("Ảo")==0 || (event.body.indexOf("ảo")==0)){
                                    	  var msg = {
                                        				body: "Địt mẹ ảo thật đấy",
                                                				attachment: fs.createReadStream(__dirname + `/noprefix/ao.mp4`)
                                                        			}
                                                              			return api.sendMessage(msg, threadID, messageID);
                                                                    		}
                                                                        	}
                                                                          	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                                                            }