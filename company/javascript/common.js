window.onload = function(){
    document.documentElement.style.fontSize=document.documentElement.clientWidth/37.5+'px';
    console.log(document.documentElement.clientWidth/37.5);
};


Zepto(function($){
    $('.nav-button').click(function(){
        if($('.nav-bar').hasClass('hide')){
            $('.nav-bar').removeClass('hide');
        }else {
            $('.nav-bar').addClass('hide');
        }
    })
})