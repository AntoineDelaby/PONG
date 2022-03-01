'use strict';

import Game from './Game.js';

const theField = document.getElementById("field");

const init = () => {
  const startButton = document.getElementById('playButton');
  const theGame = new Game(theField);

  startButton.addEventListener('click', e => {
    e.preventDefault();
    if (theGame.status == 'Wait') {
      theGame.socket.emit('ready');
    } else if (theGame.status == 'Waiting-for-player2') {
      theGame.socket.emit('not-ready');
    } else if (theGame.status == 'Stop') {
      theGame.socket.emit('req-start');
    } else if (theGame.status == 'Start') {
      theGame.socket.emit('req-stop');
    } else if (theGame.status == 'Rematch') {
      theGame.socket.emit('req-rematch');
    }
  })

  
}
  // document.getElementById('start').addEventListener("click", () => startGame(theGame) );


window.addEventListener("load",init);

// // true iff game is started
// let started = false;
// /** start and stop a game
//  * @param {Game} theGame - the game to start and stop
//  */
// const startGame = theGame => {
//   if (!started) {
//     if(theGame.ball.shiftX == 0){
//       theGame = new Game(theField);
//     }
//     theGame.start();
//     document.getElementById('start').value = 'stop';
//   }
//   else {
//     if(theGame.ball.shiftX == 0 && theGame.ball.shiftY == 0){
//       document.getElementById('start').value = 'rejouer';
//     } else {
//       document.getElementById('start').value = 'jouer';
//     }
//     theGame.stop();
//   }
//   started = ! started;
// }
