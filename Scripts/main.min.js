
$(function() {

  // Mobile Navigation
  $('.mobile-trigger').on('click', function(){
    $('.main-nav').toggleClass('active')
  })

  $('.mobile-close').on('click', function(){
    $('.main-nav').toggleClass('active')
  })

  $('.main-nav a').on('click', function(){
    $('.main-nav').removeClass('active')
  })


  // Simple Image Crossfade
  var images = ".splash-image > img" // image selector
        , interval = 3000           // milliseconds between transitions
        , index = 0                 // starting index
        , count = $(images).length  // image count
          // the transition loop
        , handle = setInterval(function() {
            // fade out the current image
            $(images + ":eq(" + index + ")").fadeOut('slow');
            // get the next index, or cycle back to 0
            if (++index === count) index = 0;
            // fade in the next image
            $(images + ":eq(" + index + ")").fadeIn('slow');
          }
          , interval
        )
        , stop = function(){
            clearInterval(handle);
        };


  // Initialize Animation on Scroll
  AOS.init();

  // Get Image Max width from data values
  var maxWidthVal = "";
  function maxWidthImg() {
    $(".full-width").each(function(i) {
      maxWidthVal = $(this).data("max-width");
      console.log(maxWidthVal, i);

      $(this).css("max-width", maxWidthVal);
    });
  }

  maxWidthImg();

  // Set Hero ViewPort
  setTimeout(function() {
    //$("#hero").addClass("active");
  }, 2000);

  // Scroll from Top Function
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("#hero").addClass("active");
      $(".aos-init").addClass("init");
    } else {
      $("#hero").removeClass("active");
      $(".aos-init").removeClass("init");
    }
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  // Get Current Screen Size
  var screenSize = $(window).width();
  function getScreenSize() {
    if (screenSize <= 991) {
      maxWidthImg();
    } else {
      $(".full-width").css("max-width", "100%");
    }
  }
  getScreenSize();


  $('.property-grid').masonry({
    // options
    itemSelector: '.property-item',
    fitWidth: true,
    gutter:16,
  });


  // Load images on modal load

  // Remove Images for now
  $(".modal img").not(":visible").each(function () {
    var $this = $(this);
    $this.attr('data-src', $this.attr('src'));
    this.src = "";
  });
  
  $('.modal').on('shown.bs.modal', function (e) {

    $(this).find('img').each(function(){
      $(this).attr('src', $(this).attr('data-src'));
    })

  });

});
