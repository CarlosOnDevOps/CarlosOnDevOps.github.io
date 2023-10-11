/* About Me Section */

const aboutMeContainer = document.querySelector(".about-me");

const aboutMeData = {
  name: "Carlos Moreno",
  role: "Data Analyst",
  location: "Austin, Texas",
  introduction:
    "Hi, I'm John Doe, a passionate Data Analyst with a love for turning raw data into meaningful insights. I'm based in the vibrant city of Austin, Texas, where I thrive on solving complex problems and exploring the world of data.",
  interests: [
    "Data Science",
    "Analytics",
    "Healthcare",
    "Financial Analysis",
    "Machine Learning",
  ],
};

const fillAboutMeData = () => {
  aboutMeContainer.innerHTML = `
    <h1 class="about-me-heading">About Me</h1>
    <div class="about-me-details">
      <h2 class="about-me-name">${aboutMeData.name}</h2>
      <p class="about-me-role">${aboutMeData.role}</p>
      <p class="about-me-location">${aboutMeData.location}</p>
    </div>
    <p class="about-me-introduction">${aboutMeData.introduction}</p>
    <h3 class="about-me-interests-heading">My Interests</h3>
    <ul class="about-me-interests-list">
      ${aboutMeData.interests
        .map((interest) => `<li class="interest-item">${interest}</li>`)
        .join("")}
    </ul>
  `;
};

document.addEventListener("DOMContentLoaded", fillAboutMeData);
