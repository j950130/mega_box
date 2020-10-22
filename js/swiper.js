var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard:true,
  mousewheel:true,        
});
var swiper1 = new Swiper('.swiper-container1',{
  // 기본슬라이더
  slidesPerView:'auto',
  spaceBetween:30,
});