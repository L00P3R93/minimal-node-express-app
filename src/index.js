import 'dotenv/config';
import express from 'express';

//console.log('Hello World!')
//console.log(process.env.SECRET)
//console.log(process.env.NAME)

const app = express();

app.get('/', (req, res) => {
	res.send('Hello, World!')
})

app.get('/secret', (req, res) => {
	res.send(process.env.SECRET)
})

app.get('/name', (req, res) => {
	res.send(process.env.NAME)
})

app.listen(3000, () => {
	console.log('[!] Listening on port 3000!');
})
