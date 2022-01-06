import http from 'http';
import { Server as ServerIO } from 'socket.io'
import RequestController from './controllers/requestController.js';
import { cp } from 'fs';

const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);

const io = new ServerIO(server);

io.on('connection', socket => console.log(`connection done by ${socket.id}`) );

setInterval(nbRandom, 1000);

function nbRandom() {
	io.emit(`${parseInt((Math.random() * 7), 10)+2}`);
}

console.log('listening on 8000')
server.listen(8000);
