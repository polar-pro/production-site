$(document).ready(function(){
  // "use strict";
  // $('.multiple-items').slick({
  //   infinite: true,
  //   rows: 2,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   dots: true,
  //   responsive: [
  //     {
  //         breakpoint: 768,
  //         settings: {
  //             slidesPerRow: 1,
  //             slidesToScroll: 1,
  //             slidesToShow: 1,
  //             dots: true
  //         }
  //     }
  //   ]
  // });


  //append a link as a
  $( "#brand-ambassador-form .submit-button-wrapper" ).prepend( "<a href='https://www.polarprofilters.com/pages/polarpro-ambassador-program-terms-and-conditions' target='_blank' style='text-align:center; display:block; color:#037e8c; margin-bottom: 20px;'>Terms and Conditions</a>" );


  //tab accordion link to specific tab
  $( window ).on( "load", function() {
    $("#tabs").tabs({
      active: 3
    });
    $('#tabs > ul > li.link-to a').unbind('click');
    $( "#accordion" ).accordion();
  });


  $('.portfolio-slide').slick({
    dots: true,
    adaptiveHeight: true
  });

  // golden hour
  $(".golden-hour-item").fancybox({
    width  : 1600,
    height : 900,
    autoSize : false
  });


  // golden hour
  $(".watch-focus-btn").fancybox({
    width  : 1600,
    height : 900,
    autoSize : false
  });

  // $(window).on('scroll', function() {
  //     var st = $(this).scrollTop();
  //
  //     $('.golden-hour-banner').css({
  //         'transform': 'translateY('+ (st/23) +'px)'
  //     });
  // });



  //------- Initialising Slick Slider
  $('.item-slider').slick({
    arrows: false,
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });


  //------- Click to filter slides according to user's choice

  $(document).on('click', '.filter-option li a', function(){
    $('.filter-option li a').removeClass('active');
    $(this).addClass('active');

    var cat = $(this).attr('data-category');

    if(cat !== 'all'){
      $('.item-slider').slick('slickUnfilter');

      $('.item-slider li').each(function(){
        $(this).removeClass('slide-shown');
      });

      $('.item-slider li[data-match='+ cat +']').addClass('slide-shown');

      $('.item-slider').slick('slickFilter', '.slide-shown');
    }

    else{
      $('.item-slider li').each(function(){
        $(this).removeClass('slide-shown');
      });
      $('.item-slider').slick('slickUnfilter');
    }
  });
});
