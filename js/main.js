"use strict";
$(document).ready(function(){

	var main = function(colors, animations){
		$('[data-toggle="popover"]').popover();
		$('[data-toggle="tooltip"]').tooltip();

    var typed = new Typed('#app-greetings', {
      strings: ['Ilja Tkachuk^500\naka timCF'],
      showCursor: true,
      cursorChar: "▐",
      typeSpeed: 30
    });

	};

	$.get('/data/colors.yml').done(function(colors){
		$.get('/data/animations.yml').done(function(animations){
			main(jsyaml.load(colors), jsyaml.load(animations));
		});
	});
});
