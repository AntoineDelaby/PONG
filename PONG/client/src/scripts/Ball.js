import Mobile from './Mobile.js';


// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const SHIFT_X = 8;
const SHIFT_Y = 4;


/**
 * a Ball is a mobile with a ball as image and that bounces in a Game (inside the game's canvas)
 */
export default class Ball extends Mobile {

  /**  build a ball
   *
   * @param  {number} x       the x coordinate
   * @param  {number} y       the y coordinate
   * @param  {Game} theGame   the Game this ball belongs to
   */
  constructor(x, y, theGame) {
    super(x, y, BALL_IMAGE_SRC , SHIFT_X, SHIFT_Y);
    this.theGame = theGame;
  }


  /**
   * when moving a ball bounces inside the limit of its game's canvas
   */
  move() {
    const gamePaddle = this.theGame.paddle;
    if (this.y <= 0 || (this.y+this.height >= this.theGame.canvas.height)) {
      this.shiftY = - this.shiftY;    // rebond en haut ou en bas
    }
    else if(((this.x >= (gamePaddle.x + gamePaddle.width)) && (this.x <= (gamePaddle.x + gamePaddle.width + 10))) && ((this.y >= gamePaddle.y) && (this.y <= (gamePaddle.y + gamePaddle.height)))){
      this.shiftX = - this.shiftX;    // rebond sur la raquette
      console.log("RAQUETTE");
    }
    else if (this.x <= 0) {
      this.stopMoving();
    }else if(this.x + this.width >= this.theGame.canvas.width ){
      this.shiftX = - this.shiftX;    // rebond à droite
    }
    super.move();
  }

}
