"use strict";

(function ($) {
  "use strict";

  var nav = $('nav');
  var navHeight = nav.outerHeight();
  $('.navbar-toggler').on('click', function () {
    if (!$('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  }); // Preloader

  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  }); // Back to top button

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
  /*--/ Star ScrollTop /--*/

  $('.scrolltop-mf').on("click", function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
  /*--/ Star Counter /--*/

  $('.counter').counterUp({
    delay: 15,
    time: 2000
  });
  /*--/ Star Scrolling nav /--*/

  var mainNav_height = $('#mainNav').outerHeight() - 22;
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        var scrollto = target.offset().top - mainNav_height;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  }); // Scroll to sections on load with hash links

  if (window.location.hash) {
    var initial_nav = window.location.hash;

    if ($(initial_nav).length) {
      var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
      $('html, body').animate({
        scrollTop: scrollto_initial
      }, 1000, "easeInOutExpo");
    }
  } // Closes responsive menu when a scroll trigger link is clicked


  $('.js-scroll').on("click", function () {
    $('.navbar-collapse').collapse('hide');
  }); // Activate scrollspy to add active class to navbar items on scroll

  $('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
  });
  /*--/ End Scrolling nav /--*/

  /*--/ Navbar Menu Reduce /--*/

  $(window).trigger('scroll');
  $(window).on('scroll', function () {
    var pixels = 50;
    var top = 1200;

    if ($(window).scrollTop() > pixels) {
      $('.navbar-expand-md').addClass('navbar-reduce');
      $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
      if (!$('#navbarDefault').hasClass('show')) {
        $('.navbar-expand-md').removeClass('navbar-reduce');
      }

      $('.navbar-expand-md').addClass('navbar-trans');
    }

    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
      $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
  });
  /*--/ Star Typed /--*/

  if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }
  /*--/ Testimonials owl /--*/


  $('#testimonial-mf').owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  }); // Portfolio details carousel

  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  }); // Initiate venobox (lightbox feature used in portofilo)

  $(document).ready(function () {
    $('.venobox').venobox({
      'share': false
    });
  });
})(jQuery);

function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField) == false) {
    return false;
  }

  return true;
}

