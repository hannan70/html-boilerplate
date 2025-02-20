/*
Author       : sellerend
Template Name: Directory listing template
Version      : 1.0
*/

(function($) {
	'use strict';
	/*START SWIPER JS*/

	new WOW().init();

	// loader
	$(window).on( "load", function() {
		$('.preloader').fadeOut(1000);
	});

	// nice select

	$("#homeTwoCategory").niceSelect()
	$("#location").niceSelect()
	$("#category").niceSelect()
	$(".listing_select").niceSelect()


	new Swiper(".review_slider", {
		slidesPerView: 3,
		speed: 3000,
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			1200: {
				slidesPerView: 1,
			},
			1199: {
				slidesPerView: 1,
			}, 
			320: {
				slidesPerView: 1,
			}, 
		},
	});


	new Swiper(".latest_listing", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		speed: 3000,
		autoplay: {
			enabled: true,
			delay: 2000,
		},
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
			},
			1199: {
				slidesPerView: 2,
			}, 
			320: {
				slidesPerView: 1,
			}, 
		},
	});
	  
	new Swiper(".popular_listing", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	speed: 3000,
	autoplay: {
		enabled: true,
		delay: 2000,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		}, 
		1024: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
			
	},
	});
	 

	/*END SWIPER JS*/	

	var fixed_top = $("#menu_section");
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			fixed_top.addClass("sticky-menu animated fadeInDown");
		} else {
			fixed_top.removeClass("sticky-menu animated fadeInDown");
		}
	});

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').css({
				'bottom': '2%',
				'opacity': '1',
				'transition': 'all .5s ease'
			});
		} else {
			$('.scrollToTop').css({
				'bottom': '-30%',
				'opacity': '0',
				'transition': 'all .5s ease'
			})
		}
	});

	//Click event to scroll to top
	$('a.scrollToTop').on('click', function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	 

	$(document).ready(function(){
		$(".mobile_menu_top_right span").click(function(){
		$(".mobile_menu_top_right").toggleClass("hhhh");
			$(".mobile_menu_bottom").toggleClass("open");
		});
	});
		
	$(".main_mobile_menu ul li ul").parent("li").addClass("m");
	$('.main_mobile_menuul li a').on('click', function(e) {
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp("swing");
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown("swing");
			element.siblings('li').children('ul').slideUp("swing");
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp("swing");
		}
	});		


})(jQuery);


