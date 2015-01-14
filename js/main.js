$(document).ready(function () {
	$(".select_contain").on("change",function(){
		$(this).parent().find(".select_val").text($(this).val());
	})
	$(".job_click_ser").on("click",function(){
		$(".search_contain").toggleClass("job_appear");
		$(".job_body > section").toggleClass("hidden");
	})
	$(".can").on("click",function(){
		$(this).parent().find(".serch").val("");
	})
})