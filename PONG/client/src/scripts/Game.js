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
    this.paddle = new Paddle(this.canvas.height/2, this);
  }

  /** start this game animation */
  start() {
    this.animate();
    this.initPaddle();
  }
  /** stop this game animation */
  stop() {
    window.cancelAnimationFrame(this.raf);
  }

  initPaddle(){
    document.addEventListener("keydown", e => {
      e.preventDefault();
      if(e.key == "ArrowUp"){
        this.paddle.moveUp();
        this.moveAndDraw();
      }else if(e.key == "ArrowDown"){
        this.paddle.moveDown();
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
    this.paddle.draw(ctxt);

    // console.log(`Coord paddle x : ${this.paddle.x}`);
    // console.log(`Coord paddle y : ${this.paddle.y}`);
    // console.log(`Coord ball x : ${this.ball.x}`);
    // console.log(`Coord ball y : ${this.ball.y}`);
  }

}
