var key = ("./keys.js");
var Twitter = require("twitter");

var arg = proccess.argv[2]
if(arg === "my-tweets"){
	tweets();
}
// ----------twitter----------- //

// var client = new twitter()

var client = new Twitter({
  consumer_key: 'RydsPI8EhDgtwpJMhzznfvFao',
  consumer_secret: 'od8iUQX1nFKOWCBaHWiCWyagqHyzK9F2kClXR5a5Cwv2pthXHf',
  access_token_key: '803750974967975936-SGhds1X9KAM7WcOnzLJUqBZQuU1irrs',
  access_token_secret: 'D90nWBRHbFjcUC2GPvCGmcMMTprEBqZJ7jR1fH0SmKrp7'
});


/*client.get(path, params, callback);
client.post(path, params, callback);
client.stream(path, params, callback);*/




var param = {screen_name; "e_ander512"};
client.get("status/user_timeline", param, function(error, tweets, respost){
	if (!error){
		for(var i = 0; < 4; i++){
			console.log(tweets[i].text, tweets[i].created_at);
		}
	}
	});	
};
