"use strict";
$(document).ready(function() {

    $('.icon-switch').on('click', function() {
        $('.switch').toggleClass('switch-on');

    });

    $('.color-change').on('click', function() {
        var atrColor = $(this).attr('data-color');
        $("body").removeClass("defolt-bg-light-green  defolt-bg-blue defolt-bg-green defolt-bg-brown defolt-bg-orange defolt-bg-yellow cartografer  dark-wood swirl-pt table-wood vintage-concrete white-waves");

        switch (atrColor) {
            case "light-green":
                $(".s-color").attr("href", "assets/css/light-green-1.css");
                $("body").addClass("defolt-bg-light-green");
                break;
            case "blue":
                $(".s-color").attr("href", "assets/css/blue.css");
                $("body").addClass("defolt-bg-blue");
                break;
            case "green":
                $(".s-color").attr("href", "assets/css/green.css");
                $("body").addClass("defolt-bg-green");
                break;
            case "brown":
                $(".s-color").attr("href", "assets/css/brown.css");
                $("body").addClass("defolt-bg-brown");
                break;
            case "orange":
                $(".s-color").attr("href", "assets/css/orange.css");
                $("body").addClass("defolt-bg-orange");
                break;
            case "yellow":
                $(".s-color").attr("href", "assets/css/yellow.css");
                $("body").addClass("defolt-bg-yellow");
                break;
        }
    });

    // bg-change
        $('.bg-change').on('click', function() {
        var atrBg = $(this).attr('data-bg');
        $("body").removeClass("cartografer  dark-wood swirl-pt table-wood vintage-concrete white-waves");
        switch (atrBg) {
            case "cartografer":
                $("body").addClass("cartografer");
                break;
            case "dark-wood":
                $("body").addClass("dark-wood");
                break;
            case "swirl-pt":
                $("body").addClass("swirl-pt");
                break;
            case "table-wood":
                $("body").addClass("table-wood");
                break;
            case "vintage-concrete":
                $("body").addClass("vintage-concrete");
                break;
            case "white-waves":
                $("body").addClass("white-waves");
                break;
        }
    });


});