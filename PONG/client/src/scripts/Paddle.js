import Mobile from './Mobile.js';

const PADDLE_IMAGE_SRC = './images/paddle.png';
const SHIFT_Y = 30;

export default class Paddle extends Mobile {
   
    constructor(y, theGame) {
        super(10, y, PADDLE_IMAGE_SRC , 0, SHIFT_Y);
        this.theGame = theGame;
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
}
