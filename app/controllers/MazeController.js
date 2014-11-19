function MazeController() {
  this.view  = new MazeView()
  this.model = new Maze()
}

MazeController.prototype = {
  start: function() {
    this.bindListeners()
  },
  bindListeners: function() {
    .addEventListener('click', this.movePlayer.bind(this))
  },
  movePlayer: function() {
    this.model.moveCount()
    var newCount = this.model.moves
    this.view.showCount(newCount)
  }
};
