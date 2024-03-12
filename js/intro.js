//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){

    $("#info").hide();
    $("#one").hide();
    $("#two").hide();
    $("#three").hide();
    $("#four").hide();
    $("#five").hide();
    $("#six").hide();
    $("#seven").hide();
    $("#eight").hide();
    $("#nine").hide();
    $(".slide").hide();
    $(".slide2").hide();
    $(".lore").hide();

    // $("#home-screen").hide();

    // $("#heart").click(function(){
       
    //     $("#home-screen").hide()
    //     $("#info").show()
    //     $("body").css("background-image", "url(media/images/Black-Transparent-Gradient.png)")
    //     $("body").css("background-size", "cover" )
    //     $("body").css("background-color", "white" )

    // });

    $(document).keydown(function(event){

        if(event.key == "a"){
        $("#home-screen").hide()
        $("#info").show()
        $("body").css("background-image", "url(media/images/Black-Transparent-Gradient.png)")
        $("body").css("background-size", "cover" )
        $("body").css("background-color", "white" )
        }

    });

    $("#heart").mouseenter(function(){
        $("#one").show()
    })

    $("#one").mouseenter(function(){
        $("#two").show()
    })

    $("#two").mouseenter(function(){
        $("#three").show()
    })

    $("#three").mouseenter(function(){
        $("#four").show()
    })

    $("#four").mouseenter(function(){
        $("#five").show()
    })

    $("#five").mouseenter(function(){
        $("#six").show()
    })

    $("#six").mouseenter(function(){
        $("#seven").show()
    })

    $("#seven").mouseenter(function(){
        $("#eight").show()
    })

    $("#eight").mouseenter(function(){
        $("#nine").show()
        $(".slide").show()
        $(".slide2").show()
    })

$("#heart").click(function(){

    $("#one").addClass("move");
    $("#two").addClass("move2");
    $("#three").addClass("move");
    $("#four").addClass("move4");
    $("#five").addClass("move");
    $("#six").addClass("move2");
    $("#seven").addClass("move3");
    $("#eight").addClass("move4");
    $("#nine").addClass("move2");

})

$("#11").click(function(){
    $("#1").slideToggle();
})

$("#22").click(function(){
    $("#2").slideToggle();
})

$("#33").click(function(){
    $("#3").slideToggle();
})

$("#44").click(function(){
    $("#4").slideToggle();
})

$("#55").click(function(){
    $("#5").slideToggle();
})

$("#66").click(function(){
    $("#6").slideToggle();
})

$("#77").click(function(){
    $("#7").slideToggle();
})

})
