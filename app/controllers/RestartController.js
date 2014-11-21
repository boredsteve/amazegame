var RestartController = function() {
this.model = new Maze()
}

RestartController.prototype = {
  start: function() {
    var restartButton = document.querySelector("#restartgame");
    restartButton.addEventListener("click", this.restartGame.bind(this))
  },
  restartGame: function () {
    // console.log("restarting game......")
    var activeElement = $(".active")
    console.log("active = ", activeElement)
    var startElement = $("#start")
    console.log("start = ", startElement)
    startElement.addClass('active')
    activeElement.removeClass('active')
    activeElement.addClass('path')
    this.model.moves = 0
    console.log('after restarting, the moves is ' + this.model.moves)

  },
  getMaze: function() {
    return this.model
  }
}
