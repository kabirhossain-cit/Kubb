$(function(){

    // ========================= preloader =======================
    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500);
    });
// // ====================== preloader end ============================

// // ====================== back to top============================

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0},1200);
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 300){
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling > 300){
            $('.nav').addClass('.bg');
        }
    });
});
// ====================== back to top end============================





