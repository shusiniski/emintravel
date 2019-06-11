/*
* ----------------------------------------------------------------------------------------
Author       : Shmai
Template Name: TravelCo - Travel agency Responsive Website Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/
(function($) {
    'use strict';

    jQuery(document).ready(function() {

        /*

        $('ul.nav li.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
        });*/

        $('.dropdown-menu li.dropdown-submenu').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
        });



         //Submenu Dropdown Toggle
    if($('li.dropdown ul').length){
        //Dropdown Button
        $('.header-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.header-menu .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });
    }



        jQuery('#bslider').slider();
        jQuery('#dslider').slider();
        jQuery(".selector select").each(function() {
            var obj = jQuery(this);
            if (obj.parent().children(".custom-select").length < 1) {
                obj.after("<span class='custom-select'>" + obj.children("option:selected").html() + "</span>");

                if (obj.hasClass("white-bg")) {
                    obj.next("span.custom-select").addClass("white-bg");
                }
                if (obj.hasClass("full-width")) {
                    //obj.removeClass("full-width");
                    //obj.css("width", obj.parent().width() + "px");
                    //obj.next("span.custom-select").css("width", obj.parent().width() + "px");
                    obj.next("span.custom-select").addClass("full-width");
                }
            }
        });

         // Open the full screen search box 
        jQuery('#opensearch').on('click',function(){
            document.getElementById("myOverlay").style.display = "block";
        });

// Close the full screen search box 

    jQuery('#btnclose').on('click', function(){
         document.getElementById("myOverlay").style.display = "none";
    });
 


        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').owlCarousel({
                singleItem: true,
                "navigation": true,
                "navigationText": ['', ''],
                "pagination": false,

            });
        }
        /*
         ============================================================== 
           Accordian Javascript
         ============================================================== 
         */
        if ($('.accordion').length) {
            //custom animation for open/close
            $.fn.slideFadeToggle = function(speed, easing, callback) {
                return this.animate({ opacity: 'toggle', height: 'toggle' }, speed, easing, callback);
            };

            $('.accordion').accordion({
                defaultOpen: 'section1',
                cookieName: 'nav',
                speed: 'slow',
                animateOpen: function(elem, opts) { //replace the standard slideUp with custom function
                    elem.next().stop(true, true).slideFadeToggle(opts.speed);
                },
                animateClose: function(elem, opts) { //replace the standard slideDown with custom function
                    elem.next().stop(true, true).slideFadeToggle(opts.speed);
                }
            });
        }
        //Gallery Filters
        if ($('.filter-list').length) {
            $('.filter-list').mixItUp({});
        }

        (function() {

            function addSeperator(nStr) {
                nStr += '';
                var x = nStr.split('.');
                var x1 = x[0];
                var x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + '.' + '$2');
                }
                return x1 + x2;
            }

            function rangeInputChangeEventHandler(e) {
                var rangeGroup = $(this).attr('name'),
                    minBtn = $(this).parent().children('.min'),
                    maxBtn = $(this).parent().children('.max'),
                    range_min = $(this).parent().children('.range_min'),
                    range_max = $(this).parent().children('.range_max'),
                    minVal = parseInt($(minBtn).val()),
                    maxVal = parseInt($(maxBtn).val()),
                    origin = $(this).context.className;

                if (origin === 'min' && minVal > maxVal - 5) {
                    $(minBtn).val(maxVal - 5);
                }
                var minVal = parseInt($(minBtn).val());
                $(range_min).html((minVal));


                if (origin === 'max' && maxVal - 5 < minVal) {
                    $(maxBtn).val(5 + minVal);
                }
                var maxVal = parseInt($(maxBtn).val());
                $(range_max).html((maxVal));
            }

            $('input[type="range"]').on('input', rangeInputChangeEventHandler);
        })();

        /*$('ul.nav li.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        });
*/

        // Show - hide box search on menu
        $('.button-search').on('click', function() {
            $('.nav-search').toggleClass('hide');
        });

        //hide box seach when click outside
        $('body').on('click', function(event) {
            if ($('.button-search').has(event.target).length === 0 && !$('.button-search').is(event.target) && $('.nav-search').has(event.target).length === 0 && !$('.nav-search').is(event.target)) {
                if ($('.nav-search').hasClass('hide') === false) {
                    $('.nav-search').toggleClass('hide');
                }
            }
        });
        // =============== MOBILE MENU OPEN FUNCTION ===================

        $(".menu-btn, .mobile-men-btn > a").on("click", function() {
            $(".responsive-mobile-menu").addClass("active");
        });
        $(".close-menu-btn, html").on("click", function() {
            $(".responsive-mobile-menu").removeClass("active");
        });
        $(".menu-btn, .mobile-men-btn > a, .responsive-mobile-menu").on("click", function(e) {
            e.stopPropagation();
        });


        /*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER JS
         * ----------------------------------------------------------------------------------------
         */
        var prealoaderOption = $(window);
        prealoaderOption.on("load", function() {
            var preloader = jQuery('.spinner');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(350).fadeOut('slow');
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  CHANGE MENU BACKGROUND JS
         * ----------------------------------------------------------------------------------------
         */
        var headertopoption = $(window);
        var headTop = $('.header-top-area');

        headertopoption.on('scroll', function() {
            if (headertopoption.scrollTop() > 200) {
                headTop.addClass('menu-bg');
            } else {
                headTop.removeClass('menu-bg');
            }
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  SMOTH SCROOL JS
         * ----------------------------------------------------------------------------------------
         

        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

*/
        /*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP JS
         * ----------------------------------------------------------------------------------------
         */

        $('.video-play').magnificPopup({
            type: 'iframe'
        });

        var magnifPopup = function() {
            $('.work-popup').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function(openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();
        /*
         * ----------------------------------------------------------------------------------------
         *  PARALLAX JS
         * ----------------------------------------------------------------------------------------
         */

        var parallaxeffect = $(window);
        parallaxeffect.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });




        /*
         * ----------------------------------------------------------------------------------------
         *  PROGRESS BAR JS
         * ----------------------------------------------------------------------------------------
         */
        $('.progress-bar > span').each(function() {
            var $this = $(this);
            var width = $(this).data('percent');
            $this.css({
                'transition': 'width 3s'
            });
            setTimeout(function() {
                $this.appear(function() {
                    $this.css('width', width + '%');
                });
            }, 500);
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  TESTIMONIAL JS
         * ----------------------------------------------------------------------------------------
         */
         function callback(event) {
              // Provided by the core
              var element   = event.target;         // DOM element, in this example .owl-carousel
              var name      = event.type;           // Name of the event, in this example dragged
              var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
              var items     = event.item.count;     // Number of items
              var item      = event.item.index;     // Position of the current item
              // Provided by the navigation plugin
              var pages     = event.page.count;     // Number of pages
              var page      = event.page.index;     // Position of the current page
              var size      = event.page.size;      // Number of items per page
          }
        $(".testimonial-list").owlCarousel({
            "items": 4,
            "autoPlay": true,
            "navigation": false,
            "dots": true,
            "itemsDesktop": [1199, 2],
            "itemsDesktopSmall": [980, 2],
            "itemsTablet": [768, 2],
            "itemsMobile": [479, 1],
            "pagination": true,
            "autoHeight": true,
            "autoplay":true,
            "loop":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":4
                }
            },
        });

        $(".tour-list").owlCarousel({
            "items": 3,
            "loop": true,
            "navigation": true,
            "autoHeight": true,
            "margin":10,
            "dots": false,
            "nav":true,
            "autoplay":true,
            "autoplayTimeout":1000,
            "navigationText": [""],
            "itemsDesktop": [1199, 2],
            "itemsDesktopSmall": [980, 2],
            "itemsTablet": [768, 2],
            "itemsMobile": [479, 1],
            "pagination": false,
            "autoplay":true,
            "merge":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":3
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":3
                }
            },
        });

        $(".tour_details").owlCarousel({
            "items": 1,
            "autoPlay": true,
            "navigation": true,
            "navigationText": [""],
            "itemsDesktop": [1199, 2],
            "itemsDesktopSmall": [980, 2],
            "itemsTablet": [768, 2],
            "itemsMobile": [479, 1],
            "pagination": false,
            "autoHeight": true,
            "loop":true,
            "dots": true,
            "autoplay":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":1
                },
                "992":{
                    "items":1
                },
                "1200":{
                    "items":1
                }
            },
        });

        $(".review-list").owlCarousel({
            "items": 3,
            "autoPlay": true,
            "nav":true,
            "navigationText": [""],
            "itemsDesktop": [1199, 2],
            "itemsDesktopSmall": [980, 2],
            "itemsTablet": [768, 2],
            "itemsMobile": [479, 1],
            "pagination": false,
            "autoHeight": false,
            "autoplay":true,
            "autoplayTimeout":1000,
            "loop":true,
            "dots": false,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":3
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":3
                }
            },

        });
        $(".blog-slider1").owlCarousel({
            "items": 2,
            "autoPlay": true,
            "navigation": true,
            "navigationText": [""],
            "itemsDesktop": [1199, 2],
            "itemsDesktopSmall": [980, 2],
            "itemsTablet": [768, 2],
            "itemsMobile": [479, 1],
            "pagination": false,
            "dots":false,
            "navigation":true,
            "autoHeight": false,
            "loop":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":1
                },
                "992":{
                    "items":2
                },
                "1200":{
                    "items":2
                }
            },
        });
        $(".blog-slider2").owlCarousel({
            "items": 2,
            "autoPlay": true,
            "navigation": true,
            "navigationText": [""],
            "itemsDesktop": [1199, 2],
            "itemsDesktopSmall": [980, 2],
            "itemsTablet": [768, 2],
            "itemsMobile": [479, 1],
            "pagination": false,
            "autoHeight": false,
            "dots":false,
            "navigation":true,
            "loop":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":2
                },
                "1200":{
                    "items":2
                }
            },
        });
        $(".related-posts-list").owlCarousel({
            "items": 1,
            "autoPlay": true,
            "navigation": true,
            "navigationText": [""],
            "itemsDesktop": [1199, 2],
            "itemsDesktopSmall": [980, 2],
            "itemsTablet": [768, 2],
            "itemsMobile": [479, 1],
            "pagination": false,
            "autoHeight": true,
            "loop":true,
            "dots": true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":1
                },
                "992":{
                    "items":1
                },
                "1200":{
                    "items":1
                }
            },
        });
        /*
         * ----------------------------------------------------------------------------------------
         *  COMPANY JS
         * ----------------------------------------------------------------------------------------
         */

        $(".company-logo-list").owlCarousel({
            "items": 5,
            "autoPlay": true,
            "navigation": false,
            "itemsDesktop": [1199, 5],
            "itemsDesktopSmall": [980, 4],
            "itemsTablet": [768, 3],
            "itemsTabletSmall": false,
            "itemsMobile": [479, 2],
            "pagination": false,
            "autoHeight": true,
            "navigationText" : ["", ""],
            "loop":true,
            "responsive":{
                "0":{
                    "items":2
                },
                "480":{
                    "items":2
                },
                "768":{
                    "items":3
                },
                "992":{
                    "items":4
                },
                "1200":{
                    "items":5
                }
            },
        });

        $(".owl-brands").owlCarousel({
            "items": 5,
            "autoPlay": true,
            "navigation": true,
            "itemsDesktop": [1199, 5],
            "itemsDesktopSmall": [980, 4],
            "itemsTablet": [768, 3],
            "itemsTabletSmall": false,
            "itemsMobile": [479, 2],
            "pagination": false,
            "autoHeight": true,
            "navigationText" : ["", ""],
            "loop":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":2
                },
                "768":{
                    "items":3
                },
                "992":{
                    "items":4
                },
                "1200":{
                    "items":5
                }
            },

        });

        $(".company-logo-list2").owlCarousel({
            "items": 5,
            "autoPlay": true,
            "navigation": false,
            "itemsDesktop": [1199, 5],
            "itemsDesktopSmall": [980, 4],
            "itemsTablet": [768, 3],
            "itemsTabletSmall": false,
            "itemsMobile": [479, 2],
            "pagination": false,
            "autoHeight": true,
            "loop":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":3
                },
                "768":{
                    "items":3
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":5
                }
            },

        });


        /*
         * ----------------------------------------------------------------------------------------
         *  EXTRA JS
         * ----------------------------------------------------------------------------------------
         */
        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });



        /*
         * ----------------------------------------------------------------------------------------
         *  SCROOL TO UP JS
         * ----------------------------------------------------------------------------------------
         */
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 250) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*
         * ----------------------------------------------------------------------------------------
         *  SCROOL TO Down JS
         * ----------------------------------------------------------------------------------------
         */

        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 100) {
                $('.transparent-noborder').fadeIn();
            }
        });
        $('.transparent-noborder').on("click", function() {
            $("html, body").animate({
                scrollTop: 1500
            }, 800);
            window.scrollTo(500, 0);
            return false;
        });




        /*---------------------------------------------------
            hotel Filter
        ----------------------------------------------------*/
        var Container = $('.container');
        if (typeof imagesLoaded == 'function') {
            Container.imagesLoaded(function() {
                var hotel = $('.hotel-menu');
                hotel.on('click', 'button', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                var $grid = $('.hotel-items').isotope({
                    itemSelector: '.grid-item'
                });

            });
        }
        /*---------------------------------------------------
            gallery Filter
        ----------------------------------------------------*/
        var Container = $('.container');
        if (typeof imagesLoaded == 'function') {
            Container.imagesLoaded(function() {
                var gallery = $('.gallery-menu');
                gallery.on('click', 'button', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                var $grid = $('.gallery-items').isotope({
                    itemSelector: '.grid-item'
                });

            });
        }
        /*---------------------------------------------------
                gallery Filter
            ----------------------------------------------------*/
        var Container = $('.container');
        if (typeof imagesLoaded == 'function') {
            Container.imagesLoaded(function() {
                var gallery = $('.gallery-menu-5');
                gallery.on('click', 'button', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                var $grid = $('.gallery-items5').isotope({
                    itemSelector: '.grid-item'
                });

            });
        }
        /*---------------------------------------------------
               gallery Filter
           ----------------------------------------------------*/
        var Container = $('.container');
        if (typeof imagesLoaded == 'function') {
            Container.imagesLoaded(function() {
                var gallery = $('.gallery-menu-5-2');
                gallery.on('click', 'button', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue,
                        
                    });
                });
                var $grid = $('.gallery-items-5-2').isotope({
                    itemSelector: '.grid-item',
                    layoutMode: 'masonry',
                });

            });
        }
        /*---------------------------------------------------
               gallery Filter
           ----------------------------------------------------*/
        var Container = $('.container');
        if (typeof imagesLoaded == 'function') {
            Container.imagesLoaded(function() {
                var gallery = $('.gallery-menu-5-3');
                gallery.on('click', 'button', function() {
                    $(this).addClass('active').siblings().removeClass('active');
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                var $grid = $('.gallery-items-5-3').isotope({
                    itemSelector: '.grid-item'
                });

            });
        }
        //start masonry
        jQuery(document).ready(function() {

            $(function() {

                //initialize
                var $container = $('.stylemasonry');

                $container.isotope({
                    itemSelector: '.singlemasonry'
                });
                //end initialize

                //start masonry
                $container.isotope({
                    itemSelector: '.singlemasonry'
                });
                // end masonry

            });

        });
        //start masonry

        var $countDown = $('.count-down');

            if ($countDown.length) {
                var endDate = new Date($countDown.data("end-date"));
                $countDown.countdown({
                    date: endDate,
                    render: function(data) {
                        $(this.el).html(
                            '<div><span class="time">' + this.leadingZeros(data.days, 2) + '</span> DAYS</div>' +
                            '<span class="coln">:</span>' +
                            '<div><span class="time">' + this.leadingZeros(data.hours, 2) + '</span> HOURS</div>' +
                            '<span class="coln">:</span>' +
                            '<div><span class="time">' + this.leadingZeros(data.min, 2) + '</span> MIN</div>' +
                            '<span class="coln">:</span>' +
                            '<div><span class="time">' + this.leadingZeros(data.sec, 2) + '</span> SEC</div>'
                        );
                    }
                });
            }

        /*
         * ----------------------------------------------------------------------------------------
         *  WOW JS
         * ----------------------------------------------------------------------------------------
         */
        new WOW().init();




        /*
         * ----------------------------------------------------------------------------------------
         *  TYPE EFFECT JS
         * ----------------------------------------------------------------------------------------
         */

        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 1000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 150 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function() {
                that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.02em solid #fff}";
            document.body.appendChild(css);
        };

    });



    /*------------------------------------------------------------------
     Validate
     -------------------------------------------------------------------*/

    $( "#submit" ).on( "click", function() {
        var errors = "";

        var contact_name = document.getElementById("contact_name");
        var contact_email_address = document.getElementById("contact_email");

        if(contact_name.value == ""){
            errors+= 'Please provide your name.';
        }
        else if(contact_email_address.value == ""){
            errors+= 'Please provide an email address.';
        }
        else if(contact_email_address.value == ""){
            errors+= 'Please provide a valid email address.';
        }


        if(errors)
        {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = errors;
            return false;
        }

        else{

            $.ajax({
                type: "POST",
                url: 'process.php',
                data: $("#contact_form").serialize(),
                success: function(msg)
                {
                    if(msg == 'success')
                    {
                        document.getElementById("error").style.display = "none";
                        document.getElementById("contact_name").value = "";
                        document.getElementById("contact_email").value = "";
                        document.getElementById("message").value = "";
                        $("#contact_form").hide();
                        document.getElementById("success").style.display = "block";
                        document.getElementById("success").innerHTML = "Thank You! We'll contact you shortly.";
                    }else{
                        document.getElementById("error").style.display = "block";
                        document.getElementById("error").innerHTML = "Oops! Something went wrong while prceeding.";
                    }
                }

            });

        }
    });

    /*
    ---------------------------
        dropdown submenu
    ---------------------------
    */

    $(document).ready(function(){
      $('.dropdown-submenu').on("click", function(e){
        $(this).next('ul.dropdown-2').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    });

    $( document ).ready(function() {
        $(".dropdown-submenu ul.dropdown-2 li a").click(function(){
           var url = $(this).attr("href"); 
           $(location).attr('href', url);
        });
    });

    /*
    ---------------------------
        Venobox
    ---------------------------
    */
    $(document).ready(function(){
            $('.venobox').venobox(); 
        });


        $("#firstlink").venobox().trigger('click');


        $('.venobox_custom').venobox({
        framewidth: '500px',        // default: ''
        frameheight: '400px',       // default: ''
        border: '5px',             // default: '0'
        bgcolor: '#5dff5e',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });
    


})(jQuery);