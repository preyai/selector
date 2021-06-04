$(document).ready(function () {
    $('#partners').owlCarousel({
        margin: 55,
        autoHeight: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.tab-carousel').owlCarousel({
        items: 1,
        dots:true,
    });
    $('.switch').on('click', function() {
        $('.switch').removeClass('active');
        $(this).addClass('active');
        $('.tab').removeClass('active');
        $('#'+$(this).attr('data-for')).addClass('active')
    });
});