export default class IOController {
    #io;
    #clients;
    #players;
  
    constructor(io) {
      this.#io = io;
      this.#clients = new Map();
      this.#players = new Map();
    }
  
    registerSocket(socket) {
        console.log(`Connection done by ${socket.id}.`);
        this.#io.emit('newConnection', socket.id);
        this.setupListeners(socket);
        this.#clients.set(socket.id, socket);
    }
  
    setupListeners(socket) {
        socket.on('disconnect', () => {
            this.#clients.delete(socket.id);
            this.#players.delete(socket.id);
            console.log(`${socket.id} disconnected.`);

            // this.#clients.clear();
            // console.log(`${socket.id} and opponent disconnected.`);
        })

        socket.on('ready', () => {
            if (this.#players.size < 2) {
                this.#players.set(socket.id, socket);
                if (this.#players.size == 1) {
                    socket.emit('player1-ready');
                } else {
                    socket.emit('player2-ready');
                    this.#players.values().next().value.emit('both-ready');
                }
            } else {
                socket.emit('server-full');
                console.log(`Server full -> ${socket.id} stays in lobby.`);
                // socket.disconnect();
            }
            console.log(this.#players.size);
        })

        socket.on('not-ready', () => {
            this.#players.delete(socket.id);
            socket.emit('player-not-ready');
        })
    }

  }
  
