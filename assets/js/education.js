AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://graduation.udacity.com/confirm/e/92ae5832-4211-11ee-a2ca-533f61c89ab2",
  },
  {
    title: "Data Engineering",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://graduation.udacity.com/confirm/e/257dabb6-4f43-11ee-b1c5-9f3b78b6626c",
  },
  {
    title: "Azure Fundamentals",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.credly.com/badges/2e5a9773-3ca0-41a0-b5b8-f01578b35b06/public_url",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.credly.com/earner/earned/badge/acdaf9ec-7c3a-4c05-bfe5-17078e7ade5c",
  },
  {
    title: "Cisco CCNA",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.credly.com/earner/earned/badge/dc3ccc4f-a0a3-4c7d-93bc-cff02282f42f",
  },
  {
    title: "CompTIA Project+",
    cardImage: "assets/images/education-page/udacity.svg",
    moocLink: "https://www.credly.com/earner/earned/badge/ff680ce2-3edd-47fb-87b2-835afcf3e395",
  },
  {
    title: "CompTIA CySA+",
    cardImage: "assets/images/education-page/udemy.svg",
    moocLink: "https://www.credly.com/earner/earned/badge/6701c3f9-d9ca-469b-97a8-6740a64f817b",
  },
  {
    title: "CompTIA Security+",
    cardImage: "assets/images/education-page/edx.svg",
    moocLink: "https://www.credly.com/earner/earned/badge/32e5b6c9-a37d-48ce-a578-72e0613d250f",
  },
  {
    title: "CompTIA Network+",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.credly.com/earner/earned/badge/5b5a3167-ddef-497f-9c01-f6e1f686eda2",
  },
  {
    title: "CompTIA A+",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.credly.com/earner/earned/badge/ab7b0c08-a9ab-428e-89e0-d1823f0cc4c3",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Azure Fundamentals",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "Cisco CCNA",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
