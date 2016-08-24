
$(document).ready(function(){
        
        $(".briefOverview").hide();
        $(".intro").hide();
        $(".name").hide();
        $(".gobutton").hide();
        
        
            //beanbeanlogo animation
    
    var $bblogo = $('.BeanBeanLogo'),
        logoScale = 1.1,
        logoHeight = $bblogo.height(), 
        logoFormula = logoHeight*logoScale;
        

    function logoScaleUp($logo){
        $logo.animate({height: logoFormula}, function (){
            logoScaleDown($logo);
            
        });
    }

    function logoScaleDown($logo){
        $logo.animate({height: logoHeight}, function (){
            logoScaleUp($logo);
        });
    }
    
    logoScaleUp($bblogo);
        
            //beanbeanlogo animation end
        
            //BeanBean growing and shrinking animation
            
    
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
    
            //end of beanbean animation
        
        
            //Click avatar for intro bubble
            
    $(".BeanBean").one("click", function(){
        $(".intro").show();
        $(".BeanBean").stop(); 
        $(".BeanBeanLogo").stop();
    });
            //end of beanbean click function
    
    
    
            //animation affect for intro 
    
    var $hello = $(".intro"),
        scale_test = 1.3,
        t = $hello.height(), 
        test = t*scale_test;
        tBot = $hello.width();
        botTest = tBot*scale_test;
    
            //function that spreads width left
        /*    
    function testWidL($test){
        $test.animate({width: botTest}, function (){
            testWidR($test)  
        });
    }
    
            //function that spreads width right
    
    function testWidR($test){
        $test.animate({width: tBot}, function (){
            testWidL($test);
        });
    }
        */
    function scale_t_Up($test){
        $test.animate({height: test}, function (){
            scale_t_Down($test);
            
        });
    }

    function scale_t_Down($test){
        $test.animate({height: t}, function (){
            scale_t_Up($test);
        });
    }
    
    setInterval(scale_t_Up($hello), 1000);
    //setInterval(testWidL($hello), 1000);
            //end of bubble1 animation
    
            //bubble1 click function
            
    $(".intro").one("click", function(){
        $(".briefOverview").show();
        $(".intro").hide();
        $(".intro").stop();
    });
            //end of bubble1 click function
    
            //bubble2 animation
    
        var $bubble_2 = $(".briefOverview"),
        bub_scale = 1.2,
        bub_h = $bubble_2.height(), 
        ba = bub_h*bub_scale;

    function bub_scaleUp($bub){
        $bub.animate({height: ba}, function (){
            bub_scaleDown($bub);
        });
    }

    function bub_scaleDown($bub){
        $bub.animate({height: bub_h}, function (){
            bub_scaleUp($bub);
        });
    }
    
    bub_scaleUp($bubble_2); 
            
            //end of bubble2 animation
            
            //bubble2 click function
    
    $(".briefOverview").one("click", function() {
        logoScaleUp($bblogo);
        $(".gobutton").show();
        $(".name").show();
        $(".briefOverview").hide();
        $(".briefOverview").stop();
        
    });
            //end of bubble2 click function
        
    
    
    
   
        
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



    //will only allow lower-case letters a-z and numbers 1-9
    $(".name").bind('keyup blur',function(){ 
        var node = $(this);
        node.val(node.val().replace(/[^a-z, 1-9]/g,'') ); }
    );
   
});
    
   