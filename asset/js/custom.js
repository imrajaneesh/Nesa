var elms = document.getElementsByClassName("splide");
for (var i = 0; i < elms.length; i++) {
  new Splide(elms[i]).mount();
}

  // Spinner
  var spinner = function () {
      setTimeout(function () {
          if ($('#spinner').length > 0) {
              $('#spinner').removeClass('show');
          }
      }, 1);
  };
  spinner();


// Add class to navbar upon scrolling
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 40) {
    $(".header-area").addClass("navbar--fixed");
  } else {
    $(".header-area").removeClass("navbar--fixed");
  }
});

AOS.init();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





$('#myCarousel').on('slide.bs.carousel', function () {
  // do something…
})