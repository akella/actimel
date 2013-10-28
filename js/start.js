jQuery(function ($) {

    $('.video-thumb').on("click", function () {
        var $this = $(this);
        var $thisIndex = $('.video__controls .video-thumb').index($this);

        if ($this.hasClass("opened")) {
            return;
        }
        else {
            if ($this.hasClass("active")) {
                $('.video-thumb').removeClass("opened");
                $this.addClass("opened watched");
                $(".video-item").removeClass("active");
                $(".video__main .video-item").eq($thisIndex).addClass("active");
            }
        }
    });

    $(window).load(function () {

        $('.carousel ul').carouFredSel({
            items: 1,
            responsive: true,
            auto: {
                play: false,
                timeoutDuration: 500
            },
            prev: '.carousel .prev',
            next: '.carousel .next',
            pagination: '.carousel__paging',
            scroll: {
                duration: 1500
            }
        });

        $('.promo-archive__slider ul').carouFredSel({
            items: 3,
            auto: {
                play: false,
                timeoutDuration: 500
            },
            prev: '.promo-archive .prev',
            next: '.promo-archive .next',
            scroll: {
                items: 1,
                duration: 1500
            }
        });

        $('.product-descr__list').carouFredSel({
            items: 1,
            responsive:true,
            auto: {
                play: false,
                timeoutDuration: 3000
            },
            prev: '.product-descr .prev',
            next: '.product-descr .next'
        });

        $('.product-slider__i ul').carouFredSel({
            items: 5,
            auto: {
                play: true,
                timeoutDuration: 3000
            },
            scroll: {
                items: 1,
                duration: 1500
            },
            prev: '.product-slider .prev',
            next: '.product-slider .next'
        });

    });


});










