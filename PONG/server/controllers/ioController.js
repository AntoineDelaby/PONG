export default class IOController {
    #io;
    #clients;
  
    constructor(io) {
      this.#io = io;
      this.#clients = new Map();
    }
  
    registerSocket(socket) {
        console.log(`Connection done by ${socket.id}.`);
        if (this.#clients.size < 2) {
            this.#io.emit('newPlayer', socket.id);
            this.setupListeners(socket);
            this.#clients.set(socket.id,socket);
        } else {
            socket.
            console.log(`Server full -> ${socket.id} disconnected`);
            socket.disconnect();
        }
    }
  
    setupListeners(socket) {
        socket.on('disconnect', () => {
            this.#clients.delete(socket.id);

            console.log(`${socket.id} disconnected.`);
        })
    }

  }
  
