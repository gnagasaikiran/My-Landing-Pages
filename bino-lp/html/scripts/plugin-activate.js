$(document).ready(function() {
	// fixed header on scroll
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 60) {
          $("#Header").addClass("active");
      } else {
          $("#Header").removeClass("active");
        }   
  });

  //bxslider sscript 
  $('.bxslider').bxSlider({
  	  mode: 'horizontal',
      auto: true,
      controls: true,
      infiniteLoop: true,
      pager: false,
      speed: 1000
  });

  //service section
  $('.service').bxSlider({
       //mode: $jq(window).width() < 768 ? 'vertical' : 'horizontal'
       mode: 'vertical'
       //mode: 'horizontal'

      // auto: true,
      // controls: true,
      // infiniteLoop: true,
      // pager: false,
      // speed: 1000
  });

  //portfolio script
  $('.portfolio-menu li').click(function(){
    $('li').removeClass("active");
    $(this).addClass("active");
  });

  //portfolio script
  $('.case-study').slick({      
  
  });

  //slick slider
  $(".study-section").slick({
        dots: true,
      infinite: true,
      speed: 700,
      autoplay:true,
      autoplaySpeed: 2000,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
 
  //mobile menu
  $(".mobile_menu").simpleMobileMenu();

  //form validation
  $("#formsimplevalidation").simpleValidation();

  // smoothscroll
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
     if(target.length) {
         event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
   });

  //status section
  $('.counter span').counterUp({
        delay: 10,
        time: 1000
    });

  // Back top Script start //
   $("#back-to-top").hide();
   // fade in #back-to-top
   $(window).scroll(function() {
     if ($(this).scrollTop() > 100) {
       $("#back-to-top").fadeIn();
     } else {
       $("#back-to-top").fadeOut();
     }
   });

   //scroll body to 0px on click
   $("#back-to-top").click(function() {
     $("body,html").animate({
       scrollTop: 0
     }, 800);
     return false;
   });
 
  $(document).on("scroll", onScroll);
  $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();
          $(document).off("scroll");        
          $('a').each(function () {
              $(this).removeClass('active');
          })
          $(this).addClass('active');      
          var target = this.hash,
              menu = target;
          $target = $(target);
          $('html, body').stop().animate({
              'scrollTop': $target.offset().top+2
          }, 500, 'swing', function () {
              window.location.hash = target;
              $(document).on("scroll", onScroll);
          });
      });
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#Header .menu-items a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#Header ul li').removeClass("active");
                currLink.addClass("active");
                $('#Header ul li a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }

});

  //work section
  $(window).load(function() {
    $('.portfolio-item').isotope({
      itemSelector:'.item',
      layoutMode: 'fitRows'
    });
    $('.portfolio-menu ul li').click(function(){
      $('.portfolio-menu ul li').removeClass('active');
      $(this).addClass('active');    
      var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
          filter: selector
        });
      return false;
    });
});