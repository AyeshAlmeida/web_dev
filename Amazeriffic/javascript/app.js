var main = function(){

	"use strict";

	var activeTab = function(number){
		var selectedtab = ".tabs a:nth-child("+number+") span";
		$(".tabs span").removeClass("active");
		$(selectedtab).addClass("active");
	};

	$(".tabs a:nth-child(1)").on("click",function(){
		activeTab(1);
		return false;
	});

	$(".tabs a:nth-child(2)").on("click",function(){
		activeTab(2);
		return false;
	});

	$(".tabs a:nth-child(3)").on("click",function(){
		activeTab(3);
		return false;
	});


};

$(document).ready(main);