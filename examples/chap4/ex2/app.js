var main = function(){
	"use strict";

	$(".comment-input button").on("click",function(event){
		var $new_comment = $("<p>");
		$new_comment.text("This is hitero-genius comment.");
		$(".comments").append($new_comment);
	});
};

$(document).ready(main);