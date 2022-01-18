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

let intervals = new Map;

io.on('connection', socket => {
	intervals.set(socket.id, setInterval(() => {nbRandomDifferent(socket.id)}, 2000));
	socket.on('disconnect', () => {
		clearInterval(intervals.get(socket.id));
		intervals.delete(socket.id);
		console.log(`${socket.id} disconnected.`);
	})
	console.log(`Connection done by ${socket.id}.`)}
);

function nbRandomDifferent(socketId) {
	io.to(socketId).emit('nbRandom', parseInt((Math.random() * 7), 10)+2);
	console.log(`Nb Send to ${socketId} ~`);
}

console.log('listening on 8080')
server.listen(8080);

//Q6.2 : On constate que même si on ferme un client, le serveur continue de lui envoyer des données.