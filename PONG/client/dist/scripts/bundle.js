/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/Ball.js":
/*!*****************************!*\
  !*** ./src/scripts/Ball.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ball)\n/* harmony export */ });\n/* harmony import */ var _Mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mobile.js */ \"./src/scripts/Mobile.js\");\n\r\n\r\n\r\n// default values for a Ball : image and shifts\r\nconst BALL_IMAGE_SRC = './images/balle24.png';\r\nconst SHIFT_X = 8;\r\nconst SHIFT_Y = 4;\r\n\r\n\r\n/**\r\n * a Ball is a mobile with a ball as image and that bounces in a Game (inside the game's canvas)\r\n */\r\nclass Ball extends _Mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n  /**  build a ball\r\n   *\r\n   * @param  {number} x       the x coordinate\r\n   * @param  {number} y       the y coordinate\r\n   * @param  {Game} theGame   the Game this ball belongs to\r\n   */\r\n  constructor(x, y, theGame) {\r\n    super(x, y, BALL_IMAGE_SRC , SHIFT_X, SHIFT_Y);\r\n    this.theGame = theGame;\r\n  }\r\n\r\n\r\n  /**\r\n   * when moving a ball bounces inside the limit of its game's canvas\r\n   */\r\n  move() {\r\n    if (this.y <= 0 || (this.y+this.height >= this.theGame.canvas.height)) {\r\n      this.shiftY = - this.shiftY;    // rebond en haut ou en bas\r\n    }\r\n    else if (this.x <= 0 || this.x + this.width >= this.theGame.canvas.width ) {\r\n      this.shiftX = - this.shiftX;    // rebond en gauche ou à droite\r\n    }\r\n    super.move();\r\n  }\r\n\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9CYWxsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxtQkFBbUIsa0RBQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbmcvLi9zcmMvc2NyaXB0cy9CYWxsLmpzP2I1YmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vYmlsZSBmcm9tICcuL01vYmlsZS5qcyc7XHJcblxyXG5cclxuLy8gZGVmYXVsdCB2YWx1ZXMgZm9yIGEgQmFsbCA6IGltYWdlIGFuZCBzaGlmdHNcclxuY29uc3QgQkFMTF9JTUFHRV9TUkMgPSAnLi9pbWFnZXMvYmFsbGUyNC5wbmcnO1xyXG5jb25zdCBTSElGVF9YID0gODtcclxuY29uc3QgU0hJRlRfWSA9IDQ7XHJcblxyXG5cclxuLyoqXHJcbiAqIGEgQmFsbCBpcyBhIG1vYmlsZSB3aXRoIGEgYmFsbCBhcyBpbWFnZSBhbmQgdGhhdCBib3VuY2VzIGluIGEgR2FtZSAoaW5zaWRlIHRoZSBnYW1lJ3MgY2FudmFzKVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFsbCBleHRlbmRzIE1vYmlsZSB7XHJcblxyXG4gIC8qKiAgYnVpbGQgYSBiYWxsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggICAgICAgdGhlIHggY29vcmRpbmF0ZVxyXG4gICAqIEBwYXJhbSAge251bWJlcn0geSAgICAgICB0aGUgeSBjb29yZGluYXRlXHJcbiAgICogQHBhcmFtICB7R2FtZX0gdGhlR2FtZSAgIHRoZSBHYW1lIHRoaXMgYmFsbCBiZWxvbmdzIHRvXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgdGhlR2FtZSkge1xyXG4gICAgc3VwZXIoeCwgeSwgQkFMTF9JTUFHRV9TUkMgLCBTSElGVF9YLCBTSElGVF9ZKTtcclxuICAgIHRoaXMudGhlR2FtZSA9IHRoZUdhbWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogd2hlbiBtb3ZpbmcgYSBiYWxsIGJvdW5jZXMgaW5zaWRlIHRoZSBsaW1pdCBvZiBpdHMgZ2FtZSdzIGNhbnZhc1xyXG4gICAqL1xyXG4gIG1vdmUoKSB7XHJcbiAgICBpZiAodGhpcy55IDw9IDAgfHwgKHRoaXMueSt0aGlzLmhlaWdodCA+PSB0aGlzLnRoZUdhbWUuY2FudmFzLmhlaWdodCkpIHtcclxuICAgICAgdGhpcy5zaGlmdFkgPSAtIHRoaXMuc2hpZnRZOyAgICAvLyByZWJvbmQgZW4gaGF1dCBvdSBlbiBiYXNcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMueCA8PSAwIHx8IHRoaXMueCArIHRoaXMud2lkdGggPj0gdGhpcy50aGVHYW1lLmNhbnZhcy53aWR0aCApIHtcclxuICAgICAgdGhpcy5zaGlmdFggPSAtIHRoaXMuc2hpZnRYOyAgICAvLyByZWJvbmQgZW4gZ2F1Y2hlIG91IMOgIGRyb2l0ZVxyXG4gICAgfVxyXG4gICAgc3VwZXIubW92ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/Ball.js\n");

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball.js */ \"./src/scripts/Ball.js\");\n/* harmony import */ var _Paddle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paddle.js */ \"./src/scripts/Paddle.js\");\n\r\n\r\n\r\n\r\n/**\r\n * a Game animates a ball bouncing in a canvas\r\n */\r\nclass Game {\r\n\r\n  /**\r\n   * build a Game\r\n   *\r\n   * @param  {Canvas} canvas the canvas of the game\r\n   */\r\n  constructor(canvas) {\r\n    this.raf = null;\r\n    this.canvas = canvas;\r\n    this.ball = new _Ball_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas.width/2, this.canvas.height/2, this);\r\n    this.paddle = new _Paddle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.canvas.height - 50, this);\r\n  }\r\n\r\n  /** start this game animation */\r\n  start() {\r\n    this.animate();\r\n    this.initPaddle();\r\n  }\r\n  /** stop this game animation */\r\n  stop() {\r\n    window.cancelAnimationFrame(this.raf);\r\n  }\r\n\r\n  initPaddle(){\r\n    document.addEventListener(\"keydown\", e => {\r\n      e.preventDefault();\r\n      if(e.key === \"ArrowUp\"){\r\n        this.paddle.moveUp();\r\n        this.moveAndDraw();\r\n        console.log(\"go up\");\r\n      }else if(e.key === \"ArrowDown\"){\r\n        this.paddle.moveDown();\r\n        console.log(\"go down\");\r\n        this.moveAndDraw();\r\n      }\r\n    })\r\n  }\r\n\r\n  /** animate the game : move and draw */\r\n  animate() {\r\n    this.moveAndDraw();\r\n    this.raf = window.requestAnimationFrame(this.animate.bind(this));\r\n  }\r\n  /** move then draw the bouncing ball */\r\n  moveAndDraw() {\r\n    const ctxt = this.canvas.getContext(\"2d\");\r\n    ctxt.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    // draw and move the ball\r\n    this.ball.move();\r\n    this.ball.draw(ctxt);\r\n    this.paddle.draw(ctxt);\r\n\r\n    // console.log(`Coord paddle x : ${this.paddle.x}`);\r\n    // console.log(`Coord paddle y : ${this.paddle.y}`);\r\n    // console.log(`Coord ball x : ${this.ball.x}`);\r\n    // console.log(`Coord ball y : ${this.ball.y}`);\r\n  }\r\n\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9HYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QjtBQUNJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFJO0FBQ3hCLHNCQUFzQixrREFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjO0FBQ3JELHVDQUF1QyxjQUFjO0FBQ3JELHFDQUFxQyxZQUFZO0FBQ2pELHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbmcvLi9zcmMvc2NyaXB0cy9HYW1lLmpzP2E5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGwgZnJvbSAnLi9CYWxsLmpzJztcclxuaW1wb3J0IFBhZGRsZSBmcm9tICcuL1BhZGRsZS5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIGEgR2FtZSBhbmltYXRlcyBhIGJhbGwgYm91bmNpbmcgaW4gYSBjYW52YXNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG5cclxuICAvKipcclxuICAgKiBidWlsZCBhIEdhbWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSAge0NhbnZhc30gY2FudmFzIHRoZSBjYW52YXMgb2YgdGhlIGdhbWVcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgIHRoaXMucmFmID0gbnVsbDtcclxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgdGhpcy5iYWxsID0gbmV3IEJhbGwodGhpcy5jYW52YXMud2lkdGgvMiwgdGhpcy5jYW52YXMuaGVpZ2h0LzIsIHRoaXMpO1xyXG4gICAgdGhpcy5wYWRkbGUgPSBuZXcgUGFkZGxlKHRoaXMuY2FudmFzLmhlaWdodCAtIDUwLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKiBzdGFydCB0aGlzIGdhbWUgYW5pbWF0aW9uICovXHJcbiAgc3RhcnQoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgIHRoaXMuaW5pdFBhZGRsZSgpO1xyXG4gIH1cclxuICAvKiogc3RvcCB0aGlzIGdhbWUgYW5pbWF0aW9uICovXHJcbiAgc3RvcCgpIHtcclxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZik7XHJcbiAgfVxyXG5cclxuICBpbml0UGFkZGxlKCl7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZihlLmtleSA9PT0gXCJBcnJvd1VwXCIpe1xyXG4gICAgICAgIHRoaXMucGFkZGxlLm1vdmVVcCgpO1xyXG4gICAgICAgIHRoaXMubW92ZUFuZERyYXcoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdvIHVwXCIpO1xyXG4gICAgICB9ZWxzZSBpZihlLmtleSA9PT0gXCJBcnJvd0Rvd25cIil7XHJcbiAgICAgICAgdGhpcy5wYWRkbGUubW92ZURvd24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdvIGRvd25cIik7XHJcbiAgICAgICAgdGhpcy5tb3ZlQW5kRHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqIGFuaW1hdGUgdGhlIGdhbWUgOiBtb3ZlIGFuZCBkcmF3ICovXHJcbiAgYW5pbWF0ZSgpIHtcclxuICAgIHRoaXMubW92ZUFuZERyYXcoKTtcclxuICAgIHRoaXMucmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG4gIC8qKiBtb3ZlIHRoZW4gZHJhdyB0aGUgYm91bmNpbmcgYmFsbCAqL1xyXG4gIG1vdmVBbmREcmF3KCkge1xyXG4gICAgY29uc3QgY3R4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGN0eHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgLy8gZHJhdyBhbmQgbW92ZSB0aGUgYmFsbFxyXG4gICAgdGhpcy5iYWxsLm1vdmUoKTtcclxuICAgIHRoaXMuYmFsbC5kcmF3KGN0eHQpO1xyXG4gICAgdGhpcy5wYWRkbGUuZHJhdyhjdHh0KTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhgQ29vcmQgcGFkZGxlIHggOiAke3RoaXMucGFkZGxlLnh9YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgQ29vcmQgcGFkZGxlIHkgOiAke3RoaXMucGFkZGxlLnl9YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgQ29vcmQgYmFsbCB4IDogJHt0aGlzLmJhbGwueH1gKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGBDb29yZCBiYWxsIHkgOiAke3RoaXMuYmFsbC55fWApO1xyXG4gIH1cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/Game.js\n");

