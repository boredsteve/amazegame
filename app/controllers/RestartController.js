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

    // console.log("restarting game......")
    var activeElement = $(".active")
    console.log("active = ", activeElement)
    var startElement = $("#start")
    console.log("start = ", startElement)
    startElement.addClass('active')
    activeElement.removeClass('active')
    activeElement.addClass('path')
    // this.model.moves = 0
    var activeElement2 = $(".active2")
    console.log("active2 = ", activeElement2)
    var startElement2 = $("#start2")
    console.log("start = ", startElement2)
    startElement2.addClass('active2')
    activeElement2.removeClass('active2')
    activeElement2.addClass('path')


  },
}
