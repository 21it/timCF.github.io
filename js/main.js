"use strict";
$(document).ready(function(){

  var timeout = 500;

  var novacancy = function(){
    var glow_color  = '#ffffff';
    var glow_blur   = ['0 0 15px #ffffff', '0 0 10px #008000', '0 0 5px #0000ff', '0.5vmin 0.5vmin 0 #000000'];
    $('#app-myname').novacancy({
      color:  glow_color,
      glow:   glow_blur,
      off:    2,
      blink:  0,
      autoOn: true,
    });
    $('#short-summury').novacancy({
      color:  glow_color,
      glow:   glow_blur,
      autoOn: false,
    });
    $(".typed-cursor").removeAttr("style").removeClass("tnsl-flicker").novacancy({
      color:  glow_color,
      glow:   glow_blur,
      autoOn: false,
    });
  };

	var main = function(){
		$('[data-toggle="popover"]').popover();
		$('[data-toggle="tooltip"]').tooltip();
    new Typed('#app-myname', {
      strings:    ['Ilja Tkachuk^500\naka timCF^500'],
      showCursor: true,
      cursorChar: "▐",
      typeSpeed:  30,
      onComplete: function(){
        $('#app-myname').addClass("tnsl-flicker");
        $('.typed-cursor').addClass("tnsl-flicker");
        tnslInit(0);
        setTimeout(novacancy, timeout);
      }
    });
  };

  $(window).on("load", function() {
    $(".app-main-ava").removeClass("hidden");
    setTimeout(main, timeout * 2);
  });

});
