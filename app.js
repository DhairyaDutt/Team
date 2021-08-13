$(document).ready(function(){
    $(".bigmem").click(function(){
        if($(this).hasClass("mem1")){
            $(this).toggleClass("big big1");
            $(".advisor-btn").toggleClass("left");
            $(".bigmem").not(this).removeClass("big big1 big2 bi3 biggest");
            // $(".mem2").removeClass("big big2");
            // $(".mem26").removeClass("big big3");
        }
        else if($(this).hasClass("mem2")){
            $(this).toggleClass("big big2");
            $(".founder-btn").toggleClass("top1");
            $(".UX-btn").toggleClass("top2");
            $(".mem3").toggleClass("top-right");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest");
            // $(".mem1").removeClass("big big1");
            // $(".mem26").removeClass("big big3");
        }
        else if($(this).hasClass("mem26")){
            $(this).toggleClass("big big3");
            $(".mem6").toggleClass("bottom1");
            $(".mem14").toggleClass("right1");
            $(".mem7").toggleClass("bottom2");
            $(".manager-btn").toggleClass("left1");
            $(".mem11").toggleClass("left2");
            $(".mem5").toggleClass("top3");
            $(".mem12").toggleClass("left5");
            $(".mem13").toggleClass("bottom5");
            $(".associate-btn").toggleClass("top-left");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest");
            $(".mem15").toggleClass("mem15-lg");
            $(".mem16").toggleClass("mem16-lg");
        }
        else if($(this).hasClass("mem5")){
            $(this).toggleClass("biggest");
            $(".bigmem").not(this).removeClass("big big1 big2 big3");
            $(".mem26").toggleClass("bottom3");
            $(".pride").toggleClass("right2");
            $(".mem2").toggleClass("top4");
            $(".mem7").toggleClass("left3");
            $(".mem9").toggleClass("left4");
            $(".mem6").toggleClass("right3");
            $(".mem13").toggleClass("bottom4");
        }
        else if($(this).hasClass("mem10")){
            $(this).toggleClass("big big4");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest");
            $(".advisor-btn").toggleClass("top-left1");
            $(".mem2").toggleClass("left6");
            $(".projects").toggleClass("left7");
            $(".mem4").toggleClass("top-left2");
            $(".mem9").toggleClass("bottom6");
            $(".mem11").toggleClass("bottom7");
            $(".developer-btn").toggleClass("left8");
            $(".mem5").toggleClass("mem5-lg");
            $(".mem7").toggleClass("mem7-lg");
            $(".mem26").toggleClass("mem26-lg");
            $(".mem14").toggleClass("mem14-lg");
            $(".manager-btn").toggleClass("mbtn-lg");
            $(".pride").toggleClass("pride-lg");
            $(".mem6").toggleClass("mem6-lg");
            $(".awards").toggleClass("awards-lg");
            $(".content-btn").toggleClass("cbtn-lg");
            $(".mem15").toggleClass("mem15-lg");
            $(".mem16").toggleClass("mem16-lg");
            $(".mem13").toggleClass("mem13-lg");
        }
        else if($(this).hasClass("mem9")){
            $(this).toggleClass("big big5");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4");
            $(".mem10").toggleClass("top5");
            $(".mem11").toggleClass("top6");
            $(".mem5").toggleClass("left9");
            $(".pride").toggleClass("left10");
        }
        else if($(this).hasClass("mem11")){
            $(this).toggleClass("big big6");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5");
            $(".mem9").toggleClass("top7");
            $(".mem10").toggleClass("top8");
            $(".mem12").toggleClass("bottom-left");
            $(".manager-btn").toggleClass("left11");
            $(".mem14").toggleClass("top-left3");
            $(".mem16").toggleClass("top-left4");
            $(".mem15").toggleClass("top-left5");
            $(".mem13").toggleClass("top-right1");
            $(".associate-btn").toggleClass("top-right2");
            $(".mem26").toggleClass("mem26-lg1");
            $(".content-btn").toggleClass("cbtn-lg1");
        }
        else if($(this).hasClass("mem12")){
            $(this).toggleClass("big big7");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5 big6");
            $(".mem11").toggleClass("bottom8");
            $(".manager-btn").toggleClass("left12");
            $(".mem14").toggleClass("left13");
            $(".mem16").toggleClass("top-left6");
            $(".mem15").toggleClass("top-left7");
            $(".content-btn").toggleClass("top9");
            $(".mem13").toggleClass("top-right3");
            $(".associate-btn").toggleClass("top-right4");
        }
        else if($(this).hasClass("mem4")){
            $(this).toggleClass("big big8");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5 big6 big7");
            $(".advisor-btn").toggleClass("left14");
            $(".mem1").toggleClass("left15");
            $(".founder-btn").toggleClass("left16");
            $(".UX-btn").toggleClass("left17");
            $(".mem3").toggleClass("top-left8");
            $(".mem2").toggleClass("left18");
            $(".projects").toggleClass("bottom-left1");
            $(".mem6").toggleClass("bottom9");
            $(".mem14").toggleClass("top-left9");
            $(".mem5").toggleClass("mem5-lg1");
            $(".mem9").toggleClass("mem9-lg");
            $(".mem7").toggleClass("mem7-lg1");
            $(".mem26").toggleClass("mem26-lg2");
            $(".mem11").toggleClass("mem11-lg1");
            $(".mem12").toggleClass("mem12-lg2");
            $(".mem15").toggleClass("mem15-lg3");
            $(".mem16").toggleClass("mem16-lg3");
            $(".pride").toggleClass("pride-lg1");
            $(".developer-btn").toggleClass("dbtn-lg");
            $(".content-btn").toggleClass("cbtn-lg2");
            $(".awards").toggleClass("awards-lg2");
            $(".manager-btn").toggleClass("mbtn-lg2");
            $(".associate-btn").toggleClass("abtn-lg2");
        }
        else if($(this).hasClass("mem6")){
            $(this).toggleClass("big big9");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5 big6 big7 big8");
            $(".projects").toggleClass("top10");
            $(".pride").toggleClass("left21");
            $(".mem5").toggleClass("top11");
            $(".mem7").toggleClass("top12");
            $(".mem9").toggleClass("left19");
            $(".mem14").toggleClass("left20");
            $(".content-btn").toggleClass("top13");
            $(".mem26").toggleClass("bottom10");
            $(".manager-btn").toggleClass("top14");
            $(".mem12").toggleClass("top15");
            $(".associate-btn").toggleClass("top-left10");
            $(".mem16").toggleClass("bottom11");
            $(".awards").toggleClass("awards-lg1");
        }
        else if($(this).hasClass("mem14")){
            $(this).toggleClass("big big10");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5 big6 big7 big8 big9");
            $(".mem16").toggleClass("bottom12");
            $(".mem15").toggleClass("bottom13");
            $(".content-btn").toggleClass("bottom14");
            $(".pride").toggleClass("top16");
            $(".mem5").toggleClass("left22");
            $(".mem12").toggleClass("mem12-lg1");
            $(".mem13").toggleClass("mem13-lg2");
        }
        else if($(this).hasClass("mem16")){
            $(this).toggleClass("big big11");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5 big6 big7 big8 big9 big10");
            $(".mem14").toggleClass("bottom15");
            $(".awards").toggleClass("top17");
            $(".mem15").toggleClass("bottom16");
            $(".mem26").toggleClass("left23");
            $(".mem13").toggleClass("bottom17");
            $(".mem12").toggleClass("top-left11");
            $(".associate-btn").toggleClass("top18");
            $(".manager-btn").toggleClass("left24");
        }
        else if($(this).hasClass("mem15")){
            $(this).toggleClass("big big12");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5 big6 big7 big8 big9 big10 big11");
            $(".mem14").toggleClass("bottom18");
            $(".mem16").toggleClass("bottom19");
            $(".content-btn").toggleClass("left25");
            $(".awards").toggleClass("left26");
            $(".mem26").toggleClass("left27");
            $(".mem13").toggleClass("left28");
            $(".associate-btn").toggleClass("abtn-lg1");
        }
        else if($(this).hasClass("mem13")){
            $(this).toggleClass("big big13");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5 big6 big7 big8 big9 big10 big11 big12");
            $(".mem26").toggleClass("top19");
            $(".mem14").toggleClass("bottom20");
            $(".content-btn").toggleClass("top20");
            $(".mem15").toggleClass("right4");
            $(".mem16").toggleClass("right5");
            $(".manager-btn").toggleClass("top21");
            $(".mem12").toggleClass("top22");
            $(".associate-btn").toggleClass("top-left12");
        }
        else if($(this).hasClass("mem7")){
            $(this).toggleClass("big big14");
            $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5 big6 big7 big8 big9 big10 big11 big12 big13");
            $(".mem9").toggleClass("left29");
            $(".mem5").toggleClass("right6");
            $(".pride").toggleClass("right7");
            $(".mem6").toggleClass("bottom21");
            $(".mem14").toggleClass("bottom22");
            $(".content-btn").toggleClass("right8");
            $(".mem26").toggleClass("bottom23");
            $(".mem11").toggleClass("mem11-lg");
            $(".manager-btn").toggleClass("mbtn-lg1");
            $(".mem15").toggleClass("mem15-lg1");
            $(".mem16").toggleClass("mem16-lg1");
            $(".mem12").toggleClass("mem12-lg");
            $(".mem13").toggleClass("mem13-lg1");
            $(".associate-btn").toggleClass("abtn-lg");
        }
        // else if($(this).hasClass("mem3")){
        //     $(this).toggleClass("big big15");
        //     $(".bigmem").not(this).removeClass("big big1 big2 big3 biggest big4 big5 big6 big7 big8 big9 big10 big11 big12 big13 big14");
        // }
    });

    $(".founder-btn").click(()=>{
        $(".mem:not(.mem5)").toggleClass("opaque");
        $(".bttn:not(.founder-btn)").toggleClass("opaque");
    });

    $(".advisor-btn").click(()=>{
        $(".mem:not(.mem5,.mem26,.mem2)").toggleClass("opaque");
        $(".bttn:not(.advisor-btn)").toggleClass("opaque");
    });

    $(".projects").click(()=>{
        $(".mem:not(.mem3,.mem6,.mem7)").toggleClass("opaque");
        $(".bttn:not(.projects)").toggleClass("opaque");
    });

    $(".developer-btn").click(()=>{
        $(".mem:not(.mem14,.mem16,.mem11,.mem15)").toggleClass("opaque");
        $(".bttn:not(.developer-btn)").toggleClass("opaque");
    });

    $(".pride").click(()=>{
        $(".mem:not(.mem10,.mem1,.mem9)").toggleClass("opaque");
        $(".bttn:not(.pride)").toggleClass("opaque");
    });

    $(".manager-btn").click(()=>{
        $(".mem:not(.mem12,.mem13)").toggleClass("opaque");
        $(".bttn:not(.manager-btn)").toggleClass("opaque");
    });

    $(".content-btn").click(()=>{
        $(".mem:not(.mem12)").toggleClass("opaque");
        $(".bttn:not(.content-btn)").toggleClass("opaque");
    });

    
    
});

