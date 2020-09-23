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
        if (ww < 960) {
            $('.paragraph2').removeClass('text-right');
            $('.paragraph2').addClass('text-center');
            $('.paragraph').addClass('text-center');
            $('.alignLine2').addClass('centerLine');
            $('.alignLine').addClass('centerLine');
            $('.alignLine').removeClass('right');
        } else if (ww >= 960) {
            $('.paragraph2').addClass('text-right');
            $('.paragraph').removeClass('text-center');
            $('.paragraph2').removeClass('text-center');
            $('.alignLine2').removeClass('centerLine');
            $('.alignLine').removeClass('centerLine');
            $('.alignLine').addClass('right');
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



// jQuery(document).ready(function($) {
//     var alterClass = function() {
//         if ($('.navi').alterClass('collapsed')) {
//             $('.background').removeClass('menuOpen');
//             $('.headerText').removeClass('menuOpen');
//         } else {
//             $('.background').addClass('menuOpen');
//             $('.headerText').addClass('menuOpen');
//         }
//     };
//     $(window).resize(function() {
//         alterClass();
//     });
//     alterClass();
// });