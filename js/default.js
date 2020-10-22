var setRoop = setInterval(function(){
  var activeIndex = $('.slide_level01.swiper-slide-active').index();
  if(activeIndex<=1){
    $('header').addClass('active');
    // intHeightHeader();
  }else{
    $('header').removeClass('active');
  }
},1);

$('.btn_ham').on('click',function(){
  $('nav').addClass('active');
});

$('nav>ul>li').on('click',function(){
  $('nav').removeClass('active');
  var activeIndex=$(this).index();
  swiper.slideTo(activeIndex-1);
  $('nav>ul>li').removeClass('setcolor');
  $(this).addClass('setcolor');
})

$('.btn_top').on('click',function(){
  swiper.slideTo(0,800);
})