(function() {
  'use strict';
if (window.innerWidth <= 768) {
    document.getElementById("robopic").src = "img/robopic-mini.png";
    document.getElementById("logo-header").src = "img/logo-mobil.png";
  }

  $(document).ready(function(){

    var cur_width = $(window).width();

    $(window).resize(function(){
        if($(window).width() <= 768 && cur_width > 768){
            //reload
            location.reload();
        }
        else if($(window).width() > 768 && cur_width <= 768){
            //reload
            location.reload();
        }
    });

});
$('.slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1264,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
            ]
  });
////////////slider 2 teachers/////////////////
  $('.slider-teachers').slick({
    dots:false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

            ]
  });
  ////////////////slider 3 fotos////////////////
  $('.slider-fotos').slick({
    dots:true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    prevArrow: $('.prev3'),
    nextArrow: $('.next3')
    
  });

  // forms

  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

///////header nav/////
const navbar = document.querySelector(".navbar");
navbar.querySelector(".toggle").addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});
window.addEventListener("scroll", e => {
  let windowY = window.pageYOffset;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  if (windowY > navbarHeight) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
});


})();