/***/ }),

/***/ "./src/scripts/Mobile.js":
/*!*******************************!*\
  !*** ./src/scripts/Mobile.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mobile)\n/* harmony export */ });\n/**\r\n  A mobile is defined by its coordinates, an image and a \"speed\" defined by horizontal and vertical shift values\r\n*/\r\nclass Mobile {\r\n  /**\r\n   * buils a Mobile\r\n   *\r\n   * @param  {number} x          the x coordinate of this mobile\r\n   * @param  {number} y          the y coordinate of this mobile\r\n   * @param  {string} imgSrc     this mobile's image src\r\n   * @param  {number} shiftX = 0 the horizontal shift \"speed\"\r\n   * @param  {number} shiftY = 0 the vertical shift \"speed\"\r\n   */\r\n  constructor(x, y, imgSrc, shiftX = 0, shiftY = 0) {\r\n    this.y = y;\r\n    this.x = x;\r\n\t  this.img = new Image();\r\n    this.img.src = imgSrc;\r\n    this.shiftX = shiftX;\r\n    this.shiftY = shiftY;\r\n  }\r\n\r\n  /** @return {number} the width of the mobile, ie. its images's width */\r\n  get width() {\r\n    return this.img.width;\r\n  }\r\n  /** @return {number} the width of the mobile, ie. its images's height */\r\n  get height() {\r\n    return this.img.height;\r\n  }\r\n  /** this mobile moves : horizontal and vertical shifts are added to coordinates */\r\n  move() {\r\n    this.x = this.x + this.shiftX;\r\n    this.y = this.y + this.shiftY;\r\n  }\r\n  /** draw this mobile's image at its coordinates in the given context\r\n  * @param {CanvasRenderingContext2D} ctxt - the drawing context\r\n  */\r\n  draw(ctxt) {\r\n    ctxt.drawImage(this.img,this.x,this.y);\r\n  }\r\n  /** this mobile stops moving : speed becomes 0 */\r\n  stopMoving() {\r\n    this.shiftX = 0;\r\n    this.shiftY = 0;\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9Nb2JpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwQkFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb25nLy4vc3JjL3NjcmlwdHMvTW9iaWxlLmpzPzQwY2UiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAgQSBtb2JpbGUgaXMgZGVmaW5lZCBieSBpdHMgY29vcmRpbmF0ZXMsIGFuIGltYWdlIGFuZCBhIFwic3BlZWRcIiBkZWZpbmVkIGJ5IGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHNoaWZ0IHZhbHVlc1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2JpbGUge1xyXG4gIC8qKlxyXG4gICAqIGJ1aWxzIGEgTW9iaWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHggICAgICAgICAgdGhlIHggY29vcmRpbmF0ZSBvZiB0aGlzIG1vYmlsZVxyXG4gICAqIEBwYXJhbSAge251bWJlcn0geSAgICAgICAgICB0aGUgeSBjb29yZGluYXRlIG9mIHRoaXMgbW9iaWxlXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBpbWdTcmMgICAgIHRoaXMgbW9iaWxlJ3MgaW1hZ2Ugc3JjXHJcbiAgICogQHBhcmFtICB7bnVtYmVyfSBzaGlmdFggPSAwIHRoZSBob3Jpem9udGFsIHNoaWZ0IFwic3BlZWRcIlxyXG4gICAqIEBwYXJhbSAge251bWJlcn0gc2hpZnRZID0gMCB0aGUgdmVydGljYWwgc2hpZnQgXCJzcGVlZFwiXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoeCwgeSwgaW1nU3JjLCBzaGlmdFggPSAwLCBzaGlmdFkgPSAwKSB7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gICAgdGhpcy54ID0geDtcclxuXHQgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBpbWdTcmM7XHJcbiAgICB0aGlzLnNoaWZ0WCA9IHNoaWZ0WDtcclxuICAgIHRoaXMuc2hpZnRZID0gc2hpZnRZO1xyXG4gIH1cclxuXHJcbiAgLyoqIEByZXR1cm4ge251bWJlcn0gdGhlIHdpZHRoIG9mIHRoZSBtb2JpbGUsIGllLiBpdHMgaW1hZ2VzJ3Mgd2lkdGggKi9cclxuICBnZXQgd2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbWcud2lkdGg7XHJcbiAgfVxyXG4gIC8qKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSB3aWR0aCBvZiB0aGUgbW9iaWxlLCBpZS4gaXRzIGltYWdlcydzIGhlaWdodCAqL1xyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbWcuaGVpZ2h0O1xyXG4gIH1cclxuICAvKiogdGhpcyBtb2JpbGUgbW92ZXMgOiBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbCBzaGlmdHMgYXJlIGFkZGVkIHRvIGNvb3JkaW5hdGVzICovXHJcbiAgbW92ZSgpIHtcclxuICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuc2hpZnRYO1xyXG4gICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5zaGlmdFk7XHJcbiAgfVxyXG4gIC8qKiBkcmF3IHRoaXMgbW9iaWxlJ3MgaW1hZ2UgYXQgaXRzIGNvb3JkaW5hdGVzIGluIHRoZSBnaXZlbiBjb250ZXh0XHJcbiAgKiBAcGFyYW0ge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4dCAtIHRoZSBkcmF3aW5nIGNvbnRleHRcclxuICAqL1xyXG4gIGRyYXcoY3R4dCkge1xyXG4gICAgY3R4dC5kcmF3SW1hZ2UodGhpcy5pbWcsdGhpcy54LHRoaXMueSk7XHJcbiAgfVxyXG4gIC8qKiB0aGlzIG1vYmlsZSBzdG9wcyBtb3ZpbmcgOiBzcGVlZCBiZWNvbWVzIDAgKi9cclxuICBzdG9wTW92aW5nKCkge1xyXG4gICAgdGhpcy5zaGlmdFggPSAwO1xyXG4gICAgdGhpcy5zaGlmdFkgPSAwO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/Mobile.js\n");

/***/ }),

