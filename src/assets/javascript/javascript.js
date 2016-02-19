(function () {
  'use strict';

  // TODO: validate and produce error message.
  // finish testing server communication.

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let formData = {};
    formData.name = getInput('input-name');
    formData.email = getInput('input-email');
    formData.comments = getInput('input-comments');

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://stevesloan.ca/mail.php');
    xhr.responseType = 'json';

    xhr.onload = function () {
      console.log(xhr.response);
    };

    xhr.onerror = function () {
      console.log('xhr fail');
    };

    xhr.send(JSON.stringify(formData));

    // fetch('https://stevesloan.ca/mail.php')
    // .then(res => res.json())
    // .then(console.log)
    // .catch(console.warn);

    return false;

  }, false);

  function getInput(id) {
    try {
      let input = document.getElementById(id).value;
      return input;
    } catch (e) {
      return false;
    }
  }

})();
