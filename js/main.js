$(() => {
    "use strict";
    // Toggle Languages
    let togSrc = ["../images/english.svg", "../images/arabic.png"];
    $(".navbar .navbar-nav .nav-item .language").on("click", function () {
        this.src = togSrc.reverse()[0];
    });
});