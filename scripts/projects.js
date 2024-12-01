import { renderFooter, renderHeader } from "./main.js";

const APIUrl = "https://api.github.com/users/Kemal-guclu/repos";

const projectsContainer = document.querySelector(".container");

async function getProjectsGit() {
  try {
    const response = await fetch(APIUrl);
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const gitData = await response.json();
    //Call functions to render data
    getTechStackMobile(data.techStackMobile);
    getTools(data.techTools);
    getTechStackDesktop(data.techStackDesktop);
  } catch (error) {
    console.error(error);
  }
}

renderHeader();
renderFooter();
