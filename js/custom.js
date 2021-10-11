$(function(){

    // ========================= preloader =======================
    $(window).on('load', function(){
        $('.preloader').delay(500).fadeOut(500);
    });
// // ====================== preloader end ============================
new WOW().init();

// // ====================== back to top============================

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0},800);
    });

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 300){
            $('.back-to-top').fadeIn(500);
        }
        else {
            $('.back-to-top').fadeOut(500);
        }
        if(scrolling > 600){
            $('.nav').addClass('bg');
        }
        else{
            $('.nav').removeClass('bg');
        }
    });
});
// ====================== back to top end============================





