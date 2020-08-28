// FEEDBACK FORM VALIDATION
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

    // TOP ARROW SCROLL TO TOP
    const TopArrow = $(".to-top");
    TopArrow.click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });

    //HEADER MOBILE VERSION + BURGER TRANSFORM
    var HeaderBurgerMenu = $(".header_burger");
    var Header = $(".page_header_top");

    HeaderBurgerMenu.click(function () {
        Header.toggle();
        Header.toggleClass('displayflex');
        $(this).toggleClass("change");
    });

       //SCROLL ANIMATION FOR HEADER
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

    window.addEventListener('scroll', function () {
        ScrollHeader();
    });

    // HEADER NAVIFATION SCROLL TO SPECIFIED SECTIONS
    $(window).on("load", function () {
        $('.scroll_to').click(function (e) {
            var jump = $(this).attr('href');
            var new_position = $(jump).offset();
            $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
            e.preventDefault();
        });
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

    // MORE IMAGES TO SHOW WHEN MORE PHOTOS BUTTON IS BEING CLICKED
    var ShowPhotos = $(".show_more_portfolio");
    var size_photos = $(".portfolio-images-group_container > div").length;
    var SecondPhotosGroup = $(".portfolio-images-group2");
    var ThirdPhotosGroup = $(".portfolio-images-group3");
    var x = 1;

    $(document).ready(function () {
        size_photos = $(".portfolio-images-group_container > div").length;
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
});