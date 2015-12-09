var main = function () {
    $('.icon-menu').click(function () {
        $('.menu').animate({
            left: '0px'
        }, 200);
        
        $('body').animate({
            left: '285px'
        }, 200);
    });
    
    $('.icon-close').click(function () {
        $('.menu').animate({
            left: '-285px'
        }, 200);
        
        $('body').animate({
            left: '0px'
        }, 200);
    });
    $('.article').click(function() {
    $('.description').hide();
      
    $(this).children('.description').show();
    });
};

$(document).ready(main);