var main = function(){
	"use strict";

	//todo-list
	var toDos = [
		"Finish reading books.",
		"Take Mom to park.",
		"Answer emails.",
		"Prep for Monday class.",
		"Make some new ToDos.",
		"Get groceries."
	];

	var tab;

	//listener is impemented using for-each loop
	var arr = $(".tabs a span").toArray();
	for(tab=1;tab<=3;tab++){
		var element = arr[tab];
	
		$(element).on("click",function (){
			
			var $element = $(element),$content;

			$(".tabs a span").removeClass("active");
			$(element).addClass("active");
			$(".main .content").empty();

			

			if($element.parent().is(":nth-child(1)")){
				console.log("First Element Selected.");
			}else if($element.parent().is(":nth-child(2)")){
				console.log("Second Element Selected.");

				//adding new 'unordered-list'
				$content = $("ul");
				toDos.forEach(function (todo){
					$content.append($("li").text(todo));
				});

				$("main .content").append($content);

			}else if($element.parent().is(":nth-child(3)")){
				console.log("Third Element Selected.");
			}
			return false;
		});
	};
};

$(document).ready(main);