var main = function(){
	"use strict";

	//listenr is impemented using for-each loop
	$(".tabs a span").toArray().forEach(function (elements){
		$(elements).on("click",function(){
			$(".tabs a span").removeClass("active");
			$(elements).addClass("active");
			$(".main .content").empty();
			return false;
		});
	});
};

$(document).ready(main);