import http from 'http';
import RequestController from './controllers/requestController.js';
// import IOController from './controllers/ioController.js';
import { Server as ServerIO } from 'socket.io'

const server = http.createServer(
	(request, response) => new RequestController(request, response).handleRequest()
);

// const io = new ServerIO(server);
// const ioController = new IOController(io);

// io.on('connection', socket => {
// 	ioController.registerSocket(socket);
// 	console.log("Socket ", socket, " registered");
// });

server.listen(8080, () => console.log(`Server running on port 8080`));