function sendMail() {
  var myvar = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' + '<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">' + '  <head>' + '    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">' + '' + '    <script src="https://kit.fontawesome.com/a076d05399.js"></script>' + '    ' + '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">' + '    <meta name="viewport" content="width=device-width, initial-scale=1.0">' + '    <meta name="format-detection" content="telephone=no">' + '    <meta name="x-apple-disable-message-reformatting">' + '    <title>SimpleClientEmailFormat</title>' + '' + '    <style type="text/css">' + '    .MainLogo {' + '        color : yellow;' + '    }' + '    .MainLogo span {' + '        color : white;' + '    }' + '      .ExternalClass * {' + '        line-height: 112%' + '      }' + '      .ExternalClass p,' + '      .ExternalClass span,' + '      .ExternalClass font,' + '      .ExternalClass td {' + '        line-height: 112%' + '      }' + '      a[href^=tel],' + '      .nolinkcolor>a {' + '        color: inherit;' + '        text-decoration: none' + '      }' + '      .link a {' + '        color: inherit !important;' + '        text-decoration: inherit !important' + '      }' + '      .sup,' + '      td {' + '        -webkit-text-size-adjust: none;' + '        mso-line-height-rule: exactly' + '      }' + '      table,' + '      td {' + '        border-collapse: collapse;' + '        mso-table-lspace: 0;' + '        mso-table-rspace: 0;' + '        padding: 0;' + '        margin: 0' + '      }' + '      a[x-apple-data-detectors] {' + '        color: inherit !important;' + '        text-decoration: none !important;' + '        font-size: inherit !important;' + '        font-family: inherit !important;' + '        font-weight: inherit !important;' + '        line-height: inherit !important' + '      }' + '      .show {' + '        display: none' + '      }' + '      .applelinksBlackN a {' + '        color: #000;' + '        text-decoration: none' + '      }' + '      .applelinksRed a {' + '        color: #ff492c;' + '        text-decoration: underline' + '      }' + '      .appleLinksGrey a {' + '        color: #26313d !important;' + '        text-decoration: none !important' + '      }' + '      .appleLinksWhite a {' + '        color: #fff !important;' + '        text-decoration: none !important' + '      }' + '      @media all and (max-width:480px) {' + '        table.tbl,' + '        td.tbl {' + '          width: 100% !important;' + '          min-width: inherit !important' + '        }' + '        .hide {' + '          display: none !important' + '        }' + '        .show {' + '          display: block !important;' + '          margin: 0 !important;' + '          padding: 0 !important;' + '          overflow: visible !important;' + '          width: auto !important;' + '          max-height: inherit !important' + '        }' + '        .displayBlock {' + '          width: 100% !important;' + '          display: block !important' + '        }' + '        .imgWdth {' + '          width: 100% !important;' + '          height: auto !important' + '        }' + '        .imgWdth1 {' + '          width: 70% !important;' + '          height: auto !important' + '        }' + '        .text_center {' + '          text-align: center !important' + '        }' + '        .text_left {' + '          text-align: left !important;' + '          align-content: left !important;' + '          float: left !important' + '        }' + '        .drop {' + '          display: block !important;' + '          width: 100% !important' + '        }' + '        .pad0 {' + '          padding: 0 !important' + '        }' + '        .padB15 {' + '          padding-bottom: 15px !important' + '        }' + '        .padB10 {' + '          padding-bottom: 10px !important' + '        }' + '        .padB0 {' + '          padding-bottom: 0 !important' + '        }' + '        .padT10 {' + '          padding-top: 10px !important' + '        }' + '        .padT40 {' + '          padding-top: 40px !important' + '        }' + '        u~div .full-wrap {' + '          min-width: 100vw' + '        }' + '        div>u~div .full-wrap {' + '          min-width: 100%' + '        }' + '        .padL0 {' + '          padding-left: 0 !important' + '        }' + '        .padR0 {' + '          padding-right: 0 !important' + '        }' + '        .padLR30 {' + '          padding-left: 30px !important;' + '          padding-right: 30px !important' + '        }' + '        .padTB20 {' + '          padding-top: 20px !important;' + '          padding-bottom: 20px !important' + '        }' + '        .break {' + '          display: block !important' + '        }' + '      }' + '    </style>' + '' + '    <!--[if mso | ie]>' + '      <style type="text/css">' + '        .sup{vertical-align:1px!important;font-size:100%!important}' + '      </style>' + '    <![endif]-->' + '' + '    <!--[if ie]>' + '      <style>' + '        .sup{vertical-align:6px!important;font-size:80%!important}' + '      </style>' + '    <![endif]-->' + '' + '    <!--[if gte mso 9]>' + '      <xml>' + '        <o:OfficeDocumentSettings>' + '          <o:AllowPNG/>' + '          <o:PixelsPerInch>96</o:PixelsPerInch>' + '        </o:OfficeDocumentSettings>' + '      </xml>' + '    <![endif]-->' + '' + '    <!--[if mso]>' + '      <style type="text/css">' + '        body,table,td,a.phone{font-family:Barlow,Open Sans,Helvetica,Arial,sans-serif!important}' + '      </style>' + '' + '    <!--<![endif]-->' + '  </head>' + '  <body style="margin: 0px; padding: 0px; background-color: #ffffff; -webkit-text-size-adjust: none;">' + '    <!-- <img src="https://links.hello.g2.com/e/eo?_t=de29532e29214cb3af587555c91ac01e&_m=bc497804cb954366a42279d9c6f6a212&_e=lhFLbUOXsOdUXL829_dGWwYffIoknwoSmbzJF1ga3joFBk3L6Rsjlk6ihNkblgYBD2iwjKoUlkmdqsh4Ke3ejXKd3d5IHq-rcNaNCCtwZVFckkazPT8v0S1N70C41PBATVpS05Z4CGV70h0OFFEoRD62oIsKV0p6gy21KZPcw0Ez8Tw4ecdJgI6t_HPq9yfj" style="border:0;width:1px;height:1px;border-width:0px!important;display:none!important;line-height:0!important;" width="1" height="1" /> -->' + '' + '    <!-- Hidden PHT goes here -->' + '    <div style="display: none; float: left; overflow: hidden; width: 0; max-height: 0; line-height: 0; font-size: 2px; mso-hide: all; color:#26313d;">                                                                                          </div>' + '' + '        <!--' + '    Hidden PHT goes here -->' + '    <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="full-wrap" width="100%" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px;">' + '      <tbody>' + '        <tr>' + '          <td align="center" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px; vertical-align: top;" valign="top">' + '' + '            <!-- Gmail Wrapper -->' + '            <table align="center" border="0" cellpadding="0" cellspacing="0" class="tbl" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px; min-width: 600px;" width="600">' + '              <tbody>' + '                <tr>' + '                  <td align="center" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0px; padding: 0 0 50px 0;" valign="top">' + '                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px;">' + '                      <tbody>' + '                        <tr>' + '                          <td align="center" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0px; padding: 0 0px 35px 0px;" valign="top">' + '                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px;">' + '                              <tbody>' + '                                <tr>' + '                                  <td align="center" valign="top" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px;">' + '                                    <a target="_blank" href="https://www.g2.com?utm_source=Iterable&utm_medium=email&utm_campaign=it_2020_05_14_1213858">' + '                                      <!-- <img alt="G2 logo" border="0" height="50" style="display: block;" width="50" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/de29532e29214cb3af587555c91ac01e/Outreach/Templates/Logo.png"> -->' + '                                    </a>' + '                                  </td>' + '                                </tr>' + '                              </tbody>' + '                            </table>' + '                          </td>' + '                        </tr>' + '                        <tr>' + '                          <td align="center" bgcolor="#5a39a2" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0px; border-radius: 8px; background-color: #4eba65cf; padding: 4px;" valign="top">' + '                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px;">' + '                              <tbody>' + '                                <tr>' + '                                  <td align="center" bgcolor="#5a39a2" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin-top: 0px; background-color: #4eba65cf;" valign="top">  ' + '                                    <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px;">' + '                                      <tbody>' + '                                        <tr>' + '                                          <td align="center" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0px; padding: 55px 50px 30px 56px;" valign="top">' + '                                            <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px;">' + '                                              <tbody>' + '                                                <tr>' + '                                                  <td align="center" valign="top" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin-top: 0px;">' + '                                                    <a href="https://www.republicoders.com/" style="text-decoration : none;"><h1 class="MainLogo"><<span>RepubliCoders</span>></h1></a>                                                    <!-- <img alt="Join the discussion!" border="0" class="imgWdth" height="175" style="display: block;" width="338" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/de29532e29214cb3af587555c91ac01e/Outreach/Templates/Discussion/Asset1.png"> -->' + '                                                </tr>' + '                                                <tr>' + '                                                  <td align="center" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0px; font-family: Barlow, Open Sans, Helvetica, Arial, sans-serif; font-size: 23px; line-height: 44px; color: #ffffff; padding: 33px 0px 24px 0px;" valign="top"><span style="font-weight: bold;">Thank You For Contacting us.<br>We\'ll get back to you soon </span><i class="far fa-smile-beam"></i>' + '                                                  </td>' + '                                                </tr>' + '                                                <tr>' + '                                                  <td align="left" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin: 0px; font-family: Barlow, Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; color: #ffffff; padding: 0px 0px 16px 0px;" valign="top">We are providing services starting from website development to digital marketing services to ensure that businesses can create and maintain their business on the vast market space known as the Internet.' + '' + '                                                    We comprise of professionals who have worked in the field and have experience to handle the requests of the client. Our primary focus is providing excellent service that over-shine the services provided by other services providers.' + '                                                    ' + '                                                    We have integrated teams of various professionals who have experience in various aspects and specialize in their respective roles to ensure performance that would allow us to cater to any type of request and excel while doing so.</td>' + '                                                </tr>' + '                                                <tr></tr>' + '                                              </tbody>' + '                                            </table>' + '                                                  </td>' + '                                                </tr>' + '                                              </tbody>' + '                                            </table>' + '                                          </td>' + '                                        </tr>' + '                                              </tbody>' + '                                            </table>' + '                                          </td>' + '                                        </tr>' + '                                      </tbody>' + '                                    </table>' + '                                  </td>' + '                                </tr>' + '                              </tbody>' + '                            </table>' + '                          </td>' + '                        </tr>' + '' + '                        <!--footer-->' + '                        <tr>' + '                          <td align="center" class="padLR30" valign="top" style="-webkit-text-size-adjust: none; mso-line-height-rule: exactly; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; padding: 0px; margin: 0px;">' + '' + '                            <!--footer snippet-->' + '                            <table cellpadding="0" cellspacing="0" border="0">' + '                              <tbody>' + '                                <tr>' + '                                  <td align="center" valign="top">' + '                                    <table cellpadding="0" cellspacing="0" border="0">' + '                                      <tbody>' + '                                        <tr>' + '                                          <td align="center" valign="top" style="font-family: Barlow, Open Sans, Helvetica, Arial, sans-serif; color: #9ba9b5; font-size: 14px; line-height: 20px; padding: 0px 0 0 0;"><span class="link">© Copyright RepubliCoders. All Rights Reserved.</span>' + '                                          </td>' + '                                        </tr>' + '                                        <tr>' + '                                          <td align="center" valign="top" style="font-family: Barlow, Open Sans, Helvetica, Arial, sans-serif; color: #9ba9b5; font-size: 14px; line-height: 20px; padding: 25px 0 0 0;">Update your' + '                                            <a style="text-decoration: none; color: #9ba9b5;" target="_blank" href="#"><b>email preferences</b>' + '                                            </a>to choose the types of emails you receive.</td>' + '                                        </tr>' + '                                        <tr>' + '                                          <td align="center" valign="top" style="font-family: Barlow, Open Sans, Helvetica, Arial, sans-serif; color: #9ba9b5; font-size: 14px; line-height: 20px; padding: 0px 0 0 0;">' + '                                            <a style="text-decoration: none; color: #9ba9b5;" target="_blank" href="#"><b>Unsubscribe</b>' + '                                            </a>from all future emails.</td>' + '                                        </tr>' + '                                      </tbody>' + '                                    </table>' + '                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="tblmain">' + '                                      <tbody>' + '                                        <tr>' + '                                          <td align="center" valign="top" style="padding: 18px 0px 13px 0px;">' + '                                            <table align="center" border="0" cellspacing="0" cellpadding="0">' + '                                              <tbody>' + '                                                <tr>' + '                                                  <td align="left" valign="top">' + '                                                    <a target="_blank" style="color:#000001; text-decoration: none;" href="https://www.facebook.com/Republic-Coders-103122944824739/">' + '                                                      <img style="display: block;" border="0" width="32" height="31" alt="Facebook" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/de29532e29214cb3af587555c91ac01e/Outreach/Templates/Facebook.png" />' + '                                                    </a>' + '                                                  </td>' + '                                                  <td width="13" align="left" valign="top" style="font-size: 2px;">' + '                                                    <img style="display: block;" border="0" width="1" height="1" alt="" src="https://sell.g2.com/hubfs/Outreach/Kelsey/spacer.gif" />' + '                                                  </td>' + '                                                  <td align="left" valign="top">' + '                                                    <a target="_blank" style="color:#000001; text-decoration: none;" href="https://www.linkedin.com/company/g2dotcom/?utm_source=Iterable&utm_medium=email&utm_campaign=it_2020_05_14_1213858">' + '                                                      <img style="display: block;" border="0" width="32" height="31" alt="LinkedIn" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/de29532e29214cb3af587555c91ac01e/Outreach/Templates/LinkedIn.png" />' + '                                                    </a>' + '                                                  </td>' + '                                                  <td width="13" align="left" valign="top" style="font-size: 2px;">' + '                                                    <img style="display: block;" border="0" width="1" height="1" alt="" src="https://sell.g2.com/hubfs/Outreach/Kelsey/spacer.gif" />' + '                                                  </td>' + '                                                  <td align="left" valign="top">' + '                                                    <a target="_blank" style="color:#000001; text-decoration: none;" href="https://twitter.com/republicoders">' + '                                                      <img style="display: block;" border="0" width="32" height="31" alt="Twitter" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/de29532e29214cb3af587555c91ac01e/Outreach/Templates/Twitter.png" />' + '                                                    </a>' + '                                                  </td>' + '                                                  <td width="13" align="left" valign="top" style="font-size: 2px;">' + '                                                    <img style="display: block;" border="0" width="1" height="1" alt="" src="https://sell.g2.com/hubfs/Outreach/Kelsey/spacer.gif" />' + '                                                  </td>' + '                                                  <td align="left" valign="top">' + '                                                    <a target="_blank" style="color:#000001; text-decoration: none;" href="https://www.instagram.com/republicoders/">' + '                                                      <img style="display: block;" border="0" width="32" height="31" alt="Instagram" src="https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/669d5713-9b6a-46bb-bd7e-c542cff6dd6a/de29532e29214cb3af587555c91ac01e/Outreach/Templates/Instagram.png" />' + '                                                    </a>' + '                                                  </td>' + '                                                </tr>' + '                                              </tbody>' + '                                            </table>' + '                                          </td>' + '                                        </tr>' + '                                      </tbody>' + '                                    </table>' + '                                  </td>' + '                                </tr>' + '                              </tbody>' + '                            </table>' + '' + '                            <!--footer snippet ends-->' + '                          </td>' + '                        </tr>' + '' + '                        <!--footer ends-->' + '                      </tbody>' + '                    </table>' + '                  </td>' + '                </tr>' + '              </tbody>' + '            </table>' + '          </td>' + '        </tr> <!-- /Body Content -->' + '      </tbody>' + '    </table>' + '  </body>' + '</html>';
  console.log("hello");
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var sub = document.getElementById('subject').value;
  var msg = document.getElementById('message').value;

  if (name.length != 0 && email.length != 0 && sub.length != 0 && msg.length != 0 && sub.length >= 8 && validateEmail(email) == true) {
    console.log(name + '(' + email + ') has filled the contact us form of repulicoders.com.\n\nSubject :- ' + sub + '.\nMessage :- ' + msg + '.'); //for Client's mail

    Email.send({
      Host: "smtp.gmail.com",
      Username: "contact.republicoders@gmail.com",

      /*Password: "D28DDB5740EC06D5C302128E41E32849EB4C",*/
      Password: "Limerick@01",
      //Limerick@01
      SSL: "Required",
      To: email,
      From: "contact.republicoders@gmail.com",
      Subject: sub,
      Body: myvar
    }).then(function (message) {
      return console.log(message);
    });
    console.log(message.value); // for republic's mail

    Email.send({
      Host: "smtp.gmail.com",
      Username: "contact.republicoders@gmail.com",

      /*Password: "D28DDB5740EC06D5C302128E41E32849EB4C",*/
      Password: "Limerick@01",
      //Limerick@01
      SSL: "Required",
      To: "republicoders@gmail.com",
      From: "contact.republicoders@gmail.com",
      Subject: name + " has filled Contact us form on republicoders.com",
      Body: "".concat(name, "(").concat(email, ") has filled the contact us form of repulicoders.com.<br><br>Subject :- ").concat(sub, ".<br>Message :- ").concat(msg, ".")
    }).then(function (message) {
      return console.log(message);
    });
    swal({
      title: "Form Submission Successful!",
      text: "Thank You for filling contact form we'll contact you soon!",
      icon: "success",
      button: "Thank You"
    });
  } else if (name.length == 0) {
    swal({
      title: "Name is not entered!",
      text: "All Fields must be Filled to proceed further!",
      icon: "error",
      button: "Try Again!"
    });
  } else if (email.length == 0) {
    swal({
      title: "Email id is not entered!",
      text: "All Fields must be Filled to proceed further!",
      icon: "error",
      button: "Try Again!"
    });
  } else if (sub.length == 0 || sub.length < 8) {
    swal({
      title: "Subject must contain at least 8 characters",
      text: "All Fields must be Filled to proceed further!",
      icon: "error",
      button: "Try Again!"
    });
  } else if (msg.length == 0) {
    swal({
      title: "Message is not entered!",
      text: "All Fields must be Filled to proceed further!",
      icon: "error",
      button: "Try Again!"
    });
  } else if (validateEmail(email) == false) {
    swal({
      title: "Invalid Email id!",
      text: "Enter Valid Email Id",
      icon: "error",
      button: "Try Again!"
    });
  }
}