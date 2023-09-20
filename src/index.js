import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid'

//console.log('Hello World!')
//console.log(process.env.SECRET)
//console.log(process.env.NAME)


let users = {
	1: {
	    id: '1',
	    username: process.env.NAME,
  	},
  	2: {
	    id: '2',
	    username: 'Dave Davids',
  	},
}

let messages = {
	1: {
	    id: '1',
	    text: 'Hello World',
	    userId: '1',
  	},
  	2: {
	    id: '2',
	    text: 'By World',
	    userId: '2',
  	},
}

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
	req.me = users[1];
	next();
})

app.get('/', (req, res) => {
	res.send('Received a HTTP GET method')
})

app.post('/', (req, res) => {
	res.send('Received a HTTP POST method')
})

app.put('/', (req, res) => {
	res.send('Received a HTTP PUT method')
})

app.delete('/', (req, res) => {
	res.send('Received a HTTP DELETE method')
})

app.get('/users', (req, res) => {
	res.send(Object.values(users))
})

app.get('/users/:userId', (req, res) => {
	res.send(users[req.params.userId])
})

app.post('/users', (req, res) => {
	res.send('POST HTTP method on users resource')
})

app.put('/users/:userId', (req, res) => {
	res.send(`PUT HTTP method on users/${req.params.userId} resource`)
})

app.delete('/users/:userId', (req, res) => {
	res.send(`DELETE HTTP method on users/${req.params.userId} resource`)
})

app.get('/messages', (req, res) => {
	res.send(Object.values(messages))
})

app.get('/messages/:messageId', (req, res) => {
	res.send(messages[req.params.messageId])
})

app.post('/messages', (req, res) => {
	const id = uuidv4();
	const message = {
		id,
		text: req.body.text,
		userId: req.me.id
	}
	messages[id] = message;

	return res.send(message);
})

app.put('/messages/:messageId', (req, res) => {
	res.send(`PUT HTTP method on messages/${req.params.messageId} resource`)
})

app.delete('/messages/:messageId', (req, res) => {
	const {
		[req.params.messageId]: message,
		...otherMessages
	} = messages

	messages = otherMessages
	return res.send(message);
})

app.get('/session', (req, res) => {
	return res.send(users[req.me.id]);
})

app.get('/secret', (req, res) => {
	res.send(process.env.SECRET)
})

app.get('/name', (req, res) => {
	res.send(process.env.NAME)
})

app.listen(process.env.PORT, () => {
	console.log(`[!] Listening on port ${process.env.PORT}!`);
})
