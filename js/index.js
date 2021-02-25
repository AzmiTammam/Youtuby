$(document).ready(function(){
    $(".nav-item").click(function(){
        $("nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $("#toggler").click(function(event){
        $('#wrap').toggleClass('toggled');
        let left = $('.sidebar').css("left")
        if(left == '0px'){
            $('.sidebar').css({'left': '-20rem'});
            $('.shadow').fadeOut();
        }
        else
        {
            $('.sidebar').css({'left':'0'});
            $('.shadow').fadeIn();
        }
    });

    $('.shadow').click(function(){
        $('.sidebar').css({'left':  '-20rem'})
        $('.shadow').fadeOut();
    });
    $(".search-icon").click(function(){
        $(".search-input").slideToggle("midum");
    })
});