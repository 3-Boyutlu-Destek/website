$(document).ready(function(){
    $('.ss-item .ss-detail').eq(0).slideDown();
    $('.ss-item').eq(0).addClass('active');
    $('.ss-title').click(function(){
        $('.ss-item.active .ss-detail').slideUp();
        $('.ss-item.active').removeClass('active');
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
            $(this).parent().find(".ss-detail").slideUp();
        }
        else{
            $(this).parent().addClass('active');
            $(this).parent().find(".ss-detail").slideDown();
        }
    });

});