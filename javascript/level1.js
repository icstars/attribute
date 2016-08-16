var theThing = document.querySelector("#thing");
var container = document.querySelector("#contentContainer");
 
container.addEventListener("click", getClickPosition, false);
 
function getClickPosition(e) {
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x - (theThing.clientWidth / 2);
    var yPosition = e.clientY - parentPosition.y - (theThing.clientHeight / 2);
     
    theThing.style.left = xPosition + "px";
    theThing.style.top = yPosition + "px";
}
 
// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}




/*var gamecanvas = $('#gamecanvas'),
    avatar = $('#avatar'),
    w = gamecanvas.width() - avatar.width(),
    d = {},
    x = 3;

function newv(v,a,b) {
    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
    return n < 0 ? 0 : n > w ? w : n;
}

$(window).keydown(function(e) { d[e.which] = true; });
$(window).keyup(function(e) { d[e.which] = false; });

setInterval(function() {
    avatar.css({
        left: function(i,v) { return newv(v, 37, 39); },
        top: function(i,v) { return newv(v, 38, 40); }
    });
}, 20);*/



/*$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('#avatar').stop().animate({
            left: '-=10'
        }); //left arrow key
        break;
    case 38:
        $(#avatar').stop().animate({
            top: '-=10'
        }); //up arrow key
        break;
    case 39:
        $('#avatar').stop().animate({
            left: '+=10'
        }); //right arrow key
        break;
    case 40:
        $('#avatar').stop().animate({
            top: '+=10'
        }); //bottom arrow key
        break;
    }
})

//click the avatar and it runs from the mouse
var counter = 0;
    
    $('#avatar').click( function () {
        if ( ++counter < 5 ) {
            var pos =  makeNewPosition();
            this.style.left = pos[1] +'px';
            this.style.top  = pos[0] +'px';
        }
        else if ( counter = 5 ) {
            this.style.display = 'none';
            alert( 'Your message' );
        }
    });
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}*/
  
