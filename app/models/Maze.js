function PirateShip() {
  this.location = 0
}

PirateShip.prototype = {
  movement: 10,
  incrementLocation: function() {
    this.location += this.movement
  }
}
