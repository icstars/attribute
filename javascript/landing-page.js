
$(document).ready(function(){
     
        $(".intro").hide();
        $(".name").hide();
        $(".story").hide();
        $(".gobutton").hide();
       
        
    
//BeanBean growing and shrinking animation
    var BeanBean = $('.BeanBean'),
        scale = 1.1,
        h = BeanBean.height(), 
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
    
    scaleUp(BeanBean);
//end of beanbean animation
        
        
//Click avatar for intro bubble
    $(".BeanBean").one("click", function(){
        $(".BeanBean").stop();
        $(".intro").show();
    });
//end of beanbean click function

//animation affect for intro 
    var $hello = $(".intro"),
        scale_test = 1.1,
        t = $hello.height(), 
        test = t*scale_test;
        tBot = $hello.width();
        botTest = tBot*scale_test;
    
    
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
    
    // setInterval(scale_t_Up($hello), 1000);
    //setInterval(testWidL($hello), 1000);
            //end of bubble1 animation
    
            //bubble1 click function
            
    $(".intro").one("click", function(){
        $(".intro").hide();
        $(".intro").stop();
        $(".name").show();
    });
            //end of bubble1 click function
    
            
            
            //bubble2 click function
            
   
    // // enter key = 13
   
    //   if(keys[38]) $(".story").show(); 
    
    
     var keys = [];
     
     
     window.addEventListener("keydown", function(e){
	    keys[e.keyCode] = true ;
    }, false);
    
//     window.addEventListener("keyup", function(e){
// 	delete keys[e.keyCode];
//     }, false);
    
    $(".name").keydown("click", function() {
        // $(".story").show();
        // $(".gobutton").show();
        if(keys[13]) { 
            $('.name').hide();
                var player = $(".name").val();
                $(".story").show();
                $("#insertName").html(player);
        } 
       $(".story").one("click", function() {
           var player = $(".name").val();
           $(".story").hide();
           $(".gobutton").show();
       })
        
    });
            //end of bubble2 click function
        
      //bubble2 animation
    
        var $bubble_2 = $(".story"),
        bub_scale = 1.1,
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

































   //         //beanbeanlogo animation
    
    // var $bblogo = $('.BeanBeanLogo'),
    //     logoScale = 1.1,
    //     logoHeight = $bblogo.height(), 
    //     logoFormula = logoHeight*logoScale;
        

    // function logoScaleUp($logo){
    //     $logo.animate({height: logoFormula}, function (){
    //         logoScaleDown($logo);
            
    //     });
    // }

    // function logoScaleDown($logo){
    //     $logo.animate({height: logoHeight}, function (){
    //         logoScaleUp($logo);
    //     });
    // }
    
    //  logoScaleUp($bblogo);
        
    //         //beanbeanlogo animation end
    
           
           
           
           
           
           
           
           
           
           
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
        