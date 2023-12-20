const formBlock = (formBlock) => {
  const spinner = formBlock.querySelector('.spinner');
  const form = formBlock.querySelector('.contacts__form-content');
  const formSubmit = form.querySelector('.contacts__form-button');
  const inputsBox = form.querySelectorAll('.contacts__form-box');
  const adaptiveTextarea = formBlock.querySelector('textarea');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs(inputsBox)) {
      sendData();
    }
  });
  function validateInputs(inputsBox) {
    let isValid = true;

    inputsBox.forEach((box) => {
      const requiredInputs = box.querySelectorAll('.required');

      requiredInputs.forEach((input) => {
        if (input.value.trim() === '') {
          isValid = false;
          box.classList.add('error');
        } else {
          box.classList.remove('error');
        }
      });
    });

    return isValid;
  }
  function sendData() {
    spinner.classList.add('active');
    const fileInput = form.querySelector('.contacts__form-file-hidden');

    let formData = new FormData(form);
    if (fileInput) {
      const files = fileInput.files;
      if (files.length > 0) {
        formData.append('attachment', files[0]);
      }
    }
    // fetch('https://formsubmit.co/support@zilingial.com', {
    fetch('https://formsubmit.co/support@zilingial.com', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        spinner.classList.remove('active');
        formBlock.classList.toggle('success');
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });

  }
  function autoResize(textarea) {
    if (window.innerWidth < 992) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }

  adaptiveTextarea.addEventListener('input', function () {
    autoResize(adaptiveTextarea);
  });

  window.addEventListener('resize', function () {
    autoResize(adaptiveTextarea);
  });
}
export default formBlock;

