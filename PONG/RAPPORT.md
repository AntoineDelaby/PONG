# Rapport du TP PONG - JS

- Mathéo GALLEGO
- Antoine DELABY

# Présentation du TP :

De manière simplifiée, le but de ce TP est de coder un Pong en multijoueur.

# Structure générale du TP :

Ce projet est organisé de la manière suivante :
- Un `Dossier client` contenant le code client.
    - `src`
        - `images` *les images.png du projet*
        - `scripts` *les fichiers.js du jeu*
        - `style` *les fichiers.css du projet*
        - **index.html** *le fichier html du corps du site*
    - __package.json__ *webpack*
- Un `Dossier server` contenant le code serveur.
    - `controllers` *deux fichiers.js controllant les requêtes client/serveur*
        - **requestController.js** *utilisé lors de la création du serveur*
        - **ioController.js** *utilisé par main.js, gère les comportements sockets/serveur (abonnements, etc)*
    - `public` *le code client généré par webpack*
    - `scripts` *un fichier contentTypeUtil.js utilisé par requestController*
    - **main.js** *le fichier principal du serveur qui gère essentiellement les connexions*
    - __package.json__ *socket.io - nodemon*

# Principes & Déroulement du jeu :

> Il faut tout d'abord s'assurer que le serveur est lancé (voir étapes de lancement du serveur dans le **Readme.md**).

- Le jeu est composé d'un `Lobby` et d'une `Game`. Nous parlerons alors de **visiteurs** pour les clients connectés au `Lobby` et de **joueurs** pour les clients connectés à la `Game`.

- Un client souhaitant rejoindre le serveur sera d'abord connecté au `Lobby`. Un joueur sera donc toujours au préalable un **visiteur**.

- Pour devenir un **joueur**, il faut cliquer sur le bouton `Connect`.

- Tant qu'il n'y a pas exactement **2 joueurs** dans la `Game`, le jeu ne pourra pas commencer.

- Lorsqu'un **joueur** rejoint la `Game`, ce joueur reçoit un message lui spécifiant si il est le joueur 1 ou 2. De plus, tous les visiteurs sont avertis sur le nombre de joueurs actuellement dans la Game (0/2, 1/2 ou 2/2).

- Tant que le 2ème joueur n'a pas rejoint la `Game`, le joueur1 peut se déconnecter de la `Game` et revenir au `Lobby`.

- Si deux joueurs ont rejoint la `Game`, le joueur1 peut alors lancer une partie. Le premier coup d'envoi aura toujours lieu en horizontal vers le joueur2. Les prochains coups d'envois sont aléatoirement envoyées à l'un des deux joueur (et avec une inclinaison aléatoire). De plus, le départ de chaque coup d'envoie sera toujours le centre du canvas du jeu.

- Les deux joueurs se renvoient la balle avec leur paddle qu'ils déplacent avec leurs flêches directionnelles `ArrowUp` et `ArrowDown` de leur clavier.

- Chaque action d'un joueur est répercutée sur la fenêtre de l'autre joueur.

- La partie s'arrête quand la balle tombe de l'un des deux côtés. Le joueur qui a gagné marque alors 1 point. Le joueur1 peut relancer la balle pour un nouveau coup d'envoi.

- Le joueur1 peut mettre en pause le jeu avec le bouton "Stop". Ce denier devient alors un bouton "Continue" et son click relance la partie là ou elle s'était arrêtée.

- Lorsque l'un des deux joueurs quitte la partie (déconnexion), l'autre joueur est notifié de ce départ et est déconnecté à son tour de la `Game`. Les **visiteurs** qui ne pouvaient jusqu'à lors rejoindre la `Game` le peuvent désormais.


# Le jeu en profondeur & Explications de nos choix :
#### Les échanges clients / serveur :

