export default class IOController {
    #io;
    #clients;
  
    constructor(io) {
      this.#io = io;
      this.#clients = new Map();
    }
  
    registerSocket(socket) {
        this.setupInterval(socket);
        this.setupListeners(socket);
        
        console.log(`Connection done by ${socket.id}.`);
    }
  
    setupListeners(socket) {
        socket.on('disconnect', () => {
            clearInterval(this.#clients.get(socket.id));
            this.#clients.delete(socket.id);

            console.log(`${socket.id} disconnected.`);
        })
    }

    setupInterval(socket) {
        this.#clients.set(
            socket.id,
            setInterval(
                () => {this.nbRandom(socket.id)},
                2000)
        );
    }

    nbRandom(socketId) {
        this.#io.to(socketId).emit('nbRandom', parseInt((Math.random() * 7), 10)+2);
        console.log(`Nb Send to ${socketId} ~`);
    }

  }
  