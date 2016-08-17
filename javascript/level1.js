

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

   
    //star animation
    var limit=35, // Max number of stars
    body=document.body;
        loop={
         //initilizeing
        start:function(){
        for (var i=0; i <= limit; i++) {
        var star=this.newStar();
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






