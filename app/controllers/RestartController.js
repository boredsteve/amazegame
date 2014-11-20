var RestartController = function() {

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
  },
}
