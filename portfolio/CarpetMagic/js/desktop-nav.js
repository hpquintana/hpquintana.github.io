jQuery("document").ready(function ($) {
    var nav = $('.nav-container');
    var pos = nav.offset().top;
    $( document ).ready(function() {
        if (nav.is(':visible')) {
            var fix = ($(this).scrollTop() > pos) ? true : false;
            nav.toggleClass("fix-nav", fix);
        }
    });
    $(window).scroll(function () {
        if (nav.is(':visible')) {
            var fix = ($(this).scrollTop() > pos) ? true : false;
            nav.toggleClass("fix-nav", fix);
        }
    });
});

$(document).ready(function () {
    $('#map').addClass('scrolloff'); // set the mouse events to none when doc is ready
    $('#overlay').on("mouseup", function () { // lock it when mouse up
        $('#map').addClass('scrolloff');
        //somehow the mouseup event doesn't get call...
    });
    $('#overlay').on("mousedown", function () { // when mouse down, set the mouse events free
        $('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () { // becuase the mouse up doesn't work... 
        $('#map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        // or you can do it on some other event
    });
});