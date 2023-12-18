const contacts = (contactsTitle) => {
  const text = contactsTitle.textContent;
  const spannedText = text.split('').map(char => `<span>${char}</span>`).join('');
  contactsTitle.innerHTML = spannedText;

  const spans = Array.from(contactsTitle.querySelectorAll('span')); // Преобразование NodeList в массив

  let isInViewport = false;
  const addActiveClass = () => {
    if (spans.length > 0) {
      spans[0].classList.add('active');
      spans.shift();
    } else {
      window.removeEventListener('scroll', scrollHandler);
    }
  };


  const scrollHandler = () => {
    const rect = contactsTitle.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0 && !isInViewport) {
      isInViewport = true;
      addActiveClass();
      setInterval(addActiveClass, 200);
    }
  };

  window.addEventListener('scroll', scrollHandler);
  scrollHandler(); //
}
export default contacts;