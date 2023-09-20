import 'dotenv/config';
import cors from 'cors';
import express from 'express';

//console.log('Hello World!')
//console.log(process.env.SECRET)
//console.log(process.env.NAME)


let users = {
	1: {
	    id: '1',
	    username: 'Robin Wieruch',
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
	res.send('POST HTTP method on messages resource')
})

app.put('/messages/:messageId', (req, res) => {
	res.send(`PUT HTTP method on messages/${req.params.messageId} resource`)
})

app.delete('/messages/:messageId', (req, res) => {
	res.send(`DELETE HTTP method on messaged/${req.params.messageId} resource`)
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
