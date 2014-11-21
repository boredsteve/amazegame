var KEY = {
    P1_LEFT:  37,
    P1_RIGHT: 39,
    P1_UP:    38,
    P1_DOWN:  40,
    P2_LEFT:  65,
    P2_RIGHT: 68,
    P2_UP:    87,
    P2_DOWN:  83
}

var MazeController = function() {
  this.view  = new MazeView()
  this.restartCtrl = new RestartController()
  // this.model = this.restartCtrl.getMaze()
  this.model = new Maze()
}

MazeController.prototype = {
  start: function() {
    this.bindListeners()
    // console.log("number of moves " + this.model.moves);
  },


  bindListeners: function() {
    document.addEventListener('keyup', this.keyFunction.bind(this))
    // binds "this" to the MazeController instead of the event
  },
  keyFunction: function(event) {

    switch (event.keyCode) {

        case KEY.P1_LEFT:
             this.view.moveLeft();
             this.model.moveCount();
            // console.log("left key pressed")
            // console.log("number of moves " + this.model.moves);
            break;
        case KEY.P1_RIGHT:
             this.view.moveRight();
             this.model.moveCount();
             // console.log("right key pressed")
             // console.log("number of moves " + this.model.moves);
            break;
        case KEY.P1_UP:
             this.view.moveUp();
             this.model.moveCount();
             // console.log("up key pressed")
             // console.log("number of moves " + this.model.moves);
            break;
        case KEY.P1_DOWN:
            this.view.moveDown();
             this.model.moveCount();
             // console.log("down key pressed")
             // console.log("number of moves " + this.model.moves);
            break;
        case KEY.P2_LEFT:
             this.view.moveLeft2();
             this.model.moveCount2();
            // console.log("left key pressed")
            // console.log("number of moves " + this.model.moves);
            break;
        case KEY.P2_RIGHT:
             this.view.moveRight2();
             this.model.moveCount2();
             // console.log("right key pressed")
             // console.log("number of moves " + this.model.moves);
            break;
        case KEY.P2_UP:
             this.view.moveUp2();
             this.model.moveCount2();
             // console.log("up key pressed")
             // console.log("number of moves " + this.model.moves);
            break;
        case KEY.P2_DOWN:
            this.view.moveDown2();
             this.model.moveCount2();
             // console.log("down key pressed")
             // console.log("number of moves " + this.model.moves);
            break;


        default:
            return;
    }
  }

};
