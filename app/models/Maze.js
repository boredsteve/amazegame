function Maze() {
  this.moves = 0
}

Maze.prototype = {
  moveCount: function() {
    this.moves += 1
    console.log("moves is " + this.moves)

  }
}
