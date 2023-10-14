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
    image: "assets/images/research-page/soft_skills.jpg",
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
    image: "assets/images/research-page/data_analytics.jpg",
    citation: {
      vancouver:
        "Think of data analytics as your superpower for sales. You analyze customer data to uncover trends and figure out which products are flying off the shelves. With this information, you become the sales superhero, making smart decisions to boost your company's profits and dominate the market.",
    },
    abstract:
      "Microsoft Excel, Python, R, SAS, SQL, Tableau, Power BI, Microsoft SQL Server, PostgreSQL, Jupyter Notebook",
    absbox: "absPopup1",
  },

  {
    title:
      "DATA ENGINEERING",
    authors: "Constructing the digital pipelines that make data flow like highways",
    conferences:
      "",
    researchYr: "Key Attributes: Data Pipeline | Data Quality | Speed and Efficiency",
    citebox: "popup3",
    image: "assets/images/research-page/data_engineering.jpg",
    citation: {
      vancouver:
        "Imagine being a data architect extraordinaire. You build and maintain the backbone of your company's data systems, ensuring everything runs super smoothly. Your work keeps the data flowing, making everyone else's jobs easier. You're the unsung hero behind the scenes.",
    },
    abstract:
      "Apache Hadoop, Apache Spark, Amazon Redshift, Apache Airflow, Scala, Talend",
    absbox: "absPopup3",
  },
  {
    title:
      "DATA SCIENCE",
    authors: "It's not magic, but it's the closest thing we have to unraveling the mysteries of the universe",
    conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: "Key Attributes: ",
    citebox: "popup3",
    image: "assets/images/research-page/data_science.jpg",
    citation: {
      vancouver:
        "In the business world, data scientists are like fortune tellers. You use your magic (a.k.a. machine learning) to predict when things might go wrong, so your company can fix them before they do. It's like having a crystal ball for avoiding disasters and keeping everything running smoothly.",
    },
    abstract:
      "Python, R, Jupyter Notebooks, Matplotlib, Seaborn, Plotly, Git, GitHub",
    absbox: "absPopup3",
  },

  {
    title:
      "CLOUD COMPUTING",
    authors: "Where data drifts like a fluffy cloud, but the possibilities are sky-high",
    conferences:
      "",
    researchYr: "Key Attributes: Scalability | Accessibility | Cost-Efficiency",
    citebox: "popup3",
    image: "assets/images/research-page/cloud_computing.jpg",
    citation: {
      vancouver:
        "As a cloud pro, you have the power to deploy applications like a commander. When your company needs more resources, you just call in reinforcements from the cloud. It's like having an army of digital helpers at your beck and call, ready to conquer any IT challenge.",
    },
    abstract:
      "AWS, Azure, Google Cloud, Docker, IAM, Azure Active Directory",
    absbox: "absPopup3",
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
