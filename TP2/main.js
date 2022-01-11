import http from 'http';
import { Server as ServerIO } from 'socket.io'
import RequestController from './controllers/requestController.js';

const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);

const io = new ServerIO(server);


// setInterval(nbRandomSame, 2000);

// function nbRandomSame() {
// 	io.emit('nbRandom', parseInt((Math.random() * 7), 10)+2);
// }

let intervals = {};

io.on('connection', socket => {
	intervals[socket.id] = setInterval(() => {nbRandomDifferent(socket.id)}, 2000);
	console.log(`connection done by ${socket.id}`)}
);

function nbRandomDifferent(socketId) {
	io.to(socketId).emit('nbRandom', parseInt((Math.random() * 7), 10)+2);
	console.log('Nb Send')
}

console.log('listening on 8080')
server.listen(8080);
