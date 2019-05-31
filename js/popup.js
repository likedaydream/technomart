var writeLink = document.querySelector('.write-us-link');
var writePopup = document.querySelector('.modal-write-us');

if  (writeLink && writePopup) {
  writeLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    writePopup.classList.add('modal-show');
    writePopup.querySelector('input').focus();
  });

  var writeClose  = writePopup.querySelector('.modal-close');

  writeClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    writePopup.classList.remove('modal-show');
  });
}

var cartLinks = document.querySelectorAll('.product-button-buy');
var cartLink;
var cartPopup = document.querySelector('.modal-cart-add');

if (cartLinks && cartPopup) {
  for (var i = 0; i < cartLinks.length; i++) {
    cartLink = cartLinks[i];
    cartLink.addEventListener('click', function (evt) {
      evt.preventDefault();
      cartPopup.classList.add('modal-show');
    })
  }

  var cartClose = cartPopup.querySelector('.modal-close');

  cartClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove('modal-show');
  })
}

/* fix product card focus action - not working while tabbing */
var productCards = document.querySelectorAll('.product-card');

for (let i = 0; i < productCards.length; i++) {
  productCards[i].addEventListener('focus', function (evt) {
    productCards[i].classList.add('product-card-focused');
  });

  productCards[i].addEventListener('blur', function (evt) {
    var buyBtn = productCards[i].querySelector('.product-button-buy');

    if (!evt.relatedTarget || !productCards[i].contains(evt.relatedTarget)) {
      productCards[i].classList.remove('product-card-focused');
    }
  }, { capture: true });
}
