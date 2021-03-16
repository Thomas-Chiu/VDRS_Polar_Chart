$(function () {

    var newHash = '',
        $mainContent = $('.pageLoad');
    $('.introduce-menu, .jobajax').delegate('a', 'click', function () {
        $(window).scrollTop(0);
        window.location.hash = $(this).attr('href');
        $('.introduce-menu a.active').removeClass();
        $(this).addClass('active');
        return false;
    });
    $(window).bind('hashchange', function () {
        newHash = window.location.hash.substr(1);
        $mainContent.load(newHash + " > *");
    });

});