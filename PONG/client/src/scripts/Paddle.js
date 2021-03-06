import Mobile from './Mobile.js';

const SHIFT_Y = 50;

export default class Paddle extends Mobile {
    score;
   
    constructor(x, y, paddleImg, theGame) {
        super(x, y, paddleImg, 0, SHIFT_Y);
        this.theGame = theGame;
        this.score = 0;
    }

    moveUp(){
        if (this.y <= 0) {
            this.shiftY = - this.shiftY;
        }else {
            if(this.shiftY > 0) {
                this.shiftY = - this.shiftY;
            }
            super.move();
        }
    }

    moveDown() {
        if (this.y + this.height >= this.theGame.canvas.height) {
            this.shiftY = - this.shiftY;
        }else {
            if(this.shiftY < 0) {
                this.shiftY = - this.shiftY;
            }
            super.move();
        }
    }

    addPoint() {
        this.score ++;
    }

    resetScore() {
        this.score = 0;
    }
}
