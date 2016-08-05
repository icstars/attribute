$(document).ready(function(){
    var menuIsVisible = false;
    
    $('#menuOptions').hide();
    
    
    $('#menuOptionsButton').click(function() {
        if(menuIsVisible){
            $('#menuOptions').hide();
            menuIsVisible = false;
        } else {
            $('#menuOptions').show();
            menuIsVisible = true;
        }
        
        
    })
    
    
    
    
    
    $('#startbutton').click(function() {
        window.open("./startpage.html");
    })
    }
)