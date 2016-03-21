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
    xhr.open('POST', 'https://stevesloan.ca/mail/stevesloan3.php');
    xhr.responseType = 'json';

    xhr.onload = function () {
      console.log(xhr.response);
      if (xhr.response.success) {
        notify('Message Sent');
      } else {
        notify('Message failed to send.');
      }
    };

    xhr.onerror = function () {
      console.log('xhr fail');
      notify('Message failed to send.');
    };
    //xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(formData));

    // fetch('https://stevesloan.ca/mail.php')
    // .then(res => res.json())
    // .then(console.log)
    // .catch(console.warn);

    return false;

  }, false);

  function notify(text) {
    var cont = document.getElementById('notify');
    var message = document.createElement("div");
    message.innerHTML = text;
    message.className = 'notify__message';
    cont.appendChild(message);

    //delay active class to enable animation
    setTimeout(function() {
      message.className = 'notify__message notify--active';
    },10)

    //remove after 4-5 seconds
    setTimeout(function() {
      message.className = 'notify__message';
    },4000)
    setTimeout(function() {
      message.remove();
    },5000)

  }

  function getInput(id) {
    try {
      let input = document.getElementById(id).value;
      return input;
    } catch (e) {
      // TODO: store id along with error message
      return false;
    }
  }

})();
