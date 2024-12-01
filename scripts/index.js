import { renderFooter, renderHeader } from "./main.js";

const presentation = document.querySelector(".presentation");

function renderPresentation() {
  presentation.innerHTML = `
    <div class="pres-text">
        <p>Hi</p>
        <p>
          My name is
          <span>Kemal Güclü</span><br />
          I am studying at <span>Chas Academy</span> <br />to become a full
          stack developer in <span>JavaScript</span>
          <br />
        </p>
      </div>
      <div class="profile-pic">
        <img src="/img/Profilbild.jpeg" alt="profile picture" />
      </div>
  `;
}
renderHeader();
renderFooter();
renderPresentation();
