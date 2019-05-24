$(document).ready(function () {

	$('.menuhead .collapse ul li:nth-child(1) a').click(function () {
		event.preventDefault();
		$("html").animate({
			scrollTop: $("#about").offset().top
		}, 1500, "easeOutExpo");
	});
	$('.menuhead .collapse ul li:nth-child(2) a').click(function () {
		event.preventDefault();
		$("html").animate({
			scrollTop: $("#services").offset().top
		}, 1500, "easeInOutQuint");
	});
	$('.menuhead .collapse ul li:nth-child(3) a').click(function () {
		event.preventDefault();
		$("html").animate({
			scrollTop: $("#porfolio").offset().top
		}, 1500, "easeInOutElastic");
	});
	$('.menuhead .collapse ul li:nth-child(4) a').click(function () {
		event.preventDefault();
		$("html").animate({
			scrollTop: $("#contact").offset().top
		}, 1500, "easeOutBounce");
	});
	$(window).scroll(function () {
		if ($('html').scrollTop() > 100)
			$('.menutop').addClass('action');
		else
			$(".menutop").removeClass("action");
	})
});
