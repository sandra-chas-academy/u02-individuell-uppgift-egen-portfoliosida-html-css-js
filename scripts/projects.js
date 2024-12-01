import { renderFooter, renderHeader } from "./main.js";

const APIUrl = "https://api.github.com/users/Kemal-guclu/repos";

const projectsContainer = document.querySelector(".container");

async function getProjects() {
  try {
    const responseGit = await fetch(APIUrl);
    const responseJSON = await fetch("../data/projects.json");
    if (!responseGit.ok) {
      throw new Error("HTTP error " + responseGit.status);
    }
    if (!responseJSON.ok) {
      throw new Error("HTTP error " + responseJSON.status);
    }
    const dataGit = await responseGit.json();
    const dataJSON = await responseJSON.json();
    const filteredData = dataGit.filter((project) => {
      return project.name !== "JavaScript2";
    });
    //Call functions to render data
    renderProjects(dataJSON, filteredData);
  } catch (error) {
    console.error(error);
  }
}

function renderProjects(data1, data2) {
  projectsContainer.innerHTML = "";

  for (let i = 0; i < data2.length; i++) {
    const project = data2[i];
    projectsContainer.innerHTML += `
      <div class="card">
        <div class="tumbnail">
          <img src=${data1[i].tumbnail} alt=${data1[i].alt} />
        </div>
        <div class="proj-info">
          <h2 class="proj-title">${project.name}</h2>
          <p class="proj-desc">
            ${project.description}
          </p>
          <p class="tech-stack">
            Tech stack : <span>HTML, CSS, JavaScript, React</span>
          </p>
        </div>
        <div class="links">
          <div class="prev-git">
            <img src="icons/link-chain.png" alt="link chain icon" />
            <a href=${data1[i].lnkPreview} class="link"> Live Preview</a>
          </div>
          <div class="prev-git">
            <img src="icons/github-fill.png" alt="github icon" />
            <a href=${project.html_url} class="link"> View Code</a>
          </div>
        </div>
      </div>
    `;
  }
}
getProjects();
renderHeader();
renderFooter();
