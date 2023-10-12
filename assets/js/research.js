/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "SOFT SKILLS",
    authors:
      "Making work feel less like a boardroom and more like a friendly game of chess",
    conferences:
      "",
    researchYr: "Key Attributes: Communication | Teamwork | Problem-Solving | Adaptability",
    citebox: "popup2",
    image: "assets/images/research-page/crossLingual.png",
    citation: {
      vancouver:
        "Soft skills, like communication and empathy, turn you into a networking ninja. You're not just good with computers; you're fantastic with people too. You use your ninja skills to build strong relationships with clients, colleagues, and partners, which catapults your career to new heights.",
    },
    abstract:
      "Slack, Zoom, Microsoft Teams, Microsoft PowerPoint, LinkedIn",
    absbox: "absPopup2",
  },

  {
    title: "DATA ANALYTICS",
    authors:
      "Turning numbers into answers, one algorithm at a time",
    conferences:
      "",
    researchYr: "Key Attributes: Informed Decision-Making | Business Efficiency | Competitive Advantage",
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "Think of data analytics as your superpower for sales. You analyze customer data to uncover trends and figure out which products are flying off the shelves. With this information, you become the sales superhero, making smart decisions to boost your company's profits and dominate the market.",
    },
    abstract:
      "Microsoft Excel, Python, R, SAS, SQL, Tableau, Power BI, Microsoft SQL Server, PostgreSQL, Jupyter Notebook",
    absbox: "absPopup1",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            TECH STACK (COMPETENCIES)
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            USE CASES (SIMPLIFIED)
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
