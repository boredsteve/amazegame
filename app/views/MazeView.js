var MazeView = function() {
  // this.mazeSelector   = '#maze'
}

//  on this page I need to be able to shift the active cell around, and return the
// updated version of the maze with the new location. I also need to be able to
// provide an array with the options for where the active cell can move to

MazeView.prototype = {
  moveRight: function() {
      var here = document.querySelector(".active")
      var right = here.nextElementSibling
      // if right is null or has class hedge, just increase count and do nothing
      if(right == null || right.className == 'hedge') {
        console.log('invalid move')
        //function to increase count
      }
      else {
      here.className = 'path'
      right.className = 'active'
        if(right.id == 'end'){
          console.log("yay for you")
          return true
        }
    }
    return false
  },
  moveLeft: function() {
      var here = document.querySelector(".active")
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
  },
  moveDown: function() {
    var index = this.getIndex()
    var here = document.querySelector(".active")
    var hereParent = here.parentElement
    var hereParentSibling = hereParent.nextElementSibling

    if (hereParentSibling != null) {
      var down = hereParentSibling.children[index]

        if (down.className != 'hedge') {
          down.className = 'active'
          here.className = 'path'
        }
        else {
          console.log("you can't move into a hedge")
        }
      }
    else {
      console.log('invalid move')
     }
   },
   moveUp: function() {
    var index = this.getIndex()
    var here = document.querySelector(".active")

    var hereParent = here.parentElement
    var hereParentSibling = hereParent.previousElementSibling
    if (hereParentSibling != null) {
      var up = hereParentSibling.children[index]
        if (up.className != 'hedge') {
          up.className = 'active'
          here.className = 'path'
        }
        else {
          console.log("you can't move into a hedge")
        }
      }
    else {
      console.log('invalid move')
     }
   },


  moveRight2: function() {
      var here = document.querySelector(".active2")
      var right = here.nextElementSibling
      // if right is null or has class hedge, just increase count and do nothing
      if(right == null || right.className == 'hedge') {
        console.log('invalid move')
        //function to increase count
      }
      else {
      here.className = 'path'
      right.className = 'active2'
        if(right.id == 'end2'){
          console.log("yay for you")
          return true
        }
    }
    return false
  },
  moveLeft2: function() {
      var here = document.querySelector(".active2")
      var left = here.previousElementSibling
      // if right is null or has class hedge, just increase count and do nothing
      if(left == null || left.className == 'hedge') {
        console.log('invalid move')
        //function to increase count
      }
      else {
      here.className = 'path'
      left.className = 'active2'
    }
  },
  moveDown2: function() {
    var index = this.getIndex2()
    var here = document.querySelector(".active2")
    var hereParent = here.parentElement
    var hereParentSibling = hereParent.nextElementSibling

    if (hereParentSibling != null) {
      var down = hereParentSibling.children[index]

        if (down.className != 'hedge') {
          down.className = 'active2'
          here.className = 'path'
        }
        else {
          console.log("you can't move into a hedge")
        }
      }
    else {
      console.log('invalid move')
     }
   },
   moveUp2: function() {
    var index = this.getIndex2()
     var here = document.querySelector(".active2")

    var hereParent = here.parentElement
    var hereParentSibling = hereParent.previousElementSibling
    if (hereParentSibling != null) {
      var up = hereParentSibling.children[index]
        if (up.className != 'hedge') {
          up.className = 'active2'
          here.className = 'path'
        }
        else {
          console.log("you can't move into a hedge")
        }
      }
    else {
      console.log('invalid move')
     }
   },
   getIndex: function() {
    var here = document.querySelector(".active")
    var checkNull = here.previousElementSibling;
    var index = 0
    while(checkNull != null) {
        index ++;
        // console.log("I increased the count")
      checkNull = checkNull.previousElementSibling;
    }
     return index;
   },
   getIndex2: function() {
    var here = document.querySelector(".active2")
    var checkNull = here.previousElementSibling;
    var index = 0
    while(checkNull != null) {
        index ++;
        // console.log("I increased the count")
      checkNull = checkNull.previousElementSibling;
    }
     return index;
   },
   getRestartButton: function() {
        var restartButton = document.querySelector("#restartgame");
        return restartButton;
   },
   resetView: function() {
    console.log("restarting game......")
    var activeElement = $(".active")
    console.log("active = ", activeElement)
    var startElement = $("#start")
    console.log("start = ", startElement)
    activeElement.removeClass('active')
    startElement.addClass('active')
    activeElement.addClass('path')
    // this.model.moves = 0
    var activeElement2 = $(".active2")
    console.log("active2 = ", activeElement2)
    var startElement2 = $("#start2")
    console.log("start = ", startElement2)
    activeElement2.addClass('path')
    activeElement2.removeClass('active2')
    startElement2.addClass('active2')



   },
}

