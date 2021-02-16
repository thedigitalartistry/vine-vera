$(document).ready(function(){
  $('#hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
  });
  $(".header .navbar button").click(function(){
    $(this).toggleClass("mobile-btn");
  });
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      });
    }
  }
});
$('.popup .close').click(function(e) 
  {
    $('.popup').fadeOut().css('display', 'none'); 
});


$(document).ready(function(){
  ajaxMailChimpForm($("#mc-embedded-subscribe-form"), $("#subscribe-result"));

  // Turn the given MailChimp form into an ajax version of it.
  // If resultElement is given, the subscribe result is set as html to
  // that element.
  function ajaxMailChimpForm($form, $resultElement){

      // Hijack the submission. We'll submit the form manually.
      $form.submit(function(e) {
          e.preventDefault();
          if (!isValidEmail($form)) {
              var error =  "Se debe proporcionar una dirección de correo electrónico válida.";
              $resultElement.html(error);
              $resultElement.css("color", "red");
          } else {
              $resultElement.css("color", "white");
              $resultElement.html("Suscribiendo...");
              submitSubscribeForm($form, $resultElement);
          }
      });
  }
  // Validate the email address in the form
  function isValidEmail($form) {
      // If email is empty, show error message.
      // contains just one @
      var email = $form.find("input[type='email']").val();
      if (!email || !email.length) {
          return false;
      } else if (email.indexOf("@") == -1) {
          return false;
      }
      return true;
  }
  // Submit the form with an ajax/jsonp request.
  // Based on http://stackoverflow.com/a/15120409/215821
  function submitSubscribeForm($form, $resultElement) {
      $.ajax({
          type: "GET",
          url: $form.attr("action"),
          data: $form.serialize(),
          cache: false,
          dataType: "jsonp",
          jsonp: "c", // trigger MailChimp to return a JSONP response
          contentType: "application/json; charset=utf-8",

          error: function(error){
              // According to jquery docs, this is never called for cross-domain JSONP requests
          },
          success: function(data){
              if (data.result != "success") {
                  var message = data.msg || "Lo siento, No se puede suscribir. Por favor, inténtelo de nuevo más tarde.";
                  $resultElement.css("color", "red");

                  if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                      message = "Ya estás suscrito. Gracias.";
                      $resultElement.css("color", "white");
                  }

                  $resultElement.html(message);

              } else {
                  $resultElement.css("color", "white");
                  $resultElement.html("Gracias por su suscripción");
              }
          }
      });
  }
});


});
$('.facial-main-slider-wrapper').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 1,
slidesToScroll: 1,
arrows:false,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});
function inVisible(element) {
var WindowTop = $(window).scrollTop();
var WindowBottom = WindowTop + $(window).height();
var ElementTop = element.offset().top;
var ElementBottom = ElementTop + element.height();
if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
  animate(element);
}
function animate(element) {
//Animating the element if not animated before
if (!element.hasClass('ms-animated')) {
  var maxval = element.data('max');
  var html = element.html();
  element.addClass("ms-animated");
  $({
    countNum: element.html()
  }).animate({
    countNum: maxval
  }, {
    //duration 5 seconds
    duration: 2000,
    easing: 'linear',
    step: function() {
      element.html(Math.floor(this.countNum) + html);
    },
    complete: function() {
      element.html(this.countNum + html);
    }
  });
}

}
$(function() {
  $(window).scroll(function() {
    $("h4[data-max]").each(function() {
      inVisible($(this));
    });
  })
});
$('.product-main-slider').slick({
dots: true,
infinite: true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 3,
arrows:false,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
    $('.custom-navbar').addClass('newClass');
} else {
    $('.custom-navbar').removeClass('newClass');
}
});

$( function() {
$( "#date-form" ).datepicker({
});
});
$("#res-form").submit(function (event) {
// Stop form from submitting normally
event.preventDefault();
// Get some values from elements on the page:
var $form = $(this),
    fname = $("#fname").val(),
    surname = $("#surname").val(),
    inputEmail4 = $("#inputEmail4").val(),
    phone = $("#phone").val(),
    date_form = $("#date-form").val(),
    mtime = $("#mtime").val(),
    inputState = $("#inputState").val(),
    url = "ajax/sendreservationemail.php";

// Send the data using post
var posting = $.post(url, {
    txt_fname: fname,
    txt_surname: surname,
    txt_email: inputEmail4,
    txt_phone: phone,
    txt_mdate: date_form,
    txt_mtime: mtime,
    txt_inputState: inputState
});

// Put the results in a div
posting.done(function (data) {
    $("#reservea").hide();
    $("#form_section").hide();
    $("#form_resp").show();
});
});


$(document).ready(function(){
  ajaxMailChimpForm($("#mc-embedded-subscribe"), $("#subscribe-result2"));

  // Turn the given MailChimp form into an ajax version of it.
  // If resultElement is given, the subscribe result is set as html to
  // that element.
  function ajaxMailChimpForm($form, $resultElement){

      // Hijack the submission. We'll submit the form manually.
      $form.submit(function(e) {
          e.preventDefault();
          if (!isValidEmail($form)) {
              var error =  "Se debe proporcionar una dirección de correo electrónico válida.";
              $resultElement.html(error);
              $resultElement.css("color", "red");
          } else {
              $resultElement.css("color", "white");
              $resultElement.html("Suscribiendo ...");
              submitSubscribeForm($form, $resultElement);
          }
      });
  }
  // Validate the email address in the form
  function isValidEmail($form) {
      // If email is empty, show error message.
      // contains just one @
      var email = $form.find("input[type='email']").val();
      if (!email || !email.length) {
          return false;
      } else if (email.indexOf("@") == -1) {
          return false;
      }
      return true;
  }
  // Submit the form with an ajax/jsonp request.
  // Based on http://stackoverflow.com/a/15120409/215821
  function submitSubscribeForm($form, $resultElement) {
      $.ajax({
          type: "GET",
          url: $form.attr("action"),
          data: $form.serialize(),
          cache: false,
          dataType: "jsonp",
          jsonp: "c", // trigger MailChimp to return a JSONP response
          contentType: "application/json; charset=utf-8",

          error: function(error){
              // According to jquery docs, this is never called for cross-domain JSONP requests
          },
          success: function(data){
              if (data.result != "success") {
                  var message = data.msg || "Lo siento, No se puede suscribir. Por favor, inténtelo de nuevo más tarde.";
                  $resultElement.css("color", "red");

                  if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                      message = "You're already subscribed. Thank you.";
                      $resultElement.css("color", "white");
                  }

                  $resultElement.html(message);

              } else {
                  $resultElement.css("color", "white");
                  $resultElement.html("Gracias por su suscripción");
              }
          }
      });
  }
});