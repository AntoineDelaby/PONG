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
    }
  
    setupListeners(socket) {
        socket.on('disconnect', () => {
            this.#clients.delete(socket.id);
            if (this.#players.has(socket.id)) { //Si c'est un joueur
                this.#players.forEach((player,playerID) => {
                    if (player != socket) { //Si c'est l'adversaire de celui qui s'est déconnecté
                        console.log(`${playerID} left the game => Waiting for user to disconnect.`);
                        player.emit('opponent-disconnected');
                    } else { //Si c'est celui qui s'est déconnecté
                        console.log(`${playerID} left the game => disconnected.`);
                    }
                })
                this.#players.clear();
                this.emitToClients('0/2 players');
            } else { //Si ce n'était pas un joueur
                console.log(`${socket.id} left the lobby.`);
            }
        })

        socket.on('ready', () => {
            if (this.#players.size < 2) {
                this.#clients.delete(socket.id);
                this.#players.set(socket.id, socket);
                if (this.#players.size == 1) {
                    socket.emit('player1-ready');
                    this.emitToClients('1/2 players');
                } else {
                    socket.emit('player2-ready');
                    this.emitToClients('2/2 players');
                    this.getPlayer1().emit('both-ready');
                    this.emitToPlayers('initPaddles');
                }
            } else {
                socket.emit('server-full');
                console.log(`Server full -> ${socket.id} stays in lobby.`);
            }
        })

        socket.on('not-ready', () => {
            this.#players.delete(socket.id);
            this.#clients.set(socket.id, socket);
            this.emitToClients('0/2 players');
        })

        socket.on('arrowUp', () => {
            if (socket == this.getPlayer1()) {
                this.emitToPlayers('paddleLeft-Up');
            } else {
                this.emitToPlayers('paddleRight-Up');
            }
        });

        socket.on('arrowDown', () => {
            if (socket == this.getPlayer1()) {
                this.emitToPlayers('paddleLeft-Down');
            } else {
                this.emitToPlayers('paddleRight-Down');
            }
        });

        socket.on('req-start', () => {
            this.emitToPlayers('start');
            this.emitToClients('gameInProgress');
        })

        socket.on('req-stop', () => {
            this.emitToPlayers('stop');
            this.emitToClients('gamePaused');
        })

        socket.on('req-rematch', () => {
            const directionAleaX = (8*(Math.floor(Math.random() * 2)) -4); // 4 or -4
            const directionAleaY = (Math.floor(Math.random() * (5)) -2); // -2 à 2
            this.#players.forEach((player,playerID) => {
                player.emit('rematch', directionAleaX, directionAleaY);
            });
            this.emitToClients('gameInProgress');
        })

        socket.on('req-over', () => {
            this.emitToClients('gameOver');
        })
    }

    getPlayer1() {
        return Array.from(this.#players.values()).shift();
    }

    getPlayer2() {
        return Array.from(this.#players.values()).pop();
    }

    emitToPlayers(message) {
        this.#players.forEach((player,playerID) => {
            player.emit(message);
        });
    }

    emitToClients(message) {
        this.#clients.forEach((client,clientID) => {
            client.emit(message);
        });
    }

  }
  
