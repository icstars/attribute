 $(document).ready(function(){
 
 
  var limit=50, // Max number of stars
    body=document.body;
    var stars = [];
        loop={
         //initilizeing
            start:function() {
            for (var i=0; i <= limit; i++) {
                var star=this.newStar();
                stars.push(star);
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
    moveLeft:function() {
        for (var i=0; i <= limit; i++) {
            star = stars[i];
            star.style.left = star.style.left - 20
        };        
    },
    //creating html dom for star
        newStar:function(){
        var d = document.createElement('div');
        d.innerHTML = '<figure class="star"><figure class="star-top"></figure><figure class="star-bottom"></figure></figure>';
        return d.firstChild;
        
    },
};
    
    loop.start();
    setInterval(moveLeft, 5000);
    //end of star animation



//         // $("#lineOne").hide();
//         // $("#lineTwo").hide();
//         // $("#lineThere").hide();
//         // $("#lineFour").hide();
//         // $("#lineFive").hide();
//         // $("#lineSix").hide();
        
//     var str = "<p>This is my <span style='color:red;'>special string</span> with an <img src='http://placehold.it/150x150'> image !</p>",
//         i = 0,
//         isTag,
//         text;
    
//     (function type() {
//         text = str.slice(0, ++i);
//         if (text === str) return;
//         document.getElementById('typeWriter').innerHTML = text;
    
//         var char = text.slice(-1);
//         if( char === '<' ) isTag = true;
//         if( char === '>' ) isTag = false;
    
//         if (isTag) return type();
//         setTimeout(type, 80);
//     }
//     ());
        });
