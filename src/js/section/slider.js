import Swiper, { Pagination } from 'swiper';
const slider = (sliderBlock) => {
  let sliderStatus = null;


  function initSliders() {
    if (window.innerWidth < 992) {
      sliderStatus = new Swiper(sliderBlock, {
        modules: [Pagination],
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // autoHeight: true,
      });
    } else {
      sliderStatus.destroy();
      sliderStatus = null;
    }
  }
  if (window.innerWidth < 992) {
    window.addEventListener('load', initSliders);
  }


  window.addEventListener('resize', initSliders);
}
export default slider;