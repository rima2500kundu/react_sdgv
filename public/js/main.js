// jQuery(document).ready(function( $ ) {

//   //start header fixed
//   $(window).scroll(function(){
//       var sticky = $('.sticky'),
//           scroll = $(window).scrollTop();
  
//       if (scroll >= 100) sticky.addClass('fixed-theme');
//       else sticky.removeClass('fixed-theme');
//   });
//   ////////////////////////////////end header fixed
  
  
//   //start custom_menu
//   $("#mobnav").click(function(){
//       $('body').addClass('noscroll');
//       $('#cross').show();
//       $('#mobnav').hide();
//       $("header nav").animate({'left' : '0'});
//     });
  
//     $("#cross").click(function(){
//       $('body').removeClass('noscroll');
//       $('#cross').hide();
//       $('#mobnav').show();
//       $("header nav").animate({'left' : '-100%'});
//     });
  
//     // submenu
//     $(document).on('click','#top li .down-icon',function(){
//       $(this).prev().slideToggle(); 
//     });
  
//     // Remove svg from menu
//     $('#top li.menu-item-has-children a svg').remove();
//     $('#top li.menu-item-has-children').append('<span class="down-icon"></span>');
//   ////////////////////////////////////end custom_menu
  
//   //start flag_ph_form
//   // const input = document.querySelector("#mobile_code");
//   // window.intlTelInput(input, {
//   //     initialCounry: "auto",
//   //     geoIpLookup: function(callback) {
//   //         $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
//   //             const countryCode = (resp && resp.country) ? resp.country : "us";
//   //             callback(countryCode);
//   //         });
//   //     }
//   // });
  
  
//   $("#flag_ph").intlTelInput({
//     utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.0.3/js/utils.js"
//   });
//   ////////////////////////////////////end flag_ph_form
  
//   });
  
//   //start faq_accordion
//   $(".accordion_head").click(function () {
//     if ($('.accordion_body').is(':visible')) {
//         $(".accordion_body").slideUp(300);
//         $(".plusminus").text('+');
//     }
//     if ($(this).next(".accordion_body").is(':visible')) {
//         $(this).next(".accordion_body").slideUp(300);
//         $(this).children(".plusminus").text('+');
//     } else {
//         $(this).next(".accordion_body").slideDown(300);
//         $(this).children(".plusminus").text('-');
//     }
//   });
//   ////////////////////////////////////end faq_accordion
  
//   //start slick slider
//   $(document).on('ready', function() {
//     $(".regular").slick({
//       slidesToShow: 7,
//       slidesToScroll: 7,
//       dots: true,
//       // focusOnSelect: true,
//       // centerMode: true,
//       infinite: true,
//       adaptiveHeight: true,
//       autoplay: false,
//       autoplaySpeed: 5000,
//       responsive: [
//         {
//           breakpoint: 767,
//           settings: {
//           dots: true,
//           slidesToShow: 2,
//           slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 991,
//           settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3 /*4*/
//           }
//         },
//         {
//           breakpoint: 1024,
//           settings: {
//           slidesToShow: 5,
//           dots: true,
//           slidesToScroll:5 /*1*/,
//           }
//         }
        
        
//       ]
//     });
  
//     $(".devloper_slider").slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots: true,
//       // focusOnSelect: true,
//       // centerMode: true,
//       adaptiveHeight: true,
//       autoplay: true,
//       autoplaySpeed: 5000,
//       responsive: [
//         // {
//         //   breakpoint: 1024,
//         //   settings: {
//         //   slidesToShow: 5,
//         //   slidesToScroll: 5,
//         //   }
//         // },
//         {
//           breakpoint: 900,
//           settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3
//           }
//         },
//         {
//           breakpoint: 768,
//           settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 550,
//           settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2
//           }
//         }
//       ]
//     });
  
//     $(".thoughts").slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       dots: true,
//       // focusOnSelect: true,
//       // centerMode: true,
//       adaptiveHeight: true,
//       autoplay: true,
//       autoplaySpeed: 5000,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           }
//         },
//         {
//           breakpoint: 900,
//           settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3
//           }
//         },
//         {
//           breakpoint: 750,
//           settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//           }
//         }
//       ]
//     });
  
    
//     $(".cus_rev_testi").slick({
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       dots: true,
//       arrows: false,
//       adaptiveHeight: true,
//       // centerMode: true,
//       autoplay: true,
//       autoplaySpeed: 5000,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           }
//         },
//         {
//           breakpoint: 900,
//           settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 750,
//           settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//           }
//         }
//       ]
//     });
  
