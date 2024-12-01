export const about = document.querySelector("section");
const workExp = document.getElementById("work-exp");
const edu = document.getElementById("work-edu");

export async function getData() {
  try {
    const response = await fetch("../data/work-edu.json");
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    getWorkExperiences(data.workExperience);
    getEducations(data.education);
  } catch (error) {
    console.error(error);
  }
}

function getWorkExperiences(data) {
  workExp.innerHTML = "";
  data.forEach((item) => {
    workExp.innerHTML += `<div class="about-work-edu">
      <div class="exp-edu1">
            <h3>${item.position}</h3>
            <p class="experience">${item.employForm}</p>
      </div>
      <div class="rows-about">
        <div class="comp-location">
          <p><img
                  src="./icons/mdi_office-building.svg"
                  alt="building icon"/> ${item.company}</p>
          <p><img 
                  src="./icons/carbon_location.svg" 
                  alt="" />${item.location}
          </p>
        </div>
        <div>
          <p><img
                  src="./icons/calendar-dates.png" 
                  alt="" /> ${item.startDate} - ${item.endDate}
          </p>
        </div>
      </div>
    </div>`;
  });
}

function getEducations(data) {
  edu.innerHTML = "";
  data.forEach((item) => {
    edu.innerHTML += `<div class="about-work-edu">
      <div class="about-work-edu">
          <div class="exp-edu1">
            <h3>${item.degree}</h3>
            <p class="experience">${item.status}</p>
          </div>
        <div class="rows-about">
          <div class="comp-location">
            <p><img
                  src="./icons/mdi_office-building.svg"
                  alt="building icon"/> ${item.school}</p>
            <p><img 
                  src="./icons/carbon_location.svg" 
                  alt="" />${item.location}
            </p>
          </div>
          <div>
            <p><img
                  src="./icons/calendar-dates.png" 
                  alt="" /> ${item.startDate} - ${item.endDate}
            </p>
          </div>
        </div>
      </div>`;
  });
}
