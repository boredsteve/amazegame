function Maze() {
  this.moves = 0
}

Maze.prototype = {
  moveCount: function() {
    this.moves += 1

  }
}
