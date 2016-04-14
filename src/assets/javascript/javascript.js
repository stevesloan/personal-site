(function () {
  'use strict';

  // TODO: validate and produce error message.
  // finish testing server communication.
// alert('test');
  let sending = false;
  let form = document.getElementById('contact-form');
  if (form !== null) {

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (sending) {
        return false;
      }

      if (!formIsValid()) {
        notify('Please fill out entire form');
        return false;
      }

      let formData = {};
      formData.name = getInput('input-name');
      formData.email = getInput('input-email');
      formData.comments = getInput('input-comments');
      form.className = form.className + ' loading';
      sending = true;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://stevesloan.ca/mail/stevesloan3.php');
      xhr.responseType = 'json';

      xhr.onload = () => {
        // console.log(xhr.response);
        form.className = 'pure-form';
        console.log(sending);
        sending = false;

        if (xhr.response.success) {
          notify('Message Sent');
          resetInput();
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
  }

  function notify(text) {
    var cont = document.getElementById('notify');
    var message = document.createElement('div');
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

  function formIsValid() {
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let comments = document.getElementById('input-comments').value;

    if (name === '' || email === '' || comments === '') {
      return false;
    }

    return true;
  }

  function resetInput() {
    document.getElementById('input-name').value = '';
    document.getElementById('input-email').value = '';
    document.getElementById('input-comments').value = '';
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
