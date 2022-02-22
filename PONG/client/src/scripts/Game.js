import Ball from './Ball.js';
import Paddle from './Paddle.js';


/**
 * a Game animates a ball bouncing in a canvas
 */
export default class Game {

  /**
   * build a Game
   *
   * @param  {Canvas} canvas the canvas of the game
   */
  constructor(canvas) {
    this.raf = null;
    this.canvas = canvas;
    this.ball = new Ball(this.canvas.width/2, this.canvas.height/2, this);
    this.paddleLeft = new Paddle(10, this.canvas.height/2, this);
    this.paddleRight = new Paddle((this.canvas.width - 37), this.canvas.height/2, this);
  }

  /** start this game animation */
  start() {
    this.animate();
    this.initPaddle();
  }
  /** stop this game animation */
  stop() {
    window.cancelAnimationFrame(this.raf);
    if(this.ball.x <= 0){
      console.log("Point pour j2");
      MY.player2Score += 1;
    }else if(this.ball.x + this.ball.width >= this.canvas.width){
      MY.player1Score += 1;
      console.log("Point pour j1");
    }
    document.getElementById("scores").innerHTML = `${MY.player1Score} : ${MY.player2Score}`;
  }

  initPaddle(){
    document.addEventListener("keydown", e => {
      e.preventDefault();
      console.log("Key pressed : ", e.key);
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
