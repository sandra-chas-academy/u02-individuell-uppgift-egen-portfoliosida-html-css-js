import { renderFooter, renderHeader } from "./main.js";

//presentation element
const presentation = document.querySelector(".presentation");
//modal elements
const animeModal = document.querySelector(".anime-modal");
const myModal = document.querySelector(".mymodal");
const showModalBtn = document.querySelector(".show-modal");
const hideModalBtn = document.querySelector(".hide-btn");

//Rendering the presentation section
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
//Modal function
function showModal() {
  // Visa modal, göm button
  showModalBtn.addEventListener("click", () => {
    myModal.classList.add("show");
    showModalBtn.style.display = "none";
  });
  //Stäng modal, visa button
  hideModalBtn.addEventListener("click", () => {
    myModal.classList.remove("show");
    showModalBtn.style.display = "block";
  });
  //Stäng modal om användaren klickar utanför modalen och visa button
  window.addEventListener("click", (e) => {
    if (e.target === myModal) {
      myModal.classList.remove("show");
      showModalBtn.style.display = "block";
    }
  });
}
//Call functions
renderHeader();
renderFooter();
renderPresentation();
showModal();
