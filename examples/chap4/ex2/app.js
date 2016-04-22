var main = function(){
	"use strict";

	var addComment = function(){
		var $new_comment;

		if($(".comment-input input").val() !== ""){
			$new_comment = $("<p>").text($(".comment-input input").val());
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val("");
		}
		else{
			window.alert("No comments given. Please, add a comment.");
		}
	};

	$(".comment-input button").on("click",function(event){
		addComment();
	});

	$(".comment-input input").on("keypress",function(event){
		if(event.keyCode === 13){
			var $new_comment;

			if($(".comment-input input").val() !== ""){
				$new_comment = $("<p>").text($(".comment-input input").val());
				$new_comment.hide();
				$(".comments").append($new_comment);
				$new_comment.fadeIn();
				$(".comment-input input").val("");
			}
			else{
				window.alert("No comments given. Please, add a comment.");
			}
		}
	});
};

$(document).ready(main);