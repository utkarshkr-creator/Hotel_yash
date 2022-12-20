
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
   document.getElementById("open-btn").classList.toggle('menu-div')
   document.getElementById("logo-container").classList.toggle('logo-div')

}

let slide = document.querySelectorAll('.slide');
var current = 0;

function cls(){
    for(let i = 0; i < slide.length; i++){
          slide[i].style.display = 'none';
    }
}

function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.4;

    var x = 0.4;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1) {
            clearInterval(intX);
            x = 0.4;
        }
    }, 100);

}

function start(){
    cls();
    slide[current].style.display = 'block';
   
}
start();

setInterval(function(){
    next()
} , 5000)

