import 'dotenv/config';
import express from 'express';

//console.log('Hello World!')
//console.log(process.env.SECRET)
//console.log(process.env.NAME)

const app = express();

app.listen(3000, () => {
	console.log('[!] Listening on port 3000!');
})
