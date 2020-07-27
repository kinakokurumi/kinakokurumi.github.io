////////// JavaScript Document


	jQuery(function ($) {
  $(".toggle_contents").css("display", "none");
  // 質問の答えをあらかじめ非表示
  
  //質問をクリック
  $(".toggle_switch").click(function () {
    
    $(".toggle_switch").not(this).removeClass("open");
    //クリックしたtoggle_switch以外の全てのopenを取る

    $(".toggle_switch").not(this).next().slideUp(300);
    //クリックされたtoggle_switch以外のtoggle_contentsを閉じる
    
    $(this).toggleClass("open");
    //thisにopenクラスを付与
    
    $(this).next().slideToggle(300);
    //thisのcontentを展開、開いていれば閉じる
  
  });
});


//$(function(){
//  fade('.toggle_wrap');
//});
//
//function fade(elm){
//  var $fade = $(elm),
//      $body = $('body');
//      $fade.addClass('hide');
//
//  $('.toggle_switch').on('click', function(){
//    $fade.toggleClass('hide').addClass('animation');
//    $('.toggle_switch').toggleClass('active');
//    if ($fade.hasClass('hide')) {
//      $body.removeClass('no-scroll').off('.noScroll');
//    }
//    else {
//      $body.addClass('no-scroll')
//		  .on('touchmove.noScroll', function(e){
//        e.preventDefault();
//      });
//    }
//  });
//
//$('.mainNav a[href^="#"]').on('click', function(){
//     $fade.toggleClass('hide').addClass('animation');
//	  $('.toglle_switch').toggleClass('active');
//      $body.removeClass('no-scroll').off('.noScroll');
//    });
//}



//$(function(){
//deSVG('.key_logo',true);
//});

//$(function(){
//    $('.toggle_switch').each(function(){
//        $(this).on('click',function(){
//            $(".toggle_contents",this).slideToggle();
//            return false;
//        });
//    });
//});

//$(funtion(){
//$('.toggle_switch').on('click',function(){
//  $(this).next().slideToggle(200);
//  $(this).toggleClass('open');
//});
//});

//$(".toggle_switch").click(function(){
//4	$(".toggle_contents").slideToggle(200);
//5});
//6$(".toggle_contents li").click(function(){
//7	$(".toggle_contents").css({display:"none"});
//8});

//aosの設定をはじめに読み込みます。
	//$(function(){
//	$('.slider').on('init', function(event, slick){
//	  console.log('.slider init');
//			AOS.init();
//	});
//	});
	//そのあとにslickの設定を読み込む
	//$(function(){
//	 $('.slider').slick({
//	autoplay: true,
//	autoplaySpeed: 5000,
//	speed: 1000,
//	dots: true,
//	arrows: false});
//	});


//$(document).ready(function() {
//    //ハッシュリンクのアンカータグをクリックするとマッチするidを持つ要素にスクロールする
//    $('a[href^="#"]').click(function(event) {
// 
//        var id = $(this).attr("href");
//        var offset = 60;
//        var target = $(id).offset().top - offset;
//        $('html, body').animate({scrollTop:target}, 300);
//        event.preventDefault();
//        return false;
//    	});
//	});