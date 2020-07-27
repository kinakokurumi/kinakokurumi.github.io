// JavaScript Document


	//aosの設定をはじめに読み込みます。
	$(function(){
	$('.slider').on('init', function(event, slick){
	  console.log('.slider init');
			AOS.init();
	});
	});
	//そのあとにslickの設定を読み込む
	$(function(){
	 $('.slider').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 1000,
	dots: true,
	arrows: false});
	});

//スムーススクロール
//$(function () {
//    $('a[href^="#"]').on('click', function () {
//      var speed = 400;
//      var href = $(this).attr('href');
//		var offset = 100;
//      var target = $(href == '#' || href == '' ? 'html' : href);
//      var position = target.offset().top;
//      $('body,html').animate({scrollTop: position}, speed, 'swing');
//      return false;
//    });
//  });

$(function(){
 $('a[href^="#"]').click(function(event) {
 
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({scrollTop:target}, 300);
        event.preventDefault();
        return false;
    	});
	});