export default class IOController {
    #io;
    #clients; //in lobby
    #players; //in game
  
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
        if (this.#players.size == 0) {
            socket.emit('0/2 players');
        } else if (this.#players.size == 1) {
            socket.emit('1/2 players');
        } else if (this.#players.size == 2) {
            socket.emit('2/2 players');
        }
        this.displayNbSockets();
    }
  
    setupListeners(socket) {
        socket.on('disconnect', () => {
            this.#clients.delete(socket.id);
            if (this.#players.has(socket.id)) {
                this.#players.forEach((player,playerID) => {
                    if (playerID != socket.id) {
                        console.log(`${playerID} left the game => Back to lobby.`);
                        this.#clients.set(playerID, player);
                    } else {
                        console.log(`${playerID} left the game => disconnected.`);
                    }
                })
                this.#players.clear();
                this.#clients.forEach((client,clientID) => {
                    client.emit('0/2 players');
                });
            } else {
                console.log(`${socket.id} left the lobby.`);
            }
            this.displayNbSockets();
        })

        socket.on('ready', () => {
            if (this.#players.size < 2) {
                this.#clients.delete(socket.id);
                this.#players.set(socket.id, socket);
                if (this.#players.size == 1) {
                    socket.emit('player1-ready');
                    this.#clients.forEach((client,clientID) => {
                        client.emit('1/2 players');
                    });
                } else {
                    socket.emit('player2-ready');
                    this.#clients.forEach((client,clientID) => {
                        client.emit('2/2 players');
                    });
                    this.#players.values().next().value.emit('both-ready');
                }
            } else {
                socket.emit('server-full');
                console.log(`Server full -> ${socket.id} stays in lobby.`);
            }
            this.displayNbSockets();
        })

        socket.on('not-ready', () => {
            this.#players.delete(socket.id);
            this.#clients.set(socket.id, socket);
            this.#clients.forEach((client,clientID) => {
                client.emit('0/2 players');
            });
            this.displayNbSockets();
        })
    }

    displayNbSockets() {
        console.log(`In Lobby : ${this.#clients.size}`);
        console.log(`In Game : ${this.#players.size}`);
    }

  }
  
