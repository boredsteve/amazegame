var KEY = {
    LEFT:  37,
    RIGHT: 39,
    UP:    38,
    DOWN:  40
}

var MazeController = function() {
  this.view  = new MazeView()
  this.restartCtrl = new RestartController()
  this.model = this.restartCtrl.getMaze()
  // this.model = new Maze()
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

        case KEY.LEFT:
             this.view.moveLeft();
             this.model.moveCount();
            // console.log("left key pressed")
            // console.log("number of moves " + this.model.moves);
            break;
        case KEY.RIGHT:
             this.view.moveRight();
             this.model.moveCount();
             // console.log("right key pressed")
             // console.log("number of moves " + this.model.moves);
            break;
        case KEY.UP:
             this.view.moveUp();
             this.model.moveCount();
             // console.log("up key pressed")
             // console.log("number of moves " + this.model.moves);
            break;
        case KEY.DOWN:
            this.view.moveDown();
             this.model.moveCount();
             // console.log("down key pressed")
             // console.log("number of moves " + this.model.moves);
            break;

        default:
            return;
    }
  }

};
