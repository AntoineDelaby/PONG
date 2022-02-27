import Mobile from './Mobile.js';


// default values for a Ball : image and shifts
const BALL_IMAGE_SRC = './images/balle24.png';
const SHIFT_X = 4;
const SHIFT_Y = 0;


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
    const gamePaddleLeft = this.theGame.paddleLeft;
    const gamePaddleRight = this.theGame.paddleRight;
    if (this.y <= 0 || (this.y+this.height >= this.theGame.canvas.height)) {
      this.shiftY = - this.shiftY;    // rebond en haut ou en bas
    } else if((this.shiftX < 0) && ((this.x >= gamePaddleLeft.x) && (this.x <= (gamePaddleLeft.x + gamePaddleLeft.width))) && ((this.y >= (gamePaddleLeft.y - this.height)) && (this.y <= (gamePaddleLeft.y + gamePaddleLeft.height)))){
      this.shiftX = Math.abs(this.shiftX);    // rebond sur la raquette de gauche
      this.shiftY = this.getAngle(Math.floor((this.y + (this.y + this.height)) / 2), Math.floor((gamePaddleLeft.y + (gamePaddleLeft.y + gamePaddleLeft.height)) / 2), gamePaddleLeft.height);
    } else if((this.shiftX > 0) && (((this.x + this.width) >= gamePaddleRight.x) && ((this.x + this.width) <= (gamePaddleRight.x + gamePaddleRight.width))) && ((this.y >= (gamePaddleRight.y - this.height)) && (this.y <= (gamePaddleRight.y + gamePaddleRight.height)))){
      this.shiftX = - Math.abs(this.shiftX);    // rebond sur la raquette de droite
      this.shiftY = this.getAngle(Math.floor((this.y + (this.y + this.height)) / 2), Math.floor((gamePaddleRight.y + (gamePaddleRight.y + gamePaddleRight.height)) / 2), gamePaddleRight.height);
    } else if (this.x <= 0) {
      if (this.shiftX != 0) {
        this.stopMoving();
        gamePaddleRight.addPoint();
        this.theGame.displayScores();
        this.theGame.status = 'Rematch';
        document.getElementById('playButton').value = this.theGame.status;
      }
    } else if (this.x + this.width >= this.theGame.canvas.width) {
      if (this.shiftX != 0) {
        this.stopMoving();
        gamePaddleLeft.addPoint();
        this.theGame.displayScores();
        this.theGame.status = 'Rematch';
        document.getElementById('playButton').value = this.theGame.status;
      }
    }
    super.move();
  }

  getAngle(ballY, paddleY, paddleHeight) {
    const nbSections = 8;
    const sectionHeight = paddleHeight / nbSections;
    const value = ballY - paddleY;
    let res = 0;

    if (value < 0) {
      res = Math.floor(value/sectionHeight)
    } else if (value > 0) {
      res = Math.floor(value/sectionHeight)+1
    }
    console.log(res);
    return res;
  }

}