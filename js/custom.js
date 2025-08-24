(function ($) {
    "use strict";
    var windowOn = $(window);
    $(document).ready(function () {
        windowOn.on('load', function () {
        });
        
        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });
        //>> Sticky Menu <<//
        windowOn.on('scroll', function () {
            var scroll = windowOn.scrollTop();
            if (scroll < 300) {
                $("#header-sticky").removeClass("sticky_top");
            } else {
                $("#header-sticky").addClass("sticky_top");
            }
        });
        //>> offcanvas bar <<//
        $(".tp-offcanvas-toogle").on('click', function () {
            $(".tp-offcanvas").addClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });
        $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function () {
            $(".tp-offcanvas").removeClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });

        // FAQ
        function Faq() {
                $('.accordion-item .accordion-header').on('click', function () {
                    const clickedItem = $(this).closest('.accordion-item');
                    const content = clickedItem.find('.accordion-content'); 

                    $('.accordion-item.active').not(clickedItem).each(function () {
                        const activeContent = $(this).find('.accordion-content'); 
                        activeContent.css('height', activeContent.prop('scrollHeight') + 'px');
                        setTimeout(() => {
                            activeContent.css('height', '0px');
                            $(this).removeClass('active');
                        }, 10);
                    });

                    if (clickedItem.hasClass('active')) {
                        content.css('height', content.prop('scrollHeight') + 'px');
                        setTimeout(() => {
                            content.css('height', '0px');
                            clickedItem.removeClass('active');
                        }, 10);
                    } else {
                        clickedItem.addClass('active');
                        const scrollHeight = content.prop('scrollHeight');
                        content.css('height', '0px');
                        setTimeout(() => {
                            content.css('height', scrollHeight + 'px');
                        }, 10);

                          content.one('transitionend', function () {
                            $(this).css('height', '');
                        });
                    }
                });
            
        }
        Faq();

        // Brand Slider
        function Brand() {
                $('.mb_branding_wrapper_ltr').slick({
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 3000,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                speed: 4000
                            }
                        },
                        {
                            breakpoint: 998,
                            settings: {
                                slidesToShow: 2,
                                speed: 4000,

                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                speed: 4000,

                            }
                        },
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 3,
                                speed: 4000,

                            }
                        }
                    ]
                });
                $('.mb_branding_wrapper_rtl').slick({
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 3000,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    rtl: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                speed: 4000
                            }
                        },
                        {
                            breakpoint: 998,
                            settings: {
                                slidesToShow: 2,
                                speed: 4000,

                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                speed: 4000,

                            }
                        },
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 3,
                                speed: 4000,

                            }
                        }
                    ]
                });
            
        }
        Brand()

        $(document).ready(function () {
            $('.mb_card_option').on('click', function () {
                $('.mb_card_option').removeClass('mb_selected');

                $(this).addClass('mb_selected');

                $(this).find('input[type="radio"]').prop('checked', true);
            });

            $('input[name="mb_property_type"]').on('change', function () {
                $('.mb_card_option').removeClass('mb_selected');

                $(this).closest('.mb_card_option').addClass('mb_selected');
            });
        });

        // How It Work
        function howWork(){
            $('.mb_how_work_slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: true, 
                    verticalSwiping: true,
                    arrows: true,
                    dots: true,
                    dotsClass: "mb_how_work_dots",
                    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-up"></i></span>`,
                    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-down"></i></span>`,
                });
        }
        howWork()
       
        
        $('.open_more_content').on('click', () => {
            $('.mb_casa_brokerage').toggleClass('active');
            $('.mb_casa_brokerage_contains').toggleClass('active');
        });
        // Popular Types Of Housing
        $('.mb_popular_house').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 3000,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
        $('.mb_saved_listing_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 3000,
            dots: true,
            
            dotsClass: "mb_seved_listing",
            infinite: true,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
        $('.mb_image_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 3000,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });

        $(document).ready(function () {
            $('.read-more-btn').on('click', function (e) {
                e.preventDefault();
                var container = $(this).closest('.read-more-container');
                container.toggleClass('expanded');

                if (container.hasClass('expanded')) {
                    $(this).text('Show less');
                } else {
                    $(this).text('More....');
                }
            });
        });
        $(document).ready(function () {
            $('.header nav ul li').on('click', function () {
                $('.header nav ul li').removeClass('active');
                $(this).addClass('active');
            });

            $('.btn-action').on('click', function () {
                alert('Action menu toggled!');
            });

            $('.btn-add-listing').on('click', function () {
                alert('Redirecting to the "Add Listing" page.');
            });
        });
        // Gsap RegisterPlugin
        gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

        // Smooth Scroller
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.3,
            effects: true,
            smoothTouch: 0.1,
        });

        // Header h1 Animate
        function textAnimation() {
            const blogNewsContains = document.querySelectorAll(".heading h1");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".header_area",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1.5,
                    stagger: 0.3,
                });
            }
        }
        textAnimation()
      
        // Counting
        $(".about_count").each(function () {
            let counter = $(this);
            let targetValue = counter.data("count").toString().replace(/\D/g, "");
            let suffix = counter.data("count").toString().replace(/\d/g, "");
            gsap.to(counter[0], {
                innerText: targetValue,
                snap: "innerText",
                ease: "power2.out",
                duration: 3,
                scrollTrigger: {
                    trigger: counter[0],
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onUpdate: function () {
                    counter.text(Math.round(counter.text()) + suffix);
                },
                onStart: () => {
                    gsap.to(counter[0], { opacity: 1, scale: 1, duration: 0.5 });
                }
            });
        });

        // Tour Schedule
        function generateCalendar() {
            let currentDate = new Date();
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            // Function to populate month and year dropdowns
            function populateDropdowns() {
                const monthSelect = $('#mb_month_select');
                const yearSelect = $('#mb_year_select');

                // Populate months
                monthSelect.empty();
                $.each(monthNames, function (index, value) {
                    const option = $('<option>').val(index).text(value);
                    monthSelect.append(option);
                });

                // Populate years (e.g., current year +/- 5)
                yearSelect.empty();
                const currentYear = new Date().getFullYear();
                for (let i = currentYear - 5; i <= currentYear + 5; i++) {
                    const option = $('<option>').val(i).text(i);
                    yearSelect.append(option);
                }
            }

            // Function to generate the calendar days
            function generateCalendar(date) {
                const calendarContainer = $('#mb_calendar_days');
                calendarContainer.empty();

                const year = date.getFullYear();
                const month = date.getMonth();

                const firstDayOfMonth = new Date(year, month, 1);
                const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 for Sunday, 1 for Monday, etc.
                const daysInMonth = new Date(year, month + 1, 0).getDate();
                const today = new Date();

                // Set dropdown values to match the current date
                $('#mb_month_select').val(month);
                $('#mb_year_select').val(year);

                // Add empty placeholders for the days of the week before the 1st
                for (let i = 0; i < firstDayOfWeek; i++) {
                    const emptyDay = $('<div>').addClass('mb_day mb_inactive');
                    calendarContainer.append(emptyDay);
                }

                // Add active days for the current month
                for (let i = 1; i <= daysInMonth; i++) {
                    const day = $('<div>').addClass('mb_day').text(i);
                    // Check if this day is today and mark it as selected by default
                    if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
                        day.addClass('mb_selected');
                    }

                    // Add a click event listener to select the day
                    day.on('click', function () {
                        $('.mb_day').removeClass('mb_selected');
                        $(this).addClass('mb_selected');
                    });
                    calendarContainer.append(day);
                }
            }

            // Event listeners for month navigation (left/right arrows)
            $('#mb_prev_month').on('click', function () {
                const newMonth = currentDate.getMonth() - 1;
                const newYear = currentDate.getFullYear();
                currentDate = new Date(newYear, newMonth, 1);
                generateCalendar(currentDate);
            });

            $('#mb_next_month').on('click', function () {
                const newMonth = currentDate.getMonth() + 1;
                const newYear = currentDate.getFullYear();
                currentDate = new Date(newYear, newMonth, 1);
                generateCalendar(currentDate);
            });

            // Event listener for dropdown changes
            $('#mb_month_select, #mb_year_select').on('change', function () {
                const newMonth = $('#mb_month_select').val();
                const newYear = $('#mb_year_select').val();
                currentDate = new Date(newYear, newMonth, 1);
                generateCalendar(currentDate);
            });

            // Generate the initial calendar and populate dropdowns
            populateDropdowns();
            generateCalendar(currentDate);
        }
        generateCalendar();

        // Map Search Filter
        $(document).ready(function () {
            function searchFilter() {
                $(".mb_single_filter button").on("click", function () {
                    $(this).toggleClass("active");
                });
            }
            searchFilter();

            $('.view-button').on('click', function () {
                $('.view-button').removeClass('selected');
                $(this).addClass('selected');
            });

            $('.status-button').on('click', function () {
                $('.status-button').removeClass('selected');
                $(this).addClass('selected');
            });
        });

        // Back to Top Button
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 200) {
                $(".back_top").addClass("show");
            } else {
                $(".back_top").removeClass("show");
            }
        });
        $(".back_top").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });

        //  Magnific Popup Configuration
        $('.playBtn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: function (url) {
                            // Support both ?v=ID and /embed/ID
                            const watchMatch = url.match(/[?&]v=([^&]+)/);
                            if (watchMatch && watchMatch[1]) return watchMatch[1];

                            const embedMatch = url.match(/embed\/([^\?&]+)/);
                            if (embedMatch && embedMatch[1]) return embedMatch[1];

                            return null;
                        },
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            },
            callbacks: {
                close: function () {
                    document.activeElement && document.activeElement.blur();

                    setTimeout(() => {
                        $('#main-content, .slick-current .playBtn').first().focus();
                    }, 100);
                }
            }
        });

        // Nice Select
        $('select').niceSelect();
    });

    // Preloader
    $(window).on("load", function () {
        const preloader = document.querySelector(".preloader_area");
        preloader.style.transition = "all 0.5s ease";
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    });
})(jQuery);

