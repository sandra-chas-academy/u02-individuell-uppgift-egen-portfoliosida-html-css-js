import { renderFooter, renderHeader } from "./main.js";

const contact = document.querySelector(".contact");

function renderContact() {
  contact.innerHTML = `
    <div class="contact-mobile">
        <h1 class="contact-header">For any questions please drop a mail</h1>
        <a class="mail-mobile" href="mailto:kemal.guclu@chasacademy.se"
          >Kemal.Guclu@chasacademy.se</a
        >
        <p>or</p>
        <a class="phone" href="tel:+46701234567">+46 70 123 45 67</a>
      </div>
      <div class="contact-responsive">
        <h1 class="contact-header">For any questions please mail us&colon;</h1>
        <a class="mail" href="mailto:kemal.guclu@chasacademy.se"
          >Kemal.Guclu@chasacademy.se</a
        >
      </div>`;
}

renderContact();
renderHeader();
renderFooter();
