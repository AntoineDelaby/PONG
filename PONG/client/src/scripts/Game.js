import Ball from './Ball.js';
import Paddle from './Paddle.js';


const PADDLE_LEFT_IMAGE_SRC = './images/paddle_left.png';
const PADDLE2_RIGHT_IMAGE_SRC = './images/paddle_right.png';

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
    this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, this);
    this.paddleLeft = new Paddle(10, this.canvas.height/2, PADDLE_LEFT_IMAGE_SRC, this);
    this.paddleRight = new Paddle((this.canvas.width - 37), this.canvas.height/2, PADDLE2_RIGHT_IMAGE_SRC, this);
    this.status = 'Wait';
    this.initPaddle();

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

    this.socket.on('0/2 players', () => {
      this.status = 'Wait';
      document.getElementById('player1').style.fontSize = null;
      document.getElementById('player2').style.fontSize = null;
      document.getElementById('playButton').style.display = null;
      document.getElementById('playButton').value = 'Connect';
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
      this.status = 'Cursed';
      document.querySelector('body').insertAdjacentHTML('afterbegin','<div id="boxGameCursed"></div>');
      alert('Your opponent disconnected from the game. Please refresh the page (f5).');
    })

    this.socket.on('server-full', () => {
      alert('Server full, can\'t connect to the game !');
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

  rematch() {
    this.status = 'Start';
    document.getElementById('playButton').value = 'Stop';
    this.raf = null;
    this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, this);
    document.getElementById('gameInfo').innerText = `Speed = ${Math.abs(this.ball.shiftX)}`;
  }

  displayScores() {
    document.querySelector('#player1Score').innerText = this.paddleLeft.score
    document.querySelector('#player2Score').innerText = this.paddleRight.score
  }

  initPaddle(){
    document.addEventListener("keydown", e => {
      e.preventDefault();
      if (this.status == 'Start' || this.status == 'Rematch') {
        // console.log("Key pressed : ", e.key);
        if(e.key == "ArrowUp"){
          this.paddleRight.moveUp();
          this.moveAndDraw();
        }else if(e.key == "ArrowDown"){
          this.paddleRight.moveDown();
          this.moveAndDraw();
        }else if(e.key == "z"){
          this.paddleLeft.moveUp();
          this.moveAndDraw();
        }else if(e.key == "s"){
          this.paddleLeft.moveDown();
          this.moveAndDraw();
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
