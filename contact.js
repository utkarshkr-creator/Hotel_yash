
$("#navbarMenu ul .submenu > a").append('<span class="submenu-button"></span>');




//CLICK ON SUBMENU LINK
$(".submenu").click(function(e){
    //CLOSE OPEN SUBMENU
    if($(this).hasClass("active")){
        $("#navbarMenu ul li").removeClass('active');
        $('#navbarMenu ul li ul').slideUp();
    }else{
        $("#navbarMenu ul li").removeClass('active');
        $("#navbarMenu ul li ul").slideUp();
        $(this).addClass("active");
        $(this).find('ul').stop().slideToggle();
        e.stopPropagation();
    }
    $("#navbarMenu ul li").removeClass('openSub');
    $(this).addClass('openSub');

});

function onClickMenu(){
    document.getElementById("show-side-bar").classList.toggle('nav-list-mobile');
    document.getElementById("mobile-detail").classList.toggle('mobile-detail');
    // document.getElementById("open-btn").classList.toggle('menu-div')
    // document.getElementById("logo-container").classList.toggle('logo-div')
 
 }