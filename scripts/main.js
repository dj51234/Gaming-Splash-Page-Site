$(document).ready(function() {

	$('.learn-more').click(function() {

		$('.overlay').addClass('displayed');
		return false;

	});

	$('.close-btn').click(function() {

		$('.overlay').removeClass('displayed');
		return false;

	});

});