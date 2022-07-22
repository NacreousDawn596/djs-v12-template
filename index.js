const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("request");

prefix = "PREFIX"
token = "TOKEN"

client.on("ready", () => {
	console.log(`${client.user.tag} is ready :D`);
	client.user.setPresence({
		activity: { name: "trying a template by Nac" },
		status: "dnd",
		type: "PLAYING",
		url: "https://github.com/NacreousDawn596"
	});
});

client.on("message", msg => {
	if (msg.author.bot){
		msg.channel.stopTyping();
	}
	if(msg.content.split(" ")[0].indexOf("&") >= 0){
		APIURL = "https://api.waifu.pics/"
		msg.channel.startTyping();
		waifu_commands_past = "neko shinobu megumin bullied cuddled cried hugged awoo kissed licked pat smugged bonked yeeted blushed smiled waved highfived handhold nomed bit glomped slapped killed kicked happy winked poke danced cringed"
		waifu_commands = "neko shinobu megumin bully cuddle cry hug awoo kiss lick pat smug bonk yeet blush smile wave highfive handhold nom bite glomp slap kill kick happy wink poke dance cringe"
                if (waifu_commands.split(' ').indexOf(msg.content.toLowerCase().replace("& ", "").split(' ')[0].replace("&", "")) >= 0){
                        command = msg.content.toLowerCase().replace("& ", "").split(' ')[0].replace("&", "")
                        action = waifu_commands_past.split(' ')[waifu_commands.split(' ').indexOf(msg.content.toLowerCase().replace("& ", "").split(' ')[0].replace("&", ""))]
                        url = APIURL + "sfw/" + msg.content.toLowerCase().replace("& ", "").split(' ')[0].replace("&", "")
			console.log(APIURL + "sfw/" + msg.content.toLowerCase().replace("& ", "").split(' ')[0].replace("&", ""))
                        request(url.replace(' ', ''), function (error, response, body) {
                                try{
                                        var body = JSON.parse(body)
                                }catch (error){
                                        console.log(error)
                                }
                                try{
                                        pinged = client.users.fetch(msg.content.split(`${command} `)[1].split(" ")[0].replace('<@', '').replace('>', '').replace('!', ''));
                                        if (pinged == ""){
                                                idk = ["a"][5]
                                        }
                                        pinged.then(function(info) {
                                                let Embed = new Discord.MessageEmbed()
                                                .setDescription(`${msg.author} ${action} ${info.username}`)
                                                .setImage(body.url)
                                                msg.reply(Embed)
                                        })
                                }catch(err){
                                        try{
                                                pinged = msg.content.split(`${command} `)[1].split(" ")[1]
                                        }catch(err){
                                                pinged = ""
                                        }
                                        if (pinged == undefined){
                                                pinged = ""
                                        }
                                        let Embed = new Discord.MessageEmbed()
                                        .setDescription(`${msg.author} ${action} ${pinged}`)
                                        .setImage(body.url)
                                        msg.reply(Embed)
					console.log(body)
                        }
                });
                return;

                        }
		message = msg.content.replace(prefix, "").toLowerCase()
		switch (message.split(" ")[0]){
			case "ping":
				msg.channel.send("pong");
				break;

			case "say":
				msg.channel.send(msg.content.replace(`${prefix}say`);
				msg.delete();
				break;

			case "nsfw":
				if (msg.channel.nsfw){
					url = APIURL + "nsfw/" + msg.content.split("nsfw ")[1].split(" ")[0]
					request(url.replace(' ', ''), function (error, response, body) {
        		                        try{
		                                        var body = JSON.parse(body)
                		                }catch (error){
                        		                console.log(error)
                                		}
						console.log(body)
						let Embed = new Discord.MessageEmbed()
						.setTitle("nsfw ;)")
        	                                .setDescription(msg.content.split("nsfw ")[1].split(" ")[0])
                	                        .setImage(body.url)
                        	                msg.channel.send(Embed)
					});
				}else{
					msg.reply("> please, use it in an nsfw channel")
				}
				break;
			case "pic":
      		  		try{
      		  			message.channel.send("https://source.unsplash.com/1600x900/?" + messagee.split("pic ")[1].replace(' ', ','))
      		  		}catch (err){
      		  			//hehehe
      		  		}

			case "help":
				let Embed = new Discord.MessageEmbed()
				.setTitle("Help")
				.setURL("https://github.com/NacreousDawn596")
                                .setDescription(`a help list of all commands`)
                                .addField("rp commands:", ["ping", "say", "pic", "help"].join("\n"), false)
				.addField("fun commands:", "neko shinobu megumin bully cuddle cry hug awoo kiss lick pat smug bonk yeet blush smile wave highfive handhold nom bite glomp slap kill kick happy wink poke dance cringe".split(' ').join("\n"), false)
				.addField("nsfw commands:", "waifu neko trap blowjob".split(" ").join("\n"), false)
				.setFooter("made by nac because he was bored :D", msg.guild.iconURL())
				.setTimestamp()
				msg.channel.send(Embed)
				break;
		}


		msg.channel.stopTyping();
	}
});

client.login(token)
