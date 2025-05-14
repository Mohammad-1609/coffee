$(window).scroll(function () {
    if ($(this).scrollTop() >= 3000) {
        $('#top').css({
            'bottom': '60px'
        });
    } else {
        $('#top').css({
            'bottom': '-60px'
        });
    }
});
$('#top').click(function (e) {
    e.preventDefault();
    $('body,html').animate({
        'scrollTop': '0'
    }, 1000);
});