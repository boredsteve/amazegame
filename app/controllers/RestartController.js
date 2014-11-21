var RestartController = function(model, view) {
  this.model = model
  this.view = view
}

RestartController.prototype = {
  start: function() {
    this.view.getRestartButton().addEventListener("click", this.restartGame.bind(this))
  },
  restartGame: function () {
    this.view.resetView();
    this.model.resetMoves();
    console.log(this.model.moves)
  },
}
