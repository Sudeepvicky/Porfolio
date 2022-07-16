$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student","Developer","Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student","Developer","Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


var btn = document.getElementById('sendbtn')
  btn.addEventListener('click',function(e){
    e.preventDefault()
    var mail = document.getElementById('mail').value;
    var name = document.getElementById('name').value;
    var msg = document.getElementById('msg').value;
    var body = '<br/>Name : '+name +'<br/>'+'Mail : '+mail+'<br/>'+'Message : '+msg  

    console.log('mail : '+mail);
    console.log('name : '+name);
    console.log('msg : '+msg);
    console.log('body : '+body);
    Email.send({    
    Host : "smtp.elasticemail.com",
    Username : "battusudeep33@gmail.com", 
    Password : "AB323E938E05F294FCD972B806605F825591",   
    To :  'battusudeep33@gmail.com', 
    From : "battusudeep33@gmail.com", 
    Subject : "Contact",
    Body : body
    }).then(); 
    document.getElementById('mail').value = '';
    document.getElementById('name').value = '';
    document.getElementById('msg').value = '';
    document.getElementById('demo').innerHTML = 'Message sended ...';
    document.getElementById('demo').style.display = 'block';
  });