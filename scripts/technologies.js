import { renderFooter, renderHeader } from "./main.js";

//Get elements
const techStackM = document.querySelector(".tech-stack-mobile");
const tools = document.querySelector(".tools");
const techStackD = document.querySelector(".tech-stack");

//Get technologies data from JSON file
async function getTechStack() {
  try {
    const response = await fetch("../data/techs.json");
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    //Call functions to render data
    renderTechStackMobile(data.techStackMobile);
    renderTools(data.techTools);
    renderTechStackDesktop(data.techStackDesktop);
  } catch (error) {
    console.error(error);
  }
}

//Render technologies data for mobile version
function renderTechStackMobile(data) {
  techStackM.innerHTML = "";
  data.forEach((item) => {
    techStackM.innerHTML += `
      <img src="${item.source}" alt="${item.alternative}" />`;
  });
}
//Render tools data
function renderTools(data) {
  tools.innerHTML = "";
  data.forEach((item) => {
    tools.innerHTML += `
      <img src="${item.source}" alt="${item.alternative}" />`;
  });
}
//Render technologies data for desktop version
function renderTechStackDesktop(data) {
  techStackD.innerHTML = "";
  data.forEach((item) => {
    techStackD.innerHTML += `
      <img src="${item.source}" alt="${item.alternative}" />`;
  });
}

getTechStack();
renderHeader();
renderFooter();
