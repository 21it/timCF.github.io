"use strict";
$(document).ready(function(){

	var main = function(colors, animations){

		$('[data-toggle="popover"]').popover();
		$('[data-toggle="tooltip"]').tooltip();

    var glow_color  = '#ffffff'
    var glow_blur   = ['0 0 15px #ffffff', '0 0 10px #008000', '0 0 5px #0000ff']

    new Typed('#app-myname', {
      strings:    ['Ilja Tkachuk^500\naka timCF'],
      showCursor: true,
      cursorChar: "▐",
      typeSpeed:  30,
      onComplete: function(){
        $('#app-myname').novacancy({
          color:  glow_color,
          glow:   glow_blur,
          off:    2,
          blink:  0,
          autoOn: true,
        });
        $(".typed-cursor").novacancy({
          color:  glow_color,
          glow:   glow_blur,
          autoOn: false,
        });
      }
    });
	};

	$.get('/data/colors.yml').done(function(colors){
		$.get('/data/animations.yml').done(function(animations){
			main(jsyaml.load(colors), jsyaml.load(animations));
		});
	});
});
