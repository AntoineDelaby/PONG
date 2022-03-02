import Ball from './Ball.js';
import Paddle from './Paddle.js';


const PADDLE_LEFT_IMAGE_SRC = './images/paddle_left.png';
const PADDLE2_RIGHT_IMAGE_SRC = './images/paddle_right.png';
const SHIFT_X = 4;
const SHIFT_Y = 0;

/**
 * a Game animates a ball bouncing in a canvas
 */
export default class Game {
  status;
  socket;

  /**
   * build a Game
   *
   * @param  {Canvas} canvas the canvas of the game
   */
  constructor(canvas) {
    this.raf = null;
    this.canvas = canvas;
    this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, SHIFT_X, SHIFT_Y, this);
    this.paddleLeft = new Paddle(10, this.canvas.height/2, PADDLE_LEFT_IMAGE_SRC, this);
    this.paddleRight = new Paddle((this.canvas.width - 37), this.canvas.height/2, PADDLE2_RIGHT_IMAGE_SRC, this);
    this.status = 'Wait';

    this.socket = io();

    this.socket.on('newConnection', playerID => {
      console.log(`${playerID} joined the lobby !`);
    })

    this.socket.on('player1-ready', () => {
      this.status = 'Waiting-for-player2';
      document.getElementById('player1').style.fontSize = '50px';
      document.getElementById('playButton').value = 'Waiting for player2 ...';
      document.getElementById('gameInfo').innerText = 'You are player1 !';
    })

    this.socket.on('player2-ready', () => {
      document.getElementById('player2').style.fontSize = '50px';
      document.getElementById('playButton').style.display = 'none';
      document.getElementById('gameInfo').innerText = 'You are player2 !';
    })

    this.socket.on('both-ready', () => {
      this.status = 'Stop';
      document.getElementById('playButton').value = 'Start';
    })

    this.socket.on('initPaddles', () => {
      this.initPaddle();
    })

    this.socket.on('hide-playButton', () => {
      document.getElementById('playButton').style.display = "none";
    })

    this.socket.on('0/2 players', () => {
      this.status = 'Wait';
      this.resetScores();
      document.getElementById('player1').style.fontSize = null;
      document.getElementById('player2').style.fontSize = null;
      document.getElementById('playButton').value = 'Connect';
      document.getElementById('playButton').style.display = null;
      document.getElementById('gameInfo').innerText = '0/2 players';
    })

    this.socket.on('1/2 players', () => {
      document.getElementById('gameInfo').innerText = '1/2 players';
    })

    this.socket.on('2/2 players', () => {
      document.getElementById('playButton').value = 'Game Full';
      document.getElementById('gameInfo').innerText = 'The Game is about to start';
    })

    this.socket.on('opponent-disconnected', () => {
      this.stop();
      this.status = 'Cursed';
      document.querySelector('body').insertAdjacentHTML('afterbegin','<div id="boxGameCursed"></div>');
      alert('Your opponent disconnected from the game. Please refresh the page (f5).');
    })

    this.socket.on('server-full', () => {
      alert('Server full, can\'t connect to the game !');
    })

    this.socket.on('paddleLeft-Up', () => {
      this.paddleLeft.moveUp();
      this.moveAndDraw();
    })

    this.socket.on('paddleRight-Up', () => {
      this.paddleRight.moveUp();
      this.moveAndDraw();
    })

    this.socket.on('paddleLeft-Down', () => {
      this.paddleLeft.moveDown();
      this.moveAndDraw();
    })

    this.socket.on('paddleRight-Down', () => {
      this.paddleRight.moveDown();
      this.moveAndDraw();
    })

    this.socket.on('start', () => {
      this.start();
    })

    this.socket.on('stop', () => {
      this.stop();
    })

    this.socket.on('rematch', (directionAleaX, directionAleaY) => {
      this.rematch(directionAleaX, directionAleaY);
    })

    this.socket.on('gameInProgress', () => {
      document.getElementById('gameInfo').innerText = 'The Game is in Progress';
    })

    this.socket.on('gamePaused', () => {
      document.getElementById('gameInfo').innerText = 'The Game is Paused';
    })

    this.socket.on('gameOver', () => {
      document.getElementById('gameInfo').innerText = 'The Game is Over';
    })

  }

  /** start this game animation */
  start() {
    this.status = 'Start';
    document.getElementById('playButton').value = 'Stop';
    document.getElementById('gameInfo').innerText = `Speed = ${Math.abs(this.ball.shiftX)}`;
    this.animate();
  }
  /** stop this game animation */
  stop() {
    this.status = 'Stop';
    document.getElementById('playButton').value = 'Continue';
    window.cancelAnimationFrame(this.raf);
  }

  rematch(shiftX, shiftY) {
    this.status = 'Start';
    document.getElementById('playButton').value = 'Stop';
    this.raf = null;
    this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, shiftX, shiftY, this);
    document.getElementById('gameInfo').innerText = `Speed = ${Math.abs(this.ball.shiftX)}`;
  }

  displayScores() {
    document.querySelector('#player1Score').innerText = this.paddleLeft.score
    document.querySelector('#player2Score').innerText = this.paddleRight.score
  }

  resetScores() {
    this.paddleLeft.resetScore();
    this.paddleRight.resetScore();
  }

  initPaddle(){
    document.addEventListener("keydown", e => {
      if (this.status == 'Start' || this.status == 'Rematch') {
        // console.log("Key pressed : ", e.key);
        if(e.key == "ArrowUp"){
          this.socket.emit('arrowUp');
        }else if(e.key == "ArrowDown"){
          this.socket.emit('arrowDown');
        }
      }
    })
  }

  /** animate the game : move and draw */
  animate() {
    this.moveAndDraw();
    this.raf = window.requestAnimationFrame(this.animate.bind(this));
  }
  /** move then draw the bouncing ball */
  moveAndDraw() {
    const ctxt = this.canvas.getContext("2d");
    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // draw and move the ball
    this.ball.move();
    this.ball.draw(ctxt);
    this.paddleLeft.draw(ctxt);
    this.paddleRight.draw(ctxt);
  }

}
