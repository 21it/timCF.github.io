"use strict";
$(document).ready(function(){

	var main = function(colors, animations){
		$('[data-toggle="popover"]').popover();
		$('[data-toggle="tooltip"]').tooltip();
	};

	$.get('/data/colors.yml').done(function(colors){
		$.get('/data/animations.yml').done(function(animations){
			main(jsyaml.load(colors), jsyaml.load(animations));
		});
	});
});
