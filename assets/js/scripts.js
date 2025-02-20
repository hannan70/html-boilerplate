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
	
	new Swiper(".testmonial", {
	slidesPerView: 2,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		enabled: true,
		delay: 2000,
	},
	breakpoints: {
		1200: {
			slidesPerView: 2,
		},
		1199: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 1,
		} ,
		320: {
			slidesPerView: 1,
		} 
	},
	});
	new Swiper(".client_logo", {
	slidesPerView: 5,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		enabled: true,
		delay: 2000,
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 3,
			spaceBetween: 20,
		}, 
		1024: {
			slidesPerView: 4,
			spaceBetween: 50,
		},
		1200: {
			slidesPerView: 5,
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
		$(".header-item-right span").click(function(){
		$(".header-item-right").toggleClass("hhhh");
			$(".header-bottom").toggleClass("open");
		});
	});
		
	$(".header-menu ul li ul").parent("li").addClass("m");
	$('.header-menu ul li a').on('click', function(e) {
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

	// listing image upload
	let fileinput = document.querySelector('.listing_file_up')
	let form = document.querySelector('.upload_wrapper')

	form?.addEventListener("click", function(){
		fileinput.click();
	})

	$('#list_view').click(function() {
		$("#active_grid_view_inner").addClass("d-none")
		$("#active_list_view_inner").removeClass("d-none")
		$(this).addClass("grid_active")
		$("#grid_view").removeClass("grid_active")
	})

	$('#grid_view').click(function() {
		$("#active_grid_view_inner").removeClass("d-none")
		$("#active_list_view_inner").addClass("d-none")
		$(this).addClass("grid_active")
		$("#list_view").removeClass("grid_active")
	})
 

	$('.gallerys').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled: true
		},
	});

	// payment method jQuery 
	$("#paypal_btn").click(function() { 
		$("#paypal").addClass("d-block")
		$("#paypal").removeClass("d-none")
		$("#credit_card").addClass("d-none") 
		$("#credit_card").removeClass("d-block") 
		$("#bank_transfer").addClass("d-none")
		$("#bank_transfer").removeClass("d-block")
		// active tab
		$("#paypal_btn").addClass("active_payment")
		$("#credit_card_btn").removeClass("active_payment") 
		$("#bank_transfer_btn").removeClass("active_payment")

	})
	$("#credit_card_btn").click(function() {
		$("#credit_card").addClass("d-block") 
		$("#credit_card").removeClass("d-none") 
		$("#paypal").addClass("d-none")
		$("#paypal").removeClass("d-block") 
		$("#bank_transfer").addClass("d-none")
		$("#bank_transfer").removeClass("d-block")
		// active tab
		$("#paypal_btn").removeClass("active_payment")
		$("#credit_card_btn").addClass("active_payment") 
		$("#bank_transfer_btn").removeClass("active_payment")
	})
	// payment tab
	$("#bank_transfer_btn").click(function() { 
		$("#bank_transfer").addClass("d-block")
		$("#bank_transfer").removeClass("d-none")
		$("#paypal").addClass("d-none")
		$("#paypal").removeClass("d-block")
		$("#credit_card").addClass("d-none")
		$("#credit_card").removeClass("d-block")
		// active tab
		$("#paypal_btn").removeClass("active_payment")
		$("#credit_card_btn").removeClass("active_payment") 
		$("#bank_transfer_btn").addClass("active_payment")
	})
	// payment method jQuery 

})(jQuery);


