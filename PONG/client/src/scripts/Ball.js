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
    if (this.collidesWithWall()) {
      this.shiftX = this.addBallSpeedX();
      this.shiftY = - this.shiftY;    // rebond en haut ou en bas
    } else if((this.shiftX < 0) && this.collidesWithPaddleLeft()) { // rebond sur la raquette de gauche
      this.shiftX = Math.abs(this.addBallSpeedX());
      this.shiftY = this.getAngle(gamePaddleLeft);
    } else if((this.shiftX > 0) && this.collidesWithPaddleRight()) { // rebond sur la raquette de droite
      this.shiftX = - Math.abs(this.addBallSpeedX());
      this.shiftY = this.getAngle(gamePaddleRight);
    } else if (this.collidesWithLeftBorder()) {
      if (this.shiftX != 0) {
        gamePaddleRight.addPoint();
        this.gameOver();
      }
    } else if (this.collidesWithRightBorder()) {
      if (this.shiftX != 0) {
        gamePaddleLeft.addPoint();
        this.gameOver();
      }
    }
    super.move();
  }

  gameOver() {
    this.stopMoving();
    this.theGame.displayScores();
    this.theGame.status = 'Rematch';
    document.getElementById('playButton').value = this.theGame.status;
    this.theGame.socket.emit('req-over');
  }

  getAngle(paddle) {
    const ballCenterY = Math.floor((this.y + (this.y + this.height)) / 2);
    const paddleCenterY = Math.floor((paddle.y + (paddle.y + paddle.height)) / 2);
    const nbSections = 8;
    const sectionHeight = paddleCenterY / nbSections;
    const value = ballCenterY - paddleCenterY;

    let res = 0;

    if (value < 0) {
      res = Math.floor(value/sectionHeight)
    } else if (value > 0) {
      res = Math.floor(value/sectionHeight)+1
    }
    return res;
  }

  addBallSpeedX() {
    const newSpeed = this.shiftX < 0 ? - Math.abs(this.shiftX) - 1 : Math.abs(this.shiftX) + 1;
    this.updateSpeedDisplay();
    return newSpeed;
  }

  updateSpeedDisplay() {
    document.getElementById('gameInfo').innerText = `Speed = ${Math.abs(this.shiftX)}`;
  }

  collidesWithWall() {
    return (this.y <= 0 || (this.y + this.height >= this.theGame.canvas.height));
  }

  collidesWithPaddleLeft() {
    const gamePaddleLeft = this.theGame.paddleLeft;
    return ((this.x >= gamePaddleLeft.x) && (this.x <= (gamePaddleLeft.x + gamePaddleLeft.width))) && ((this.y >= (gamePaddleLeft.y - this.height)) && (this.y <= (gamePaddleLeft.y + gamePaddleLeft.height)));
  }

  collidesWithPaddleRight() {
    const gamePaddleRight = this.theGame.paddleRight;
    return (((this.x + this.width) >= gamePaddleRight.x) && ((this.x + this.width) <= (gamePaddleRight.x + gamePaddleRight.width))) && ((this.y >= (gamePaddleRight.y - this.height)) && (this.y <= (gamePaddleRight.y + gamePaddleRight.height)));
  }

  collidesWithLeftBorder() {
    return this.x <= 0;
  }

  collidesWithRightBorder() {
    return ((this.x + this.width) >= this.theGame.canvas.width);
  }

}