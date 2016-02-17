// When user clicks on contact in nav bar a form pops up.
	// user enters name, email address, and message
	// when user pushes send button the email is sent and form is cleared from the window.

$('.getintouch').on('click', function() {
	$('.dropdown-menu').slideToggle();
});

function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggle-image'); // Get the images to be cycled.

	setInterval(function () {
		$imageEls.eq(index).removeClass('show');
		// Get the next index.  If at end, restart to the beginning.
		index = index + 1 < $imageEls.length ? index + 1 : 0;
		// Show the next image.
		$imageEls.eq(index).addClass('show');
		// Hide the previous image.

	}, 3000);



};

// Document Ready.
$(function () {
	cycleBackgrounds();
});