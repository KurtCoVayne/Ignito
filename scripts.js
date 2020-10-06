jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 753) {
            $('.link').addClass('float-left');
            $('.link').removeClass('float-right');
            $('.link').addClass('text-left');
            $('.link').removeClass('text-right');
            $('.link').addClass("alignLeft");
        } else if (ww >= 750) {
            $('.link').removeClass('float-left');
            $('.link').addClass('float-right');
            $('.link').removeClass('text-left');
            $('.link').addClass('text-right');
            $('.link').removeClass("alingLeft");
        };
    };
    $(window).resize(function() {
        alterClass();
    });
    alterClass();
});

jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 755) {
            $('.straightLine').addClass("small");
            $('.disposableImage').addClass("disposed");
        } else if (ww >= 755) {
            $('.straightLine').removeClass("small");
            $('.disposableImage').removeClass("disposed");
        };
    };
    $(window).resize(function() {
        alterClass();
    });
    alterClass();
});