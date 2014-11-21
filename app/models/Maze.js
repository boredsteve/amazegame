function Maze() {
  this.moves = 0
  this.moves2 = 0
}

Maze.prototype = {
  moveCount: function() {
    this.moves += 1
    console.log("moves is " + this.moves)
  },
  moveCount2: function() {
    this.moves2 += 1
    console.log("moves2 is " + this.moves)
  },
  resetMoves: function() {
    this.moves = 0
    this.moves2 = 0
    console.log("moves after reset " + this.moves)
  }
}
