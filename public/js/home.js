$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Toggle Filter Script
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    $(document).ready(function () {
        switch (category) {
            case 'headphone':
                $("#headphones").click();
                break;
            case 'laptop':
                $("#laptops").click();
                break;
            case 'tablet':
                $("#tablets").click();
                break; 
            case 'mouse':
                $("#mouse").click();
                break; 
            default:
                $('#all').click();
        }

    });

    $('#all').click(function () {
        $('.filter-content .parts-1 .filter-item').removeClass("active");
        $('.fa-solid.fa-angle-down').removeClass("active");
        $('#all').toggleClass("active");
        $('#all .fa-solid.fa-angle-down').toggleClass("active");
    });

    $('#headphones').click(function () {
        $('.filter-content .parts-1 .filter-item').removeClass("active");
        $('.fa-solid.fa-angle-down').removeClass("active");
        $('#headphones').toggleClass("active");
        $('#headphones .fa-solid.fa-angle-down').toggleClass("active");
    });

    $('#laptops').click(function () {
        $('.filter-content .parts-1 .filter-item').removeClass("active");
        $('.fa-solid.fa-angle-down').removeClass("active");
        $('#laptops').toggleClass("active");
        $('#laptops .fa-solid.fa-angle-down').toggleClass("active");
    });

    $('#tablets').click(function () {
        $('.filter-content .parts-1 .filter-item').removeClass("active");
        $('.fa-solid.fa-angle-down').removeClass("active");
        $('#tablets').toggleClass("active");
        $('#tablets .fa-solid.fa-angle-down').toggleClass("active");
    });

    $('#mouse').click(function () {
        $('.filter-content .parts-1 .filter-item').removeClass("active");
        $('.fa-solid.fa-angle-down').removeClass("active");
        $('#mouse').toggleClass("active");
        $('#mouse .fa-solid.fa-angle-down').toggleClass("active");
    });

    $('#watches').click(function () {
        $('.filter-content .parts-1 .filter-item').removeClass("active");
        $('.fa-solid.fa-angle-down').removeClass("active");
        $('#watches').toggleClass("active");
        $('#watches .fa-solid.fa-angle-down').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    })
});