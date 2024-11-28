const header = document.getElementById("header");
const footer = document.getElementById("footer");

export function renderHeader() {
  header.innerHTML = `
    <div class = logo> <img class="logo-icon" src="icons/logo1.webp" alt="logo" />
    </div>
    <div class="ham-menu">
        <div class="ham-icon">&#9776;</div>
        <div class="menu-list">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="technologies.html">Technologies</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="social">
            <a href="https://x.com" target="_blank">
              <img
                  src="./icons/ant-design_twitter-circle-filled.svg"
                  alt="twitter icon"
                  class="twittter"/>
            </a>
            <a href="https://www.linkedin.com/in/kemal-g-a90681167/"
              target="_blank">
                <img
                  src="/icons/entypo-social_linkedin-with-circle.svg"
                  alt="Linkedin icon"
                  class="linkedin"/>
            </a>
            <a href="https://github.com/Kemal-Guclu" target="_blank"
              ><img src="/icons/Vector.svg" alt="Git icon" class="git"/>
            </a>
          </div>
        </div>
      </div>
      <nav class="menu-list-social">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="technologies.html">Technologies</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="resp-social">
          <a href="https://github.com/Kemal-Guclu" target="_blank"
            ><img src="/icons/Vector.svg" alt="Git icon" class="git"
          /></a>
          <a href="https://x.com" target="_blank"
            ><img
              src="./icons/ant-design_twitter-circle-filled.svg"
              alt="twitter icon"
              class="twittter"
          /></a>
          <a
            href="https://www.linkedin.com/in/kemal-g-a90681167/"
            target="_blank"
            ><img
              src="/icons/entypo-social_linkedin-with-circle.svg"
              alt="Linkedin icon"
              class="linkedin"
          /></a>
        </div>
      </nav>`;
}

export function renderFooter() {
  footer.innerHTML = `
    <p>
        Designed and built by <span>Kemal Güclü</span> with
        <span class="footer-end">Love & Coffee</span>
      </p> `;
}