1. Paddles :
    Lorsqu'un joueur déplace son paddle dans une direction Y, on envoie au serveur un message de la direction choisie.
    
    ```js
        if(e.key == "ArrowUp"){
            this.socket.emit('arrowUp');
        }else if(e.key == "ArrowDown"){
            this.socket.emit('arrowDown');
        }
    ```

    Le serveur récupère ce message et détermine quel joueur lui a envoyé l'information du mouvement. Si c'est le joueur1 alors le serveur envoie un message de mouvement du paddle Gauche dans l'axe Y choisi aux deux joueurs. Sinon, il envoie un message de mouvement du paddle Droit dans l'axe Y choisi aux deux joueurs.

    ```js
        // Exemple dans le cas de arrowUp (déplacement vers le haut)
        socket.on('arrowUp', () => { 
            if (socket == this.getPlayer1()) {
                this.emitToPlayers('paddleLeft-Up');
            } else {
                this.emitToPlayers('paddleRight-Up');
            }
        });
    ```

    Les joueurs recoivent alors tout deux un message et font bouger le paddle correspondant dans l'axe choisi.

    ```js
        // Exemple dans le cas de joueur1 (Le joueur 1 est déplacé vers le haut)
        this.socket.on('paddleLeft-Up', () => {
        this.paddleLeft.moveUp();
        this.moveAndDraw();
        })

        // Exemple dans le cas de joueur2 (Le joueur 2 est déplacé vers le haut)
        this.socket.on('paddleRight-Up', () => {
        this.paddleRight.moveUp();
        this.moveAndDraw();
        })
    ```

2. La Balle :
    Nous avons choisi de ne pas communiquer les coordonnées de la balle avec le serveur au cours de la partie :

    En effet, au lieu de demander au serveur de gérer les déplacements de la balle ce qui peut entraîner moultes désynchronisations, nous avons préféré l'approche suivante : Les deux joueurs sont chacun dans une partie. Chaque action d'un joueur est répercuté sur la partie de l'autre joueur (lancement de la partie, pause, déplacement d'un paddle). Ainsi gérer la balle côté serveur nous a semblé beaucoup plus lourd que nécessaire.

    Lorsque le joueur1 lance une partie, la méthode start() est appelée pour chacun des joueurs en même temps. Et bien que les balles soient indépendantes (car non gérées par le serveur), puisque l'ensemble des autres éléments le sont, alors il n'y a pas de désynchronisation au niveau de la Balle ce qui fluidifie le jeu et l'expérience utilisateur.

    ```js
        socket.on('req-start', () => {
            this.emitToPlayers('start');
            this.emitToClients('gameInProgress');
        })
    ```

    Cependant, lors d'un nouveau coup d'envoi, la direction et l'angle de lancement de la balle est géré côté serveur et est envoyé aux deux joueurs pour "initialiser" correctement le même lancé de balle pour chacun des joueurs.

    ```js
        // La requête de rematch initiée par le joueur1 et traîtée par le serveur :
        socket.on('req-rematch', () => {
            const directionAleaX = (8*(Math.floor(Math.random() * 2)) -4); // -4 or 4 -> Vers Joueur1 ou vers Joueur2
            const directionAleaY = (Math.floor(Math.random() * (5)) -2); // -2 à 2 -> Vers le Haut ou vers le Bas
            this.#players.forEach((player,playerID) => {
                player.emit('rematch', directionAleaX, directionAleaY); // Envoi du message aux joueurs
            });
            this.emitToClients('gameInProgress'); // Envoi du message aux visiteurs
        })
    ```

#### Autres Fonctionnements :

1. Gameplay & Fun :
    - Pour rajouter du piment à la partie nous avons ajouté une fonctionnalité : Lorsque la balle rebondi sur un Paddle ou un Joueur, sa vitesse augmente de 1 ! 

    > (Avec une vitesse maximale fixée à 25. Car au delà, sa vitesse dépasse la largeur du paddle et ne peut donc pas être interceptée par un joueur).

    - Pour améliorer l'expérience utilisateur, la vitesse de la balle est affichée directement sur le canvas !

    - Les **visiteurs** sont au courant de l'avancée de la partie en sachant quand une partie va commencer, quand une partie est en cours et quand la partie est terminée !