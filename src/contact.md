---
layout: page
title: Contact
---

<form action="#" method="POST">
    <input required placeholder="Name" type="text" name="name">
    <input required placeholder="Email" type="email" name="_replyto">
    <textarea placeholder="Message" required></textarea>
    <p>
    <button class="btn" type="submit">SEND</button>
    </p>
</form>



{% contentfor sidebar %}
<p>


  <h1 class="sidebar__h1 slim">Let's Get In Touch</h1>
  <span class=" slim"><a href="mailto:contact@stevesloan.ca">contact@stevesloan.ca</a></span>
</p>
{% endcontentfor %}
