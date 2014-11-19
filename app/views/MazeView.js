function PirateShipView() {
  this.shipSelector   = '#pirate-ship'
  this.buttonSelector = '#move-pirate-ship'
}

PirateShipView.prototype = {
  getShip: function() {
    return document.querySelector(this.shipSelector)
  },
  getButton: function() {
    return document.querySelector(this.buttonSelector)
  },
  setShipLocation: function(location) {
    var ship = this.getShip()
    ship.style.left = location
  }
}
