$(document).ready(function(){
    $(".bigmem").click(function(){
        if($(this).hasClass("mem1")){
            $(this).toggleClass("big");
            $(".mem2").removeClass("big big1");
            $(".mem26").removeClass("big big2");
        }
        else if($(this).hasClass("mem2")){
            $(this).toggleClass("big big1");
            $(".mem1").removeClass("big");
            $(".mem26").removeClass("big big2");
        }
        else if($(this).hasClass("mem26")){
            $(this).toggleClass("big big2");
            $(".mem2").removeClass("big big1");
            $(".mem1").removeClass("big");
        }
    });
});