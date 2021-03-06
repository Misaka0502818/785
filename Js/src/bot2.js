const LineConnect = require('./connect');
let LINE = require('./main.js');
console.info("\n\
=========================================\n\
BotName: LINE Alphat JS\n\
Version: FORKED VERSION\n\
Thanks to @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : This bot is made by @Alfathdirk @TCR_TEAM and has been forked by @GoogleX and @Arisawali2014  !\n\
***Copyright belongs to the author***");

/*
| This config is for auth/login with token
| 
| Change it to your authToken & your certificate
*/
const auth = {
 	authToken: 'ElRWPRiDtfZwsL4t58qd.ECY3SwYO52mGYgzY8n7I7q.vnK37iutS8TUjGNo91EWyI969VxviH3+5Bt9JmOYpjs=',
 	certificate: '75aa3029c22aaea9656ec43caa37ae8e32ac451507ff1f26e960c03ffddc8b9a'
}

//let client =  new LineConnect();
let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	let ops;
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision, 5);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
