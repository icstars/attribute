    // var img = new Image();

    // img.onload = function() {
    // div.appendChild(img);
        // };

    // img.src = '../images/BeanBean-02.png';
    
    var avatar = document.querySelector("#avatar");
    var container = document.querySelector("#contentContainer");
 
    container.addEventListener("click", getClickPosition, false);
 
    function getClickPosition(e) {
        var parentPosition = getPosition(e.currentTarget);
        var xPosition = e.clientX - parentPosition.x - (avatar.clientWidth / 2);
        var yPosition = e.clientY - parentPosition.y - (avatar.clientHeight / 2);
     
        avatar.style.left = xPosition + "px";
        avatar.style.top = yPosition + "px";
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
    } 
        
        else {
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

    $(function(){
  var y = 0;
    setInterval(function(){
        y -= 1;
        $('#contentContainer').css('background-position', y + 'px 0');
    }, 10)  
})

///////////////////////
var contentContainer,
   ctx,
   width = window.innerWidth,
   height = 800,
   enemyTotal = 6,
   enemies = [],
   enemy_x = 50,
   enemy_y = -20,
   enemy_w = 50,
   enemy_h = 50,
   speed = 3,
   score = 0,
   gameover = false,
   rightKey = false,
   leftKey = false,
   upKey = false,
   downKey = false
   
window.onload = function() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("avatar");
    ctx.drawImage(img, 10, 10);
}

for (var i = 0; i < enemyTotal; i++) {
enemies.push([enemy_x, enemy_y, enemy_w, enemy_h, speed]);
enemy_x += enemy_w + Math.random()*window.innerWidth / 6; //75;
enemy_y = Math.random()*100;
}

function clearCanvas() {
ctx.clearRect(50,50,width,height);
}

function drawEnemies() {
for (var i = 0; i < enemies.length; i++) {
               ctx.fillStyle = '#f00';
  ctx.fillRect(enemies[i][0], enemies[i][1], enemy_w, enemy_h);
}
}


function moveEnemies() {
 for (var i = 0; i < enemies.length; i++) {
  if (enemies[i][1] < height) {
    enemies[i][1] += enemies[i][4];
  } else if (enemies[i][1] > height - 1) {
     enemies[i][1] = -45;
   }
 }
}

function detectCollisions() {
 for (var i = 0; i < enemies.length; i++) {
     var enemy = enemies[i];
     var enemyX = enemy[0];
     var enemyY =enemy[1];
     var position = getPosition(avatar) ;
    
    enemyX = enemyX + enemy_w / 2;
    enemyY = enemyY - enemy_h / 2;
    var xPos = 90 / 2 + position.x;
    var yPos = 80 /2 + position.y;

    
    var isCloseOnXPosition = Math.abs(xPos - enemyX) < 1;
    var isCloseOnYPosition = Math.abs(yPos - enemyY) < 1;
     
    var rect = avatar.getBoundingClientRect();
    var rect_top = rect.top;
    var rect_bottom = rect.bottom;
    var rect_left = rect.left;
    var rect_right = rect.right;
    
    
    
    
     if (isCloseOnXPosition && isCloseOnYPosition) {
           score += 1;
           console.log("Your Score: ", score);
         ctx.fillStyle = '#f0f';
         ctx.fillRect(0, 0, 30, 30);
         enemy[1] = Math.random()*100;
         if(score > 10){
             gameover = true;
         }
     }
     //get enemy's x and y location
     //get the ship's x and y location
     //compare them
     //if they're close
     //make score increment
  
 }
}
function init() {
 contentContainer = document.getElementById('canvas');
 ctx = contentContainer.getContext('2d');
 setInterval(gameLoop, 25);
 document.addEventListener('keydown', keyDown, false);
 document.addEventListener('keyup', keyUp, false);
}

function gameLoop() {
 if (!gameover) {
     clearCanvas();
     moveEnemies();
     drawEnemies();
     detectCollisions();
 } else {
     console.log("YOU WON!")
 }
}


window.onload = init;
//////////////////
    
    
    
    
    
    
    
    
    //star animation
  var limit=35, // Max number of stars
    body=document.body;
        loop={
         //initilizeing
        start:function(){
        for (var i=0; i <= limit; i++) {
        star=this.newStar();
        star.style.top=this.rand()*100+"%";
        star.style.left=this.rand()*100+"%";
        star.style.webkitAnimationDelay=this.rand()+"s";
        star.style.mozAnimationDelay=this.rand()+"s";
        body.appendChild(star);
  };
 },
    //to get random number
        rand:function(){
            return Math.random();
 },
 
    //creating html dom for star
        newStar:function(){
        var d = document.createElement('div');
        d.innerHTML = '<figure class="star"><figure class="star-top"></figure><figure class="star-bottom"></figure></figure>';
        return d.firstChild;
 },
};
    loop.start();
    //end of star animation
var contentContainer = $("#contentContainer");
var myScore;

function startGame() {
  avatar = new component(30, 30, "red", 10, 160);
  avatar = new component("30px", "Consolas", "black", 280, 40, "text");
  contentContainer.start();
}