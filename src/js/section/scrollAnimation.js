import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";



const scrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const about = document.querySelector('.about');
  if (about) {
    const aboutBoxs = about.querySelectorAll('.about__box');

    aboutBoxs.forEach(item => {
      let aboutAnim = gsap.timeline({
        scrollTrigger: {
          trigger: about,
          start: () => `top 70%`,
          end: () => `bottom 70%`,
          markers: false,
          scrub: true,
          markers: false,
        }
      });
      const bg = item.querySelector('.about__box-bg');
      aboutAnim.fromTo(bg, { height: 0 }, { height: `100%` });
    })
  }
  const values = document.querySelector('.values');
  if (window.innerWidth > 992) {
    if (values) {
      const valuesBoxs = document.querySelectorAll('.values__box');

      valuesBoxs.forEach(item => {
        let valuesAnim = gsap.timeline({
          scrollTrigger: {
            trigger: values,
            start: () => `top top`,
            end: () => `bottom bottom`,
            markers: false,
            scrub: true,
            markers: false,
          }
        });
        const bg = item.querySelector('.values__box-bg');
        valuesAnim.fromTo(bg, { width: 0, height: 0 }, { width: 130, height: 130 });
      })
    }
  }
}
export default scrollAnimation;