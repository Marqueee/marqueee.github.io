/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));

//Mobile MENU
//Adding class to Logo for activating menu
function AddMenu() {
  if (window.innerWidth < 800) {
        $('.logo').addClass('menu-logo');
  }
}
// Find element with the class 'js-menu-container' and apply an additional class of 'is-open'
function openMenu() {
		$('#overlay').addClass('open');
}
// Find element with the class 'js-menu-container' and remove the class 'is-open'
function closeMenu() {
		$('#overlay').removeClass('open');
}
// Document Ready
// Wait for everything to finish loading

	jQuery(document).ready(function($){
    // When the element with the class 'js-menu-button' is clicked
    AddMenu();
		$('.menu-logo').click(function(){
			openMenu(); // Run the openMenu function
		});
    // When the element with the class 'js-menu-close' is clicked
		$('.cancel').click(function(){
    // Run the closeMenu function
			closeMenu();
		});
	});
  // Listen for keyboard presses
  	jQuery(document).keyup(function(e) {
      // 'Esc' key
  		if (e.keyCode === 27) {
        // If the menu is open close it
  			if ($('#overlay').hasClass('open')) {

          // Run the closeMenu function
  				closeMenu();
  			}
  		}
  	});

// $('.toggle').click(function() {
//    $(this).toggleClass('active');
//    $('#overlay').toggleClass('open');
//   });

	/*
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
	*/
}
