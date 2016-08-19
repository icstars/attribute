
$(document).ready(function(){
    
        $(".intro").hide();
        $(".name").hide();
        $(".gobutton").hide();
        
    //BeanBean growing and shrinking animation
    var $p = $('.intro')
    var $img = $('.BeanBean'),
        scale = 1.1,
        h = $img.height(), 
        sh = h*scale;

    function scaleUp($elt){
        $elt.animate({height: sh}, function (){
            scaleDown($elt);
        });
    }

    function scaleDown($elt){
        $elt.animate({height: h}, function (){
            scaleUp($elt);
        });
    }
    
    scaleUp($img); 


        
    //Click avatar for intro bubble
    $(".BeanBean").one("click", function(){
        $(".intro").show();
        $(".BeanBean").stop(); //stop animation on click
    });
    
    
    
    
    $(".intro").click(function(){
        $(".name").show();
        $(".gobutton").show();
        $(".intro").hide();
    });
    
    
    
    //will only allow lower-case letters a-z and numbers 1-9
    $(".name").bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-z, 1-9]/g,'') ); }
    );
   

    
    //star animation
    var limit=35, // Max number of stars
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
});






 