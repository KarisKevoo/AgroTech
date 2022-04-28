$(window).ready(function(){
    $('header #close_menu').hide();
    $('header #open_menu').on('click', function(){
        $('nav').css('margin-left', '50%').css('transition-duration', '1.5s');
        $('header #close_menu').show();
        $('header #open_menu').hide();
    });
    $('header #close_menu').on('click', function(){
        $('nav').css('margin-left', '100%').css('transition-duration', '1.5s');
        $('header #close_menu').hide();
        $('header #open_menu').show();
    });
});
//making link color change when on page
$(document).ready(function(){
    $("nav [href]").each(function(){
        if(this.href == window.location.href){
            $(this).addClass("active");
        }
    });
});