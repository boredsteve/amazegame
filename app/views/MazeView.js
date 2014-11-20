function MazeView() {
  // this.mazeSelector   = '#maze'
  this.locationSelector = '#active_cell'
  this.possibleLocationSelector = [] // array of classes for the #active_cell to go into
  // this.pathSelector = '.path'
  // this.hedgeSelector = '.hedge'
}

MazeView.prototype = {
  // getMaze: function() {
  //   return document.querySelector(this.mazeSelector)
  },
  getLocation: function() {
    return document.querySelector(this.locationSelector)
  },
  getPossibleLocation: function() {
    return document.querySelector(this.possibleLocationSelector)
  },
  // setShipLocation: function(location) {
  //   var ship = this.getShip()
  //   ship.style.left = location
  // }
}


//  on this page I need to be able to shift the active cell around, and return the
// updated version of the maze with the new location. I also need to be able to
// provide an array with the options for where the active cell can move to




function moveRight() {
    var here = $('.active')
    var right = here.nextElementSibling
    // if right is null or has class hedge, just increase count and do nothing
    if(right == null || right.className == 'hedge') {
      console.log('invalid move')
      //function to increase count
    }
    else {
    here.className = 'path'
    right.className = 'active'
  }
}

function moveLeft() {
    var here = $('.active')
    var left = here.previousElementSibling
    // if right is null or has class hedge, just increase count and do nothing
    if(left == null || left.className == 'hedge') {
      console.log('invalid move')
      //function to increase count
    }
    else {
    here.className = 'path'
    left.className = 'active'
  }
}


function moveDown() {
  var here = $('.active')
  var checkNull = here.previousElementSibling;
  var index = 0
  while(checkNull != null) {
      index ++;
      // console.log("I increased the count")
    checkNull = checkNull.previousElementSibling;
  }
  console.log(index)

var hereParent = here.parentElement
var hereParentSibling = hereParent.nextElementSibling
var down = hereParentSibling.children[index]
down.className = 'active'
here.className = 'path'
}

// function moveUp() {
//   var here = $('.active')
//   var checkNull = here.previousElementSibling;
//   var index = 0
//   while(checkNull != null) {
//       index ++;
//       // console.log("I increased the count")
//     checkNull = checkNull.previousElementSibling;
//   }
//   console.log(index)

// var hereParent = here.parentElement
// var hereParentSibling = hereParent.previousElementSibling
// var down = hereParentSibling.children[index]
// up.className = 'active'
// here.className = 'path'
// }



// function moveLeft() {
//     #active_cell = previousElementSibling
// }
// function moveUp() {
//   #active_cell = // previous div class .row, same element index
// }
// function moveDown() {
//     #active_cell = // next div class .row, same element index
// }


// function movePlayer(e) {
//   if(e.keyCode == 24)  //move player up =>active_cell same sibling of class above
//     else if(e.keyCode == 25) //move player down =>active_cell same sibling of class below
//       else if(e.keyCode == 26) // move player right => #active_cell nextElementSibling
//         else if(e.keyCode == 27) // move player left => #active_cell previousElementSibling
// }

//when keycode 26 gets clicked, the id needs to be removed from the #active cell,
//and applied to the appropriate cell




 // if #active_cell.nextElementSibling != .hedge {

 // }
