var main = function(){
	"use strict";

	//todo-list
	var todo = [
		"Finish reading books.",
		"Take Mom to park.",
		"Answer emails.",
		"Prep for Monday class.",
		"Make some new ToDos.",
		"Get groceries."
	];

	//listenr is impemented using for-each loop
	$(".tabs a span").toArray().forEach(function (element){
		$(element).on("click",function(){
			
			var $element = $(element);

			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			$(".main .content").empty();

			

			if($element.parent().is(":nth-child(1)")){
				console.log("First Element Selected.");
			}else if($element.parent().is(":nth-child(2)")){
				console.log("Second Element Selected.");
			}else if($element.parent().is(":nth-child(3)")){
				console.log("Third Element Selected.");
			}
			return false;
		});
	});
};

$(document).ready(main);