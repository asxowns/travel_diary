$(function () {
  var swiper = new Swiper('.gallery-center_inner ', {
    slidesPerView: 6,//보여지는 갤러리 수
    spaceBetween: 50,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
      delay: 2500,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
    },
    loop: false,//슬라이드 무한반복
    resistance : false,
    scrollbar: { // 스크롤바
      el: '.gallery-center_inner .swiper-scrollbar',
      draggable: true, // 스크롤바를 드래그해서 움직일수 있는지 여부
    },
  });
});