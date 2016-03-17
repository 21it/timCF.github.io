$(document).ready(function(){
	var colors = ["c_blue","c_purple","c_dirty","c_yellow","c_red","c_brown"]
	var illumination = function(block, firsttime){
		block.className = block.className.replace(/c_blue|c_purple|c_dirty|c_yellow|c_red|c_brown/g, colors[Math.floor(Math.random()*colors.length)]);
		if(! firsttime){block.className = block.className.replace(/fadefast/g, "fadein");};
		setTimeout(function(){illumination(block,false);}, (firsttime ? 1 : 5000*Math.random()));
	};
	$('[data-toggle="popover"]').popover();
	$('[data-toggle="tooltip"]').tooltip();
	[].forEach.call( document.getElementsByName("colorblock"), function(block){illumination(block,true)} );
});
