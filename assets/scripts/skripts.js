
$('document').ready(function(){

	const header = $("#header"),
		  headerInner = $(".header__content");
		  headerCont = $(".container__header");
	var introH = $("#intro").innerHeight(),
		headerInnerH = $(".header__content").innerHeight();

	/* Fixed Heder*/
	
	scrollOffset = $(window).scrollTop();
	checkScroll (scrollOffset);

	$(window).on("scroll", function () {

		//сколько проскролил пикселей
		scrollOffset = $(this).scrollTop();
		checkScroll ();

	});

	function checkScroll () {
		

		if (scrollOffset >= introH) {
			header.addClass("fixed");
			headerInner.addClass("fixed");
			headerCont.removeClass("fixed");
		} else {
			header.removeClass("fixed");
			headerInner.removeClass("fixed");
			
		}

		if (scrollOffset >= headerInnerH) {
			headerInner.addClass("fixed");
			headerCont.removeClass("fixed");
		} else {
			headerInner.removeClass("fixed");
			
		}
	};

	/* Smooth scroll */

	$("[data-scroll]").on("click", function (event) {

		//убираю стандартное действие ссылки
		event.preventDefault();

		var $this = $(this), //закешировал элементы чтоб не обращатся к ним каждый раз
			blockId = $(this).data("scroll"),//получаю id элемента с data-scroll
			blockOffset = $(blockId).offset().top; //получаю позицию этого элемента от верха страницы

			$("#nav a").removeClass("active");
			$this.addClass("active");

			//плавная анимация для скрола
			$("html, body").animate({
				scrollTop: blockOffset
			}, 500);
		});

	/* Menu nav toggle */

	$("#nav__toggle").on("click", function(event) {
		//убираю стандартное действие ссылки
		event.preventDefault();


		$(this).toggleClass("active"); //бургер делается крестиком при нажатии
		$("#nav").toggleClass("active"); // открывается меню бургера
	});

	$(".nav_link").on("click", function(event) { //при нажати на ссылки, меню закрывается автоматически
		$(".nav").removeClass("active");
		$("#nav__toggle").removeClass("active");
	});

	/* Slider img */

	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		autoplay: true,
		autoplaySpeed: 2000
	});

	/* Description */

	$("[data-collapse]").on('click', function(event) {
		event.preventDefault();
		
		var $this = $(this), //закешировал элементы чтоб не обращатся к ним каждый раз
			blockId = $(this).data("collapse"); //получаю id элемента с data-collapse

		$this.toggleClass('active'); //стаавлю класс active для этого блока

		$(blockId).slideToggle(); //плавное открытие и скрытие элемента
	});


	/* Slider reviews */

	$("[data-slider]").slick( {
		infinite: true,
		fade: false,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToScroll: 1
	});



	/* Slider works */

	$('.slider__works__top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider__works__nav'
	});
	$('.slider__works__nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider__works__top',
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 2000,
		focusOnSelect: true
	});


	
	$(".nav_link_icon_search").click(function() {
		$('.search_nav').slideToggle(500);      
		return false;
	});


	/* Showcase */
	$('.showcase__item').slick({
		centerPadding: '60px',
		slidesToShow: 2,
		autoplay: true,
		autoplaySpeed: 2000
	});
	

	//обработка нажатия кнопки для добавления в корзину
	$('.one').click(function() {
		var state = 1
		return function() {
			if (state === 1) {
				state = 2
				$('.markA').css("transform", "rotate(0deg)");
				$('.one').css("border", "1px solid #89D6CC");	
				$('.markA__color').css("backgroundColor", "#89D6CC");	
			} else if (state === 2) {
				state = 1
				$('.markA').css("transform", "rotate(90deg)");	
				$('.one').css("border", "1px solid #DD2B24");	
				$('.markA__color').css("backgroundColor", "#DD2B24");			
			}

		}
	}());

	$('.two').click(function() {
		var state = 1
		return function() {
			if (state === 1) {
				state = 2
				$('.markB').css("transform", "rotate(0deg)");
				$('.two').css("border", "1px solid #89D6CC");	
				$('.markB__color').css("backgroundColor", "#89D6CC");	
			} else if (state === 2) {
				state = 1
				$('.markB').css("transform", "rotate(90deg)");	
				$('.two').css("border", "1px solid #DD2B24");	
				$('.markB__color').css("backgroundColor", "#DD2B24");	
			}

		}
	}());
	
	$('.three').click(function() {
		var state = 1
		return function() {
			if (state === 1) {
				state = 2
				$('.markC').css("transform", "rotate(0deg)");
				$('.three').css("border", "1px solid #89D6CC");	
				$('.markC__color').css("backgroundColor", "#89D6CC");	
			} else if (state === 2) {
				state = 1
				$('.markC').css("transform", "rotate(90deg)");	
				$('.three').css("border", "1px solid #DD2B24");	
				$('.markC__color').css("backgroundColor", "#DD2B24");	
			}

		}
	}());

	$('.four').click(function() {
		var state = 1
		return function() {
			if (state === 1) {
				state = 2
				$('.markD').css("transform", "rotate(0deg)");
				$('.four').css("border", "1px solid #89D6CC");	
				$('.markD__color').css("backgroundColor", "#89D6CC");	
			} else if (state === 2) {
				state = 1
				$('.markD').css("transform", "rotate(90deg)");	
				$('.four').css("border", "1px solid #DD2B24");	
				$('.markD__color').css("backgroundColor", "#DD2B24");		
			}

		}
	}());

  /*//кнопки для уменьшение и увелечение svg
  $("#cta").click(function() {
  	$('#my-section svg').css("height", "74vh"); 
  	$('.container_description').css("display", "block"); 
  });
  $("#close").click(function() {
  	$('#my-section svg').css("height", "20vh"); 
  	$('.container_description').css("display", "none"); 
  });*/


  //показать номер
  $("#t1").click(function() {
  	$('#n1').css("display", "block"); 
  	$('#t1').css("display", "none"); 
  });
  $("#t2").click(function() {
  	$('#n2').css("display", "block"); 
  	$('#t2').css("display", "none"); 
  });



  $(window).resize(function() {
  	$("#cta").click(function() {
  		$('#my-section').removeClass('block_small').addClass('.section__smal');
  		$('#my-section svg').css("height", "100vh"); 
  		$('.section__smal').css("height", "20vh"); 
  	});


  });

});


/*
	функция показывает товар при скроле до этого блока
	*/
/*const slider = document.querySelector(".container_content");
const proposalLeft = document.querySelector(".proposal__item--right");
const proposalRight = document.querySelector(".proposal__item--left");

window.addEventListener("scroll", function() {
	showProposal();
});


function showProposal() {
	let scrollPos = window.scrollY;
	
	if (scrollPos >= 150) {
		proposalLeft.style.transform = ("translateX(0)");
	} 
	if (scrollPos > 650 || scrollPos == 0){
		proposalLeft.style.transform = ("translateX(308px)");
	}
	
	if (scrollPos >= 150) {
		proposalRight.style.transform = ("translateX(0)");
		proposalLeft.style.display = ("block");
	} 
	if (scrollPos > 650 || scrollPos == 0){
		proposalRight.style.transform = ("translateX(-308px)");
	}
}
*/

















