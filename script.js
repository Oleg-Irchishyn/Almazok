// FEEDBACK FROM VALIDATION

$(document).ready(function () {
  $('[data-submit]').on('click', function (e) {
    e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod(
    "regex",
    function (value, element, regexp) {
      var re = new RegExp(regexp);
      return this.optional(element) || re.test(value);
    },
    "Please check your input."
  );
  function valEl(el) {

    el.validate({
      rules: {
        tel: {
          required: true,
          regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
        },
        name: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        tel: {
          required: 'Поле обязательно для заполнения',
          regex: 'Телефон может содержать символы + - ()'
        },
        name: {
          required: 'Поле обязательно для заполнения',
        },
        email: {
          required: 'Поле обязательно для заполнения',
          email: 'Неверный формат E-mail'
        }
      },
      submitHandler: function (form) {
        $('#loader').fadeIn();
        var $form = $(form);
        var $formId = $(form).attr('id');
        switch ($formId) {
          case 'goToNewPage':
            $.ajax({
              type: 'POST',
              url: $form.attr('action'),
              data: $form.serialize(),
            })
              .always(function (response) {
                //ссылка на страницу "спасибо" - редирект
                location.href = 'https://wayup.in/lm/landing-page-marathon/success';
                //отправка целей в Я.Метрику и Google Analytics
                ga('send', 'event', 'masterklass7', 'register');
                yaCounter27714603.reachGoal('lm17lead');
              });
            break;
          case 'popupResult':
            $.ajax({
              type: 'POST',
              url: $form.attr('action'),
              data: $form.serialize(),
            })
              .always(function (response) {
                setTimeout(function () {
                  $('#loader').fadeOut();
                }, 800);
                setTimeout(function () {
                  $('#overlay').fadeIn();
                  $form.trigger('reset');
                  //строки для остлеживания целей в Я.Метрике и Google Analytics
                }, 1100);
                $('#overlay').on('click', function (e) {
                  $('#overlay').fadeOut();
                });

              });
            break;
        }
        return false;
      }
    })
  }

  $('.js-form').each(function () {
    valEl($(this));
  });
  $('[data-scroll]').on('click', function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'data-scroll')).offset().top
    }, 2000);
    event.preventDefault();
  })
});


// TOP ARROW SCROLL TO TOP

var TopArrow = $(".to-top");

TopArrow.click(function () {
  $('html,body').animate({ scrollTop: 0 }, 'slow');
});


//HEADER MOBILE VERSION + BURGER TRANSFORM

var HeaderBurgerMenu = $(".header_burger");
var HeaderBurgerFirstBar = $(".bar.top");
var HeaderBurgerSecondBar = $(".bar.middle");
var HeaderBurgerThirdBar = $(".bar.bottom");
var Header = $(".page_header_top");

HeaderBurgerMenu.click(function () {
  Header.toggle();
  Header.toggleClass('displayflex');
  HeaderBurgerFirstBar.toggleClass('transformFirstBar');
  HeaderBurgerSecondBar.toggleClass('transformSecondBar');
  HeaderBurgerThirdBar.toggleClass('transformThirdBar');
});


//SCROLL ANIMATION FOR HEADER

window.onscroll = function () { ScrollHeader() };

var header = document.querySelector(".page_header");
var sticky = header.offsetTop;

function ScrollHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    TopArrow.show();
  } else {
    header.classList.remove("sticky");
    TopArrow.hide();
  }
}


// FEEDBACK FORMS ONCLICK FUNCTIONS FOR SHOWING AND HIDING THEM

var RemoveOrder = document.querySelector('.feedback-form-remover');
RemoveOrder.onclick = RemoveOrderHandler;

var RemoveBenefitsOrder = document.querySelector('.benefits-feedback-form-remover');
RemoveBenefitsOrder.onclick = RemoveOrderHandler;

var MakeOrder = document.querySelector('.to-feedback-form');
MakeOrder.onclick = HandlerOrder;

var MakeBenefitsOrder = document.querySelector('.to-benefits-feedback-form');
MakeBenefitsOrder.onclick = HandlerOrder;

function RemoveOrderHandler() {
  var feedBackFormContainer = document.querySelector('.feedback-forms-container');
  var feedBackForm = document.querySelector('.feedback-form');
  feedBackForm.style.display = 'none';
  feedBackFormContainer.style.display = 'none';
}

function HandlerOrder() {
  var feedBackFormContainer = document.querySelector('.feedback-forms-container');
  var feedBackForm = document.querySelector('.feedback-form');
  feedBackForm.style.display = 'block';
  feedBackFormContainer.style.display = 'block';
}


// HEADER NAVIFATION SCROLL TO SPECIFIED SECTIONS

$(window).load(function () {
  $('.scroll_to').click(function (e) {
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
  });
});


//SCROLL ANIMATIONS

var screen1 = $(".header_burger");
var screen2 = $(".page_header_top");
var screen3 = $(".hero_screen_title ")
var screen4 = $(".hero_screen_title_description");
var screen5 = $(".hero_screen_bottom");
var screen6 = $(".diamond-drilling-title");
var screen7 = $(".diamond-drilling-benefits-bottom");
var screen8 = $(".to-benefits-feedback-form");
var screen9 = $(".prices-title");
var screen10 = $(".order-procedure-title");
var screen11 = $(".portfolio-title");
var screen12 = $(".portfolio-images-group");
var screen13 = $(".clients-title");
var screen14 = $(".clients-range-domestic");
var screen15 = $(".clients-range-business");
var screen16 = $(".clients-range-site");
var screen17 = $(".feedbacks-title");
var screen18 = $(".page-footer-title");
var screen19 = $(".page-footer-title-tip");




