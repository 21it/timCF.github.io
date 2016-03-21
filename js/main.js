"use strict";
$(document).ready(function(){

	var main = function(colors, animations){
		var initdelay = 1500;
		var recursiveapply = function(mainblock, block, selector, classes){
			[].forEach.call($(block).find(selector), function(el){
				$(mainblock).hover(
					function(){$(el).addClass(classes);},
					function(){$(el).removeClass(classes);}
				);
			});
			[].forEach.call($(block).children(), function(block){recursiveapply(mainblock, block, selector, classes);});
		};
		var illumination = function(block, firsttime){
			block.className = block.className.replace(/c_blue|c_purple|c_dirty|c_yellow|c_red|c_brown/g, colors[Math.floor(Math.random()*colors.length)]);
			if(! firsttime){block.className = block.className.replace(/fadefast/g, "fadein");};
			setTimeout(function(){illumination(block,false);}, (firsttime ? 1 : 5000*Math.random()));
		};
		$('[data-toggle="popover"]').popover();
		$('[data-toggle="tooltip"]').tooltip();
		$(".btn").hover(function(){$(this).toggleClass("animated jello infinite");});
		$(".imgicon").hover(function(){
			if($(this).attr("name") != "blockimg"){
				$(this).toggleClass("animated rubberBand infinite");
			};
		});
		[].forEach.call($(".inithidden"), function(block){
			setTimeout(
				function(){
					$(block).removeClass("inithidden").addClass("animated "+animations[Math.floor(Math.random()*animations.length)]);
					if($(block).attr("name") == "colorblock"){
						recursiveapply(block,block,'*[name*=blocktext]',"animated swing");
						recursiveapply(block,block,'*[name*=blockimg]',"animated rubberBand infinite");
						illumination(block,true);
					};
				},
				(($(block).attr("name") == "baseblock") ? (initdelay / 3) : initdelay)*Math.random());
		});
	};

	$.get('/data/colors.yml').done(function(colors){
		$.get('/data/animations.yml').done(function(animations){
			main(jsyaml.load(colors), jsyaml.load(animations));
		});
	});
});