/***/ "./src/scripts/Paddle.js":
/*!*******************************!*\
  !*** ./src/scripts/Paddle.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Paddle)\n/* harmony export */ });\n/* harmony import */ var _Mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mobile.js */ \"./src/scripts/Mobile.js\");\n\r\n\r\nconst PADDLE_IMAGE_SRC = './images/paddle.png';\r\nconst SHIFT_Y = 4;\r\n\r\nclass Paddle extends _Mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    theGame;\r\n   \r\n    constructor(y, theGame) {\r\n        super(10, y, PADDLE_IMAGE_SRC , 0, SHIFT_Y);\r\n        this.theGame = theGame;\r\n    }\r\n\r\n    moveUp(){\r\n        if (this.y - + this.height <= 0) {\r\n            this.shiftY = - this.shiftY;\r\n            console.log(\"Need to go down\");\r\n        }\r\n        super.move();\r\n    }\r\n\r\n    moveDown() {\r\n        if (this.y + this.height >= this.theGame.canvas.height) {\r\n            this.shiftY = - this.shiftY;\r\n            console.log(\"Need to go up\");\r\n        }\r\n        super.move();\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9QYWRkbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDZSxxQkFBcUIsa0RBQU07QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9uZy8uL3NyYy9zY3JpcHRzL1BhZGRsZS5qcz9iMWY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2JpbGUgZnJvbSAnLi9Nb2JpbGUuanMnO1xyXG5cclxuY29uc3QgUEFERExFX0lNQUdFX1NSQyA9ICcuL2ltYWdlcy9wYWRkbGUucG5nJztcclxuY29uc3QgU0hJRlRfWSA9IDQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWRkbGUgZXh0ZW5kcyBNb2JpbGUge1xyXG5cclxuICAgIHRoZUdhbWU7XHJcbiAgIFxyXG4gICAgY29uc3RydWN0b3IoeSwgdGhlR2FtZSkge1xyXG4gICAgICAgIHN1cGVyKDEwLCB5LCBQQURETEVfSU1BR0VfU1JDICwgMCwgU0hJRlRfWSk7XHJcbiAgICAgICAgdGhpcy50aGVHYW1lID0gdGhlR2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlVXAoKXtcclxuICAgICAgICBpZiAodGhpcy55IC0gKyB0aGlzLmhlaWdodCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZnRZID0gLSB0aGlzLnNoaWZ0WTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZWVkIHRvIGdvIGRvd25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLm1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlRG93bigpIHtcclxuICAgICAgICBpZiAodGhpcy55ICsgdGhpcy5oZWlnaHQgPj0gdGhpcy50aGVHYW1lLmNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlmdFkgPSAtIHRoaXMuc2hpZnRZO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5lZWQgdG8gZ28gdXBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLm1vdmUoKTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/Paddle.js\n");

