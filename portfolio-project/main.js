$(document).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 0){
            $(".box").css({"opacity" : "0"})
        }
        else {
            $(".box").css({"opacity" : "1"})
        }
    })
})