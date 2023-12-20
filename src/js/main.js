/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import MousePRLX from './libs/parallaxMouse'
import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers';
// import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import bgAnimation from './section/bgAnimation';
import slider from './section/slider';
import formBlock from './section/form';
import contacts from './section/contacts';
import scrollAnimation from './section/scrollAnimation';
// import Tabs from './modules/Tabs';
// import Accordion from './modules/Accordion';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
// new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
AOS.init();

/**
 * Параллакс мышей
 * */
new MousePRLX();

// new Tabs('tabs-example', {
// 	onChange: (data) => {
// 		console.log(data);
// 	},
// });

// new Accordion('.accordion', {
// 	shouldOpenAll: false, // true
// 	defaultOpen: [], // [0,1]
// 	collapsedClass: 'open',
// });



const heroEffect = document.querySelectorAll('.hero__effects linearGradient');
heroEffect ? bgAnimation(heroEffect) : null

const sliderBlock = document.querySelector('.values__container');
sliderBlock ? slider(sliderBlock) : null;


const chatbotLeftEffect = document.querySelectorAll('.chatbot__bg-left linearGradient');
const chatbotRightEffect = document.querySelectorAll('.chatbot__bg-right linearGradient');
chatbotLeftEffect ? bgAnimation(chatbotLeftEffect) : null
chatbotRightEffect ? bgAnimation(chatbotRightEffect) : null

const form = document.querySelector('.contacts__form');
form ? formBlock(form) : null;

const contactsTitle = document.querySelector('.contacts__title');
contactsTitle ? contacts(contactsTitle) : null;

const inputBoxs = document.querySelectorAll('.contacts__form-box');

// Добавляем обработчик события для каждого input
inputBoxs.forEach(function (inputBox) {
  const input = inputBox.querySelector('.contacts__form-input');
  const label = inputBox.querySelector('.contacts__form-label');
  input.addEventListener('input', function () {
    if (this.value.trim().length > 0) { // Используйте trim(), чтобы игнорировать пробелы
      input.classList.add('active');
    } else {
      input.classList.remove('active');
    }
    label.style.display = this.value ? 'none' : 'flex';
  });
});

scrollAnimation();

const popup = document.querySelector('.popup');
if (popup) {
  const fileInput = popup.querySelector('#fileInput');
  const customFile = popup.querySelector('.contacts__form-file');
  const dropArea = popup.querySelector('#dropArea');

  // Предотвращаем стандартные действия при перетаскивании файлов
  ['dragover', 'dragenter', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
  });

  // Обработчики событий для подсветки области при перетаскивании
  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
  });

  // Обработчик события drop для загрузки файла
  dropArea.addEventListener('drop', handleDrop, false);

  // Обработчик события click для открытия диалогового окна выбора файла
  customFile.addEventListener('click', function () {
    fileInput.click();
  });

  // Обработчик изменения файла
  fileInput.addEventListener('change', handleFileSelect);

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight() {
    dropArea.classList.add('highlight');
  }

  function unhighlight() {
    dropArea.classList.remove('highlight');
  }

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    // Устанавливаем файл в input
    fileInput.files = files;

    handleFiles(files);
  }

  function handleFileSelect() {
    const files = this.files;

    handleFiles(files);
  }

  function handleFiles(files) {
    if (files.length > 0) {
      // Выполните здесь необходимые действия с загруженными файлами
      customFile.textContent = files[0].name;
    }
  }

  formBlock(popup);
  const expertiseBoxs = document.querySelectorAll('.expertise__box');
  expertiseBoxs.forEach(expertiseBox => {
    const button = expertiseBox.querySelector('.expertise__box-btn');
    const title = expertiseBox.querySelector('.expertise__box-title');
    const popupTitle = popup.querySelector('input[name="Form"]');
    button.addEventListener('click', () => {
      popupTitle.value = title.textContent;
      popup.classList.add('open');
      document.documentElement.classList.add('lock');
    })
  })
  const popupCloses = popup.querySelectorAll('.popup__wrapper, .popup__close');
  popupCloses.forEach(popupClose => {
    popupClose.addEventListener('click', () => {
      popup.classList.remove('open');
      document.documentElement.classList.remove('lock');
    })
  })
}



