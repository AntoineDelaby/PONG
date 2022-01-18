import http from 'http';
import { Server as ServerIO } from 'socket.io'
import RequestController from './controllers/requestController.js';
import IOController from './controllers/ioController.js';

const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);

const io = new ServerIO(server);
const ioController = new IOController(io);


// setInterval(nbRandomSame, 2000);

// function nbRandomSame() {
// 	io.emit('nbRandom', parseInt((Math.random() * 7), 10)+2);
// }

io.on('connection', socket => {
	ioController.registerSocket(socket);
});

console.log('listening on 8080')
server.listen(8080);

//Q6.2 : On constate que même si on ferme un client, le serveur continue de lui envoyer des données.