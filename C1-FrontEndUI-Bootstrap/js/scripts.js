$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play')
        }else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause')
        }                
    });
    $("#bt-login").click(function(){
        $('#loginModal').modal('show');
    });        
    $("#dissmisslogin").click(function(){
        $('#loginModal').modal('hide');
    }); 
    $("#cancellogin").click(function(){
        $('#loginModal').modal('hide');
    });

    $('#bt-reserve').click(function(){
        $('#reservationform').modal('show');
    });
    $("#dismissreserve-bt").click(function(){
        $('#reservationform').modal('hide');
    }); 
    $("#cancelreserve-bt").click(function(){
        $('#reservationform').modal('hide');
    });
});