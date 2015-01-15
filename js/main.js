$(document).ready(function() {
	var move;
	var isMove = false;
	$(".select_contain").on("change", function() {
		$(this).parent().find(".select_val").text($(this).val());
	});
	$(".job_click_ser").on("click", function() {
		$(".search_contain").toggleClass("job_appear");
		$(".job_body > section").toggleClass("hidden");
		$(".job_click_ser").toggleClass("xuanzhuan");
	});
	$(".can").on("click", function() {
		$(this).parent().find(".serch").val("");
	});
	$(".first_slide").on('touchstart', function(event1) {
		event1.preventDefault();
		/* Act on the event */
		// var top = $(this).offset().top;
		var move1 = event1.targetTouches[0].pageY;
		$(this).on("touchmove", function(event2) {
			event2.preventDefault();
			if (isMove) {
				return false;
			};
			move = event2.targetTouches[0].pageY - move1;
			if (move < -30) {
				var a = 0-$(this).height();
				$(".home").css("transform","translateY("+a+"px)");
				$(".home").css("-webkit-transform","translateY("+a+"px)");
				isMove = true;
			}
		})
	});
	$(".first_slide").on("touchend", function(event) {
		event.preventDefault();
		if (isMove) {
			$(".first_slide").off();
		}
	})
});