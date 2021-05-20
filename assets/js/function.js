// $(document).ready(function () {
//     hsize = $(window).height();
//     $(".hero").css("height", hsize + "px");
//   });
//   $(window).resize(function () {
//     hsize = $(window).height();
//     $(".hero").css("height", hsize + "px");
// });


  //.headerに.activeを付与
$(window).on("scroll", function(){
    if( $(window).scrollTop() > 50 ){
        $('.header').addClass('active');
        }else{
        $('.header').removeClass('active');
    }
});

//page-topボタン
$(window).on("scroll" ,function(){
    if( $(window).scrollTop() > 100){
        $('.page-top').fadeIn();
    }else{
        $('.page-top').fadeOut();
    }
});


//ハンバーガーメニュー
$('.btn-menu').on('click', function(){
    $(this).toggleClass('active');
    $('.global-nav').toggleClass('show');
})
//ハンバーガーメニュー2
$(".openbtn").click(function() {
  $(this).toggleClass('active');
  $(".global-nav").toggleClass('panelactive')
});


//ヘッダーの高さ分だけコンテンツを下げる
$(function() {
    let height=$("#header").height();
    $("main").css("margin-top", height+20);//mainにmargin-top(header分)+20pxだけ余裕をもたせる
});




// let _window = $(window),
//     _header = $('.header'),
//     heroBottom;
 
// _window.on('scroll',function(){
//     heroBottom = $('.desc').height();
//     if(_window.scrollTop() > heroBottom){
//         _header.addClass('transform');   
//     }
//     else{
//         _header.removeClass('transform');   
//     }
// });
 
// _window.trigger('scroll');


// swiper 
let mySwiper = new Swiper ('.swiper-container', {
    autoplay: {
      delay: 2000,
    },
    loop: true,  //ループ可能（ループモードを有効に）
    slidesPerView: 'auto',  //スライドを2つ（分）表示
    grabCursor: true,
    centeredSlides : true,  //アクティブなスライドを中央に表示
    effect: 'coverflow',  //スライドのエフェクトを coverflow に
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    // デフォルトの設定
    slidesPerView: 1,
    spaceBetween: 0,
    
    // レスポンシブブレーポイント（画面幅による設定）
    breakpoints: {
      // 画面幅が 600px 以上の場合（window width >= 600px）
      600: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      // 画面幅が 960px 以上の場合（window width >= 960px）
      960: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    },
    
    pagination: {  //ページネーションを表示
      el: '.swiper-pagination',
      clickable: true,  //アイコンをクリックすると対応するスライドに移動
    },
   
    navigation: {  //ナビゲーションボタンを表示
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})


//wow.js
new WOW().init();


//sideGnav
$(window).on("scroll" ,function(){
  if( $(window).scrollTop() > 200){
      $('.sideGnav').fadeIn();
  }else{
      $('.sideGnav').fadeOut();
  }
});


//IntersectionObserver
document.addEventListener('DOMContentLoaded', function () {

  const cb = function (el, isIntersecting) {
      if(isIntersecting) {
          el.classList.add('inview');
      }
  } 　

  const so = new ScrollObserver('.cover-slide', cb);
});


//gallery 
function fadeAnime(){
// flipLeft
$('.gallery li').each(function(){ 
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipLeft');
    }else{
        $(this).removeClass('flipLeft');
    }
});
}


$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});


//アコーディオンをクリックした時の動作
$('.accordion__title').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".accordion__box");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('close');//クラス名closeを付与
  }
});



$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  
      $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
  //=====ここまで背景が伸びた後に動かしたいJSをまとめる
      
});