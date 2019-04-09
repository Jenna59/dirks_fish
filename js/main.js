// Adapted from: https://codepen.io/lisseteb/pen/LLovRO
$(document).ready(function() {
    $(".navbar").accessibleDropDown();
});

$.fn.accessibleDropDown = function () {
    var el = $(this);

    /* Make dropdown menus keyboard accessible */

    $("a", el).focus(function() {
        $(this).parents("li").addClass("hover");
    }).blur(function() {
        $(this).parents("li").removeClass("hover");
    });
};