var secondscreen1 = $(".main-title");
var secondscreen2 = $(".main-title-tip ");
var secondscreen3 = $(".main-title-description");
var secondscreen4 = $(".benefits-title");
var secondscreen5 = $(".benefits-tip");
var secondscreen6 = $(".diamond-benefits-item1");
var secondscreen7 = $(".diamond-benefits-item2");
var secondscreen8 = $(".diamond-benefits-item3");
var secondscreen9 = $(".works-range-item1");
var secondscreen10 = $(".works-range-item2");
var secondscreen11 = $(".works-range-item3");
var secondscreen12 = $(".order-procedure-item1");
var secondscreen13 = $(".order-procedure-item2");
var secondscreen14 = $(".order-procedure-item3");
var secondscreen15 = $(".order-procedure-item4");
var secondscreen16 = $(".order-procedure-item5");
var secondscreen17 = $(".feedbacks-item1");
var secondscreen18 = $(".feedbacks-item2");
var secondscreen19 = $(".page-footer-feedback-form");




var thirdscreen1 = $(".benefits-item-first");
var thirdscreen2 = $(".benefits-item-second");
var thirdscreen3 = $(".benefits-item-third");
var thirdscreen4 = $(".diamond-benefits-item4");
var thirdscreen5 = $(".diamond-benefits-item5");
var thirdscreen6 = $(".diamond-benefits-item6");
var thirdscreen7 = $(".footer-email ");
var thirdscreen8 = $(".footer-phone");
var thirdscreen9 = $(".footer-adress ");

var fourthscreen1 = $(".boer");


var screens = [
  screen1, screen2, screen3,
  screen4, screen5, screen6,
  screen7, screen8, screen9,
  screen10, screen11, screen12,
  screen13, screen14, screen15,
  screen16, screen17, screen18,
  screen19
]

var secondscreens = [
  secondscreen1, secondscreen2, secondscreen3,
  secondscreen4, secondscreen5, secondscreen6,
  secondscreen7, secondscreen8, secondscreen9,
  secondscreen10, secondscreen11, secondscreen12,
  secondscreen13, secondscreen14, secondscreen15,
  secondscreen16, secondscreen17, secondscreen18,
  secondscreen19
]

var thirdscreens = [
  thirdscreen1, thirdscreen2, thirdscreen3,
  thirdscreen4, thirdscreen5, thirdscreen6,
  thirdscreen7, thirdscreen8, thirdscreen9
]

var fourthscreens = [
  fourthscreen1
]

$(window).load(function () {
  var windowHeight = $(window).height();

  function scrollPoints() {
    var scroll = $(window).scrollTop() + windowHeight;

    for (let i = 0; i < screens.length; i++) {
      if (scroll > screens[i].offset().top) {
        screens[i].addClass("fadeInUp");
      }
    }

    for (let j = 0; j < secondscreens.length; j++) {
      if (scroll > secondscreens[j].offset().top) {
        secondscreens[j].addClass("fadeInLeft");
      }
    }

    for (let k = 0; k < thirdscreens.length; k++) {
      if (scroll > thirdscreens[k].offset().top) {
        thirdscreens[k].addClass("fadeInRight");
      }
    }

    for (let z = 0; z < fourthscreens.length; z++) {
      if (scroll > fourthscreens[z].offset().top) {
        fourthscreens[z].addClass("fadeInDownBig");
      }
    }
  }

  checkVisibleElements();

  function checkVisibleElements() {
    scrollPoints();
    window.requestAnimationFrame(checkVisibleElements)
  }
});

// MORE IMAGES TO SHOW WHEN MORE PHOTOS BUTTON IS BEING CLICKED

var ShowPhotos = $(".show_more_portfolio");
var size_photos = $(".portfolio-images-group_container > div").size();
var SecondPhotosGroup = $(".portfolio-images-group2");
var ThirdPhotosGroup = $(".portfolio-images-group3");
var x = 1;

$(document).ready(function () {
  size_photos = $(".portfolio-images-group_container > div").size();
  x = 1;
  $('.portfolio-images-group_container > div:lt(' + x + ')').show();
  ShowPhotos.click(function () {
    x = (x + 1 <= size_photos) ? x + 1 : size_photos;
    $('.portfolio-images-group_container > div:lt(' + x + ')').show();
    SecondPhotosGroup.addClass('displayflex');
    if (x == size_photos) {
      ThirdPhotosGroup.addClass('displayflex');
      ShowPhotos.hide();
    }
  });
});

$(document).keydown(function (e) {
  // ESCAPE KEY PRESSED
  if (e.keyCode == 27) {
    $(".feedback-form").hide();
    $('.feedback-forms-container').hide();
  }
});

// FEEDBACKS CAROUSEL 

$(document).ready(function () {
  $('.feedbacks-item-group').slick({
    dots: true,
    arrows: false,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 300,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          pauseOnHover: true,
          autoplay: true,
          autoplaySpeed: 10000,
          infinite: true,
          vertical: true,
          arrows: false,
          prevArrow: false,
          nextArrow: false,
          dots: true
        }
      }
    ]
  });
});

$('.feedbacks-item-group').click(function () {
  $('.feedbacks-item-group').slick('slickPause')
});

// CLOSE THANKS MESSGAE AFTER FEEDBACK FORM IS BEING SUBMITED 

var thanks = $("#thx");

thanks.click(function () {
  thanks.hide();
  $(".feedback-form").hide();
});

// FANCYBOX IMAGES ALT 

$('[data-fancybox="images"]').fancybox({
  afterLoad: function (instance, current) {
    current.$image.attr('alt', current.opts.$orig.find('img').attr('alt'));
  }
});
