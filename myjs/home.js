$(document).ready(function(){
    $(window).scroll(function(){
        const about = $('#wel').height();
        if($(this).scrollTop()>=(about/2)){
            $("#about").animate({opacity:'1'});

        }
    })
    })



    