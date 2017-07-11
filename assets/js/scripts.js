$(function() {
	
	//Hamburger menu
	$('.hamburger').click(function(){
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');  
	});

	//Portfolio slider
	 $('.portfolio_slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});

	//Navigation for portfolio
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.portfolio_slider',
	  dots: false,
	  arrows: false,
	  centerMode: true,
	  focusOnSelect: true,
	  fade:true
	});

});