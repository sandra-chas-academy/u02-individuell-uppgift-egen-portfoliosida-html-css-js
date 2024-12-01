import { renderFooter, renderHeader } from "./main.js";

const contact = document.querySelector(".contact");

function renderContact() {
  contact.innerHTML = `
  <h1 class="contact-header">Contact</h1>
    <div class="contact-mobile">
        <h2 class="contact-header">For any questions please drop a mail</h2>
        <a class="mail-mobile" href="mailto:kemal.guclu@chasacademy.se"
          >Kemal.Guclu@chasacademy.se</a
        >
        <p>or</p>
        <a class="phone" href="tel:+46701234567">+46 70 123 45 67</a>
      </div>
      <div class="contact-responsive">
        <h2 class="contact-header">For any questions please mail us&colon;</h2>
        <a class="mail" href="mailto:kemal.guclu@chasacademy.se"
          >Kemal.Guclu@chasacademy.se</a
        >
      </div>`;
}

renderContact();
renderHeader();
renderFooter();
