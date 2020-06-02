$(document).ready(function(){
    $('.carousel__inner').slick({
        
        speed: 1200,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right.png"></button>',
        
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  arrows: false
                }
              }
          ]
    });

    new WOW().init();
 
    //modal

    $('[data-modal="call"]').on('click', function(){
        $('.overlay, #call').fadeIn('slow');
    });
    $('.modal__close').on('click', function(){
        $('.overlay, #call, #thanks').fadeOut('slow');
    });

   


    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 20
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };
  
    validateForms('#resume-form');
    validateForms('#call form');

    $('input[name=phone').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#call').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
  });


    lightbox.option({
      'wrapAround': true,
      'fadeDuration': 1000,
    });
  

});