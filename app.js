$(document).ready(function(){
    $(".bigmem").click(function(){
        if($(this).hasClass("mem1")){
            $(this).toggleClass("big");
            $(".advisor-btn").toggleClass("left");
            $(".mem2").removeClass("big big1");
            $(".mem26").removeClass("big big2");
        }
        else if($(this).hasClass("mem2")){
            $(this).toggleClass("big big1");
            $(".founder-btn").toggleClass("top1");
            $(".UX-btn").toggleClass("top2");
            $(".mem3").toggleClass("top-right");
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