function dimensionsAdjustment() {
    var link = document.querySelector(".link");
    if ($(window).width() < 768) {
        link.classList.add('float-left');
        link.classList.remove('float-right');
        link.classList.add('text-left');
        link.classList.remove('text-right');
        link.classList.add("alignLeft");
    } else if ($(window).width() >= 768) {
        link.classList.remove('float-left');
        link.classList.add('float-right');
        link.classList.remove('text-left');
        link.classList.add('text-right');
        link.classList.remove("alingLeft");
    };

    var straightLine = document.querySelector(".straightLine");
    var disposableImage = document.querySelector(".disposableImage");
    if ($(window).width() < 768) {
        straightLine.classList.add("small");
        disposableImage.classList.add("disposed");
    } else if ($(window).width() >= 768) {
        straightLine.classList.remove("small");
        disposableImage.classList.remove("disposed");
    };
}