//     $(".slider-testimonials").slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows:true,
//       dots: false,
//       adaptiveHeight: true,
//       autoplay: true,
//       autoplaySpeed: 5000,    
//       responsive: [
//         {
//           breakpoint: 992,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: false,
//             dots: true,
//           },
//         },
//       ],
//     });
//     // responsive: [
//       //   {
//       //     breakpoint: 1024,
//       //     settings: {
//       //       slidesToShow: 1,
//       //       slidesToScroll: 1,
//       //     },
//       //   },
//       //   {
//       //     breakpoint: 900,
//       //     settings: {
//       //       slidesToShow: 1,
//       //       slidesToScroll: 1,
//       //       arrows: false,
//       //     },
//       //   },
//       //   {
//       //     breakpoint: 750,
//       //     settings: {
//       //       slidesToShow: 1,
//       //       slidesToScroll: 1,
//       //     },
//       //   },
//       //   {
//       //     breakpoint: 480,
//       //     settings: {
//       //       slidesToShow: 1,
//       //       slidesToScroll: 1,
//       //     },
//       //   },
//       // ],
  
//     $(".case-study-slider").slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots: true,
//       adaptiveHeight: true,
//       autoplay: false,
//       arrows: false,
//     });
//     // autoplaySpeed: 5000,
//     // responsive: [
//     //   {
//     //     breakpoint: 1024,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 900,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //       arrows: true,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 750,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //       arrows: true,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 480,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //       arrows: true,
//     //     },
//     //   },
//     // ],
//   })
  
//     // Resptab Js
  
//     $(document).ready(function () {
//       $('#horizontalTab').easyResponsiveTabs({
//       type: 'default', //Types: default, vertical, accordion           
//       width: 'auto', //auto or any width like 600px
//       fit: true,   // 100% fit in a container
//       closed: 'accordion', // Start closed if in accordion view
//       activate: function(event) { // Callback function if tab is switched
//       var $tab = $(this);
//       var $info = $('#tabInfo');
//       var $name = $('span', $info);
//       $name.text($tab.text());
//       $info.show();
//       }
//       });
//       $('#verticalTab').easyResponsiveTabs({
//       type: 'vertical',
//       width: 'auto',
//       fit: true
//       });
  
//       // Second
//       $('#horizontalTab2').easyResponsiveTabs({
//         type: 'default', //Types: default, vertical, accordion           
//         width: 'auto', //auto or any width like 600px
//         fit: true,   // 100% fit in a container
//         closed: 'accordion', // Start closed if in accordion view
//         activate: function(event) { // Callback function if tab is switched
//         var $tab = $(this);
//         var $info = $('#tabInfo');
//         var $name = $('span', $info);
//         $name.text($tab.text());
//         $info.show();
//         }
//         });
  
//         // Third
//       $('#horizontalTab3').easyResponsiveTabs({
//         type: 'default', //Types: default, vertical, accordion           
//         width: 'auto', //auto or any width like 600px
//         fit: true,   // 100% fit in a container
//         closed: 'accordion', // Start closed if in accordion view
//         activate: function(event) { // Callback function if tab is switched
//         var $tab = $(this);
//         var $info = $('#tabInfo');
//         var $name = $('span', $info);
//         $name.text($tab.text());
//         $info.show();
//         }
//         });
  
//               // Forth
//       $('#horizontalTab_cnt').easyResponsiveTabs({
//         type: 'default', //Types: default, vertical, accordion           
//         width: 'auto', //auto or any width like 600px
//         fit: true,   // 100% fit in a container
//         closed: 'accordion', // Start closed if in accordion view
//         activate: function(event) { // Callback function if tab is switched
//         var $tab = $(this);
//         var $info = $('#tabInfo');
//         var $name = $('span', $info);
//         $name.text($tab.text());
//         $info.show();
//         }
//         });
  
//         $("#verticalTab2").easyResponsiveTabs({
//           type: "vertical",
//           width: "auto",
//           fit: true,
//         });
  
//   });
  
//   // $(function () {
//   //   $('#more').click(function () {
//   //       $('#datalist .col-12:hidden').slice(0, 4).show();
//   //       if ($('#datalist .col-12').length == $('#datalist .col-12:visible').length) {
//   //           $('#more').hide();
//   //       }
//   //   });
//   // });