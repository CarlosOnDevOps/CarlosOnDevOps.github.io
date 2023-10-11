AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/flipkart.jpg",
    place: "The University of Texas at Tyler",
    time: "(August, 2023 - Present)",
    desp: "<li>Automated complex data munging using SAS scripts, enhancing data handling for institutional characteristics, admissions, enrollment, and financial data</li> <li>Optimized a section of the ETL data pipeline to improve data processing efficiency</li> <li>Streamlined the data collection warehouse, optimizing onboarding processes for improved efficiency</li> <li>Generated ad-hoc reports to meet institutional requirements promptly</li> <li>Actively contributed to daily scrum meetings, ensuring project deadlines were met effectively</li>",
  },
  {
    title: "Senior IT Data Analyst",
    cardImage: "assets/images/experience-page/gsoc.png",
    place: "UT Health East Texas",
    time: "(January 2023 - August 2023)",
    desp: "<li>Innovatively developed a Microsoft Power App to streamline IT inventory management analytics</li><li>Transformed over a decade's worth of Tableau reports into dynamic Power BI reports</li> <li>Produced detailed Crystal Reports drilling down on EMS financials</li> <li>Engineered customized ticketing systems using Microsoft Forms, SharePoint, and Power Automate</li> <li>Set up SharePoint sites for multiple departments, optimizing resource storage</li>",
  },
  {
    title: "Information Security Analyst (L2)",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Integris",
    time: "(March 2022 - January 2023)",
    desp: "<li>Managed and secured Azure Active Directory architecture for 160+ clients, optimizing data access and security</li> <li>Pioneered and implemented the department’s inaugural training program, resulting in a notable uptick in documentation knowledge bases</li> <li>Collaborated with cross-functional teams, acting as a strategic security consultant for multiple high-impact projects</li>",
  },
  {
    title: "Information Security Analyst (L1)",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "CalTech",
    time: "(September 2021 - March 2022)",
    desp: "<li>Monitored and deployed changes in Azure Conditional Access policies</li> <li>Provided secondary support during Incident Response engagements</li> <li>Developed and maintained audit remediation projects improving our clients’ security postur</li>",
  },
  {
    title: "Systems Administrator (L1)",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "CalTech",
    time: "(March 2022 - January 2023)",
    desp: "<li>Skillfully administered hardware, systems, and network configurations for over 160 financial sector clients</li>",
  },
  {
    title: "Computer Specialist",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Best Buy",
    time: "(March 2022 - January 2023)",
    desp: "<li>Provided comprehensive technical guidance and support to Small Office/Home Office (SOHO) customers, addressing a wide range of inquiries and ensuring their technology needs were met efficiently and effectively</li>",
  },
  {
    title: "Systems Administrator Intern",
    cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
    place: "Griffin Technologies",
    time: "(March 2022 - January 2023)",
    desp: "<li>Collaborated closely with senior IT staff to assist in system administration tasks, contributing to the maintenance and optimization of critical IT infrastructure components while gaining hands-on experience in a dynamic startup environment</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: '<a href="https://www.usnews.com/best-colleges/the-university-of-texas-at-tyler-11163" target="_blank">U.S. News Best Colleges</a>',
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "I automated data processes and optimized ETL for timely and accurate data reporting ultimately showcasing the university's strengths and achievements.",
  },
  {
    title: '<a href="https://www.uttyler.edu/information-analysis/fact-books/" target="_blank">The University of Texas at Tyler\'s Data Fact Books</a>',
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "I developed PowerBI reports and dashboards presenting the university's essential statistics and achievements to a broader audience",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Participant",
    image: "assets/images/experience-page/uplift.png",
    desp: "Competed against others across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Participant",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Participant",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Participant",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Participant",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Participant",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
