$('#menu').click(function () {
	$("#myTopnav").toggleClass(" responsive");
    $('#menu').toggleClass(" cross");
    $('.span').toggleClass(" none");
});


$('button').click(function(){
	$('html').addClass('scroll');
	$('.popup').addClass('popup_open');
	$('.form').addClass('open');
});


$('.popup').click(function(event){
	if(event.target == this){
		$('.popup').removeClass('popup_open');
		$('html').removeClass('scroll');
	}
});
 

$('.js-btn').click(function(e){
	e.preventDefault();
	let href = $(this).attr('href');
	let offset = $(href).offset().top;
	$('html , body').animate({
		scrollTop: offset
	}, 500);
});


var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1025: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,

        },
    }
})
