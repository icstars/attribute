// JavaScript File
/*global $*/

document.onkeypress = function(e) {
    e = e || window.event;
    console.log(e);
    if (e.key == "d") {
        moveRight();
    }
    if (e.key == "a") {
        moveLeft();
    }
};

function moveRight() {
    var ship = $("#bean-ship")
    var leftPosition = parseInt(ship.css("left"), 10);
    var newLeftPosition = (leftPosition + 50) + "px";
    ship.css("left", newLeftPosition);
}

function moveLeft() {
    var ship = $("#bean-ship")
    var leftPosition = parseInt(ship.css("left"), 10);
    var newLeftPosition = (leftPosition - 50) + "px";
    ship.css("left", newLeftPosition);
}

function moveDown() {
    var object = $("#object")
    var downPosition = parseInt(object.css("bottom"), 5);
    var newdownPosition = (downPosition - 50) + "px";
    object.css("bottom", newdownPosition);
}

setTimeout(function(){
  moveDown();
}, 2000);