/***/ }),

/***/ "./src/scripts/pong.js":
/*!*****************************!*\
  !*** ./src/scripts/pong.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ \"./src/scripts/Game.js\");\n\r\n\r\n\r\n\r\nconst init = () => {\r\n  const theField = document.getElementById(\"field\");\r\n  const theGame = new _Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](theField);\r\n\r\n  document.getElementById('start').addEventListener(\"click\", () => startGame(theGame) );\r\n}\r\n\r\nwindow.addEventListener(\"load\",init);\r\n\r\n// true iff game is started\r\nlet started = false;\r\n/** start and stop a game\r\n * @param {Game} theGame - the game to start and stop\r\n */\r\nconst startGame = theGame => {\r\n  if (!started) {\r\n    theGame.start();\r\n    document.getElementById('start').value = 'stop';\r\n  }\r\n  else {\r\n    document.getElementById('start').value = 'jouer';\r\n    theGame.stop();\r\n  }\r\n  started = ! started;\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wb25nLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWE7QUFDYjtBQUM2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbmcvLi9zcmMvc2NyaXB0cy9wb25nLmpzPzkyOGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lLmpzJztcclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGhlRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkXCIpO1xyXG4gIGNvbnN0IHRoZUdhbWUgPSBuZXcgR2FtZSh0aGVGaWVsZCk7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzdGFydEdhbWUodGhlR2FtZSkgKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsaW5pdCk7XHJcblxyXG4vLyB0cnVlIGlmZiBnYW1lIGlzIHN0YXJ0ZWRcclxubGV0IHN0YXJ0ZWQgPSBmYWxzZTtcclxuLyoqIHN0YXJ0IGFuZCBzdG9wIGEgZ2FtZVxyXG4gKiBAcGFyYW0ge0dhbWV9IHRoZUdhbWUgLSB0aGUgZ2FtZSB0byBzdGFydCBhbmQgc3RvcFxyXG4gKi9cclxuY29uc3Qgc3RhcnRHYW1lID0gdGhlR2FtZSA9PiB7XHJcbiAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICB0aGVHYW1lLnN0YXJ0KCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS52YWx1ZSA9ICdzdG9wJztcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS52YWx1ZSA9ICdqb3Vlcic7XHJcbiAgICB0aGVHYW1lLnN0b3AoKTtcclxuICB9XHJcbiAgc3RhcnRlZCA9ICEgc3RhcnRlZDtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/pong.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/pong.js");
/******/ 	
/******/ })()
;