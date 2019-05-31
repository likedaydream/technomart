var slider = document.querySelector('.promo-slider');

if (slider) {
  var sliderSlides = slider.querySelectorAll('.promo-slider-item');
  var sliderDots = slider.querySelectorAll('.promo-slider-dots .dot-btn');

  function sliderResetActiveSlide() {
    var activeSlide = slider.querySelector('.promo-slider-item-active');

    if (activeSlide) {
      activeSlide.classList.remove('promo-slider-item-active');
    }

    var activeBtn = slider.querySelector('.promo-slider-dots .dot-btn-active');

    if (activeBtn) {
      activeBtn.classList.remove('dot-btn-active');
    }
  }

  function sliderMakeActive(slide, index) {
    if (slide) {
      sliderResetActiveSlide();
      slide.classList.add('promo-slider-item-active');

      if (sliderDots.item(index)) {
        sliderDots.item(index).classList.add('dot-btn-active');
      }
    }
  }

  function sliderGetNextSlide() {
    var activeSlide = slider.querySelector('.promo-slider-item-active');
    var newSlide = null;

    if (activeSlide) {
      newSlide = activeSlide.nextElementSibling;

      if (!newSlide) {
        newSlide = slider.querySelector('.promo-slider-item:not(.promo-slider-item-active)');
      }
    }

    return newSlide;
  }

  function sliderGetPrevSlide() {
    var activeSlide = slider.querySelector('.promo-slider-item-active');
    var newSlide = null;

    if (activeSlide) {
      newSlide = activeSlide.previousElementSibling;

      if (!newSlide) {
        newSlide = slider.querySelector('.promo-slider-item:last-of-type:not(.promo-slider-item-active)')
      }
    }

    return newSlide;
  }

  var sliderPrev = slider.querySelector('.promo-slider-prev');
  var sliderNext = slider.querySelector('.promo-slider-next');

  sliderNext.addEventListener('click', function (evt) {
    evt.preventDefault();
    var nextSlide = sliderGetNextSlide();
    var nextIndex = Array.prototype.indexOf.call(sliderSlides, nextSlide);
    sliderMakeActive(nextSlide, nextIndex);
  });

  sliderPrev.addEventListener('click', function (evt) {
    evt.preventDefault();
    var prevSlide = sliderGetPrevSlide();
    var prevIndex = Array.prototype.indexOf.call(sliderSlides, prevSlide);
    sliderMakeActive(prevSlide, prevIndex);
  });

  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].addEventListener('click', function (evt) {
      var dot = sliderDots[i];

      if (!dot.classList.contains('dot-btn-active')) {
        if (sliderSlides.item(i)) {
          sliderMakeActive(sliderSlides.item(i), i);
        }
      }
    })
  }
}


var serviceLinks = document.querySelectorAll('.services-menu > li a');
var serviceTabs = document.querySelectorAll('.services-blocks .service-item');
var serviceActiveLink, serviceActiveTab;

if (serviceLinks && serviceTabs) {
  for (let i = 0; i < serviceLinks.length; i++) {
    serviceLinks[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      if (serviceTabs.item(i) && !serviceLinks[i].classList.contains('link-active')) {
        console.log('fsdf');
        serviceActiveLink = document.querySelector('.services-menu .link-active');

        if (serviceActiveLink) {
          serviceActiveLink.classList.remove('link-active');
        }

        serviceActiveTab = document.querySelector('.services-blocks .service-visible');

        if (serviceActiveTab) {
          serviceActiveTab.classList.remove('service-visible');
        }

        serviceLinks[i].classList.add('link-active');
        serviceTabs.item(i).classList.add('service-visible');
      }
    });
  }
}
