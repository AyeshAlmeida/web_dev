var main = function(){
	"use strict";

	$(".comment-input button").on("click",function(event){
		var $new_comment;

		if($(".comment-input input").val() !== ""){
			$new_comment = $("<p>").text($(".comment-input input").val());
			$(".comments").append($new_comment);
			$(".comment-input input").val("");
		}
		else{
			window.alert("No comments given. Please, add a comment.");
		}
	});

	$(".comment-input input").on("keypress",function(event){
		if(event.keyCode === 13){
			console.log("Hello, I am the Key-bord" + event.keyCode);
		}
	})
};

$(document).ready(main);