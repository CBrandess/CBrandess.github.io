// When user clicks on contact in nav bar a form pops up.
	// user enters name, email address, and message
	// when user pushes send button the email is sent and form is cleared from the window.

$('.getintouch').on('click', function() {
	$('.dropdown-menu').slideToggle();
});

(function() {

  // On icon click...
  $('.menu-link-wrapper').on('click.mobileNav', function(){

    // Toggle the open/closed state of the menu icon
    $('.menu-link-wrapper .menu-link').toggleClass('menu-trigger-open');

  });
  
})();

$('.menu-link-wrapper').on('click', function(){
  $('.mainNavDropDown').slideToggle(500);
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

var $contactForm = $('#ajaxContactForm');

$contactForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: '//formspree.io/carlybrandess@gmail.com',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $contactForm.prepend('<div class="alert alert-loading"><p>Sending message…</p></div>');
    },
    success: function(data) {
      $contactForm.addClass('form-sent').find('.alert').removeClass('alert-loading').addClass('alert-success').html('<p>Thanks! Your message has been sent!</p>');
    },
    error: function(err) {
      $contactForm.find('.alert').removeClass('alert-loading').addClass('alert-error').html('<p>Oopsies! There was an error.</p>');
    }
  });
});

