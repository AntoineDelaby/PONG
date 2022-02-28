import Ball from './Ball.js';
import Paddle from './Paddle.js';


const PADDLE_LEFT_IMAGE_SRC = './images/paddle_left.png';
const PADDLE2_RIGHT_IMAGE_SRC = './images/paddle_right.png';

const socket = io();

socket.on('newPlayer', playerId => {
  console.log(`${playerId} joined the game !`);
})


/**
 * a Game animates a ball bouncing in a canvas
 */
export default class Game {
  status;

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
    this.status = 'Stop';
    this.initPaddle();
  }

  /** start this game animation */
  start() {
    this.status = 'Start';
    document.getElementById('playButton').value = 'Stop';
    document.getElementById('speed').innerText = `Speed = ${Math.abs(this.ball.shiftX)}`;
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
    document.getElementById('speed').innerText = `Speed = ${Math.abs(this.ball.shiftX)}`;
  }

  displayScores() {
    document.querySelector('#player1Score').innerText = this.paddleLeft.score
    document.querySelector('#player2Score').innerText = this.paddleRight.score
  }

  initPaddle(){
    document.addEventListener("keydown", e => {
      e.preventDefault();
      if (this.status != 'Stop') {
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
