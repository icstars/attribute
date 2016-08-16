$(document).ready(function(){
  
  
  $("button").click(function(){
    $("#avatar").animate({left: '250px'});
  }
})



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
})*/
  
