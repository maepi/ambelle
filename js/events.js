$(document).ready(function(){

/*
    //hide nav 
    $('.l-nav').addClass('nav-hidden');
    
    //hamburger animated
    $('#nav-toggle-btn').click(function(){
        $(this).toggleClass('open');
        $('.l-nav').toggleClass('nav-hidden animate');
    });

    //modal close 
    $('.modal-bg, .modal-content .close').click(function(){
        var element = $(this).attr("class");
        console.log(element);
        
        $('.modal-content, .modal-bg').fadeOut();
    });
    
    //subnav animated
    $('.sub-nav-container>a').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('open');
    });
*/
    
    $('#takethetest').click(function(e){
        e.preventDefault();
        $('#modal').fadeIn();
        $('#general-background').fadeIn();
    });
    $('#closemodal').click(function(e){
        e.preventDefault();
        $('#modal').fadeOut();
        $('#general-background').fadeOut();
    });
});