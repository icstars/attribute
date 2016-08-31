 $(document).ready(function(){
 
        // $("#lineOne").hide();
        // $("#lineTwo").hide();
        // $("#lineThere").hide();
        // $("#lineFour").hide();
        // $("#lineFive").hide();
        // $("#lineSix").hide();
        
    var str = "<p>This is my <span style='color:red;'>special string</span> with an <img src='http://placehold.it/150x150'> image !</p>",
        i = 0,
        isTag,
        text;
    
    (function type() {
        text = str.slice(0, ++i);
        if (text === str) return;
        document.getElementById('typeWriter').innerHTML = text;
    
        var char = text.slice(-1);
        if( char === '<' ) isTag = true;
        if( char === '>' ) isTag = false;
    
        if (isTag) return type();
        setTimeout(type, 80);
    }
    ());
      
 });
