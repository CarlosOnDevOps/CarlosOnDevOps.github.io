const aboutMeSection = document.querySelector(".about-me-section");

const techStack = [
  {
    language: "SAS",
    color: "003366",
  },
  {
    language: "SQL",
    color: "00416A",
  },
  {
    language: "Python",
    color: "3776AB",
  },
  {
    language: "R",
    color: "276DC3",
  },
  {
    language: "CSS",
    color: "1572B6",
  },
  {
    language: "HTML",
    color: "E34F26",
  },
  {
    language: "JavaScript",
    color: "F7DF1E",
  },
  {
    language: "Powershell",
    color: "5391FE",
  },
  {
    language: "DAX",
    color: "002366",
  },
];

const createTechBadge = ({ language, color }) => `
  <img src="https://img.shields.io/badge/${language}-${color}?style=for-the-badge&logo=${language.toLowerCase()}&logoColor=white" alt="${language}">
`;

const fillTechStack = () => {
  const techStackContainer = document.createElement("div");
  techStackContainer.classList.add("tech-stack");

  techStack.forEach((tech) => {
    const badge = createTechBadge(tech);
    techStackContainer.innerHTML += badge;
  });

  aboutMeSection.appendChild(techStackContainer);
};

document.addEventListener("DOMContentLoaded", fillTechStack);
