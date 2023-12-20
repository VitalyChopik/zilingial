const formBlock = (formBlock) => {
  const spinner = formBlock.querySelector('.spinner');
  const form = formBlock.querySelector('.contacts__form-content');
  const formSubmit = form.querySelector('.contacts__form-button');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendData();
  });
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

}
export default formBlock;

