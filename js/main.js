$(document).ready(function(){
	var colors = ["c_blue","c_purple","c_dirty","c_yellow","c_red","c_brown"]
	var illumination = function(firsttime){
		[].forEach.call(document.getElementsByName("colorblock"), function(block){
			setTimeout(function(){
				block.className = block.className.replace(/c_blue|c_purple|c_dirty|c_yellow|c_red|c_brown/g, colors[Math.floor(Math.random()*colors.length)]);
				if(! firsttime){block.className = block.className.replace(/fadefast/g, "fadein");};
			}, (firsttime ? 0 : 5000*Math.random()))
		});
		setTimeout(function(){illumination(false);}, (firsttime ? 100 : 5000*Math.random()))
	};
	$('[data-toggle="popover"]').popover();
	$('[data-toggle="tooltip"]').tooltip();
	illumination(true);
});
