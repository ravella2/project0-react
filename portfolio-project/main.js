$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 80){
            $(".box").css({"opacity" : "0"});
        }
        else {
            $(".box").css({"opacity" : "1"});
        }  
    });
});