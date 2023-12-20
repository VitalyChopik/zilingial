import Swiper, { Pagination } from 'swiper';
const slider = (sliderBlock) => {
  let sliderStatus = null;


  function initSliders() {
    // if (window.innerWidth < 992) {

    // } else {
    //   sliderStatus.destroy();
    //   sliderStatus = null;
    // }
    sliderStatus = new Swiper(sliderBlock, {
      modules: [Pagination],
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // autoHeight: true,
    });
  }
  if (window.innerWidth < 992) {
    window.addEventListener('load', initSliders);
  }


  // window.addEventListener('resize', initSliders);
}
export default slider;