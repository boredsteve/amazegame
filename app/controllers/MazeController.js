var KEY = {
    LEFT:  37,
    RIGHT: 39,
    UP:    38,
    DOWN:  40
}

var MazeController = function() {
  this.view  = new MazeView()
  this.model = new Maze()
}

MazeController.prototype = {
  start: function() {
    this.bindListeners()
  },
  bindListeners: function() {
    document.addEventListener('keyup', this.keyFunction.bind(this))
  },
  keyFunction: function(event) {
    switch (event.keyCode) {
        case KEY.LEFT:
            this.view.moveLeft();
            this.model.moveCount();
            break;
        case KEY.RIGHT:
            this.view.moveRight();
            this.model.moveCount();
            break;
        case KEY.UP:
            this.view.moveLeft();
            this.model.moveCount();
            break;
        case KEY.DOWN:
            this.view.moveDown();
            this.model.moveCount();
            break;

        default:
            return;
    }
  }
};
