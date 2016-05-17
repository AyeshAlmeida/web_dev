var main = function(){
	"use strict";
	
	$(".tabs a span").toArray().forEach(function (element){
		//creating a click-handler to elements
		$(element).on("click",function (){
			$(".tabs a span").removeClass("active");
			$(element).addClasss("active");
			$("main .content").empty();
			return false;
		});
	});	
};

$(document).ready(main);