AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/bigquery.png",
    langName: "BigQuery",
    langDesc: "<li>Google BigQuery is a fully managed data warehouse that enables super-fast SQL queries using the processing power of Google's infrastructure.</li>",
  },
  {
    langImage: "assets/images/techstack-page/matplotlib.png",
    langName: "Matplotlib",
    langDesc: "<li>Matplotlib is a widely-used Python library for creating static, animated, and interactive visualizations in data analysis.</li>",
  },
  {
    langImage: "assets/images/techstack-page/plotly.png",
    langName: "Plotly",
    langDesc: "<li>Plotly is a versatile data visualization library that supports interactive charts and dashboards, popular for web-based data exploration.</li>",
  },
  {
    langImage: "assets/images/techstack-page/talend.jpg",
    langName: "Talend",
    langDesc: "<li>Talend is an open-source ETL (Extract, Transform, Load) tool that simplifies data integration and transformation processes.</li>",
  },
  {
    langImage: "assets/images/techstack-page/scala.png",
    langName: "Scala",
    langDesc: "<li>Scala is a powerful programming language for building scalable and functional applications, often used in big data and distributed systems.</li>",
  },
  {
    langImage: "assets/images/techstack-page/apache_hadoop.png",
    langName: "Apache Hadoop",
    langDesc: "<li>Apache Hadoop is a framework for distributed storage and processing of large datasets, a cornerstone of big data technology.</li>",
  },
  {
    langImage: "assets/images/techstack-page/jupyter_notebook.jpg",
    langName: "Jupyter Notebooks",
    langDesc: "<li>Jupyter Notebooks provide an interactive environment for data analysis, combining code, visualizations, and documentation in a single interface.</li>",
  },
  {
    langImage: "assets/images/techstack-page/azure.png",
    langName: "Azure",
    langDesc: "<li>Microsoft Azure is a cloud computing platform offering a wide range of services for hosting, managing, and analyzing data and applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/gcp.png",
    langName: "Google Cloud Platform",
    langDesc: "<li>Google Cloud Platform provides cloud-based solutions and services for data storage, processing, and machine learning.</li>",
  },
  {
    langImage: "assets/images/techstack-page/aws.jpg",
    langName: "Amazon Web Services",
    langDesc: "<li>AWS is a leading cloud platform with extensive tools for data storage, computation, and analytics.</li>",
  },
  {
    langImage: "assets/images/techstack-page/power_bi.png",
    langName: "Power BI",
    langDesc: "<li>Power BI is a business intelligence tool for data visualization and interactive reports, particularly popular among non-technical users.</li>",
  },
  {
    langImage: "assets/images/techstack-page/sql.png",
    langName: "SQL",
    langDesc: "<li>SQL (Structured Query Language) is a standard language for managing and querying relational databases.</li>",
  },
  {
    langImage: "assets/images/techstack-page/R.png",
    langName: "R",
    langDesc: "<li>R is a programming language and environment designed for statistical computing and graphics.</li>",
  },
  {
    langImage: "assets/images/techstack-page/kafka.png",
    langName: "Kafka",
    langDesc: "<li>Apache Kafka is a distributed streaming platform used for building real-time data pipelines and streaming applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/pandas.jpg",
    langName: "Pandas",
    langDesc: "<li>Pandas is a Python library for data manipulation and analysis, offering data structures and functions for efficient handling of data.</li>",
  },
  {
    langImage: "assets/images/techstack-page/snowflake.png",
    langName: "Snowflake",
    langDesc: "<li>Snowflake is a cloud-based data warehousing platform known for its ease of use and performance in handling large datasets.</li>",
  },
  {
    langImage: "assets/images/techstack-page/apache_airflow.png",
    langName: "Apache Airflow",
    langDesc: "<li>Apache Airflow is an open-source platform for orchestrating complex workflows and data pipeline automation.</li>",
  },
  {
    langImage: "assets/images/techstack-page/oracle.png",
    langName: "Oracle SQL Developer",
    langDesc: "<li>Oracle is a leading database management system and cloud services provider.</li>",
  },
  {
    langImage: "assets/images/techstack-page/apache_spark.jpg",
    langName: "Apache Spark",
    langDesc: "<li>Apache Spark is a multi-language engine for executing data engineering, data science, and machine learning on single-node machines or clusters.</li>",
  },
  {
    langImage: "assets/images/techstack-page/sas.png",
    langName: "SAS",
    langDesc: "<li>SAS (Statistical Analysis System) is a software suite used for advanced analytics, business intelligence, and data management.</li>",
  },
  {
    langImage: "assets/images/techstack-page/seaborn.jpg",
    langName: "Seaborn",
    langDesc: "<li>Seaborn is a Python data visualization library that enhances the aesthetics of Matplotlib visualizations and is ideal for statistical graphics.</li>",
  },
  {
    langImage: "assets/images/techstack-page/numpy.jpg",
    langName: "NumPy",
    langDesc: "<li>NumPy is a fundamental Python library for scientific computing, offering support for large, multi-dimensional arrays and matrices.</li>",
  },
  {
    langImage: "assets/images/techstack-page/mysql.png",
    langName: "MySQL",
    langDesc: "<li>MySQL is an open-source relational database management system, commonly used for web applications and data-driven websites.</li>",
  },
  {
    langImage: "assets/images/techstack-page/postgre.jpg",
    langName: "PostgreSQL",
    langDesc: "<li>PostgreSQL is a powerful open-source relational database system with features for data security and extensibility.</li>",
  },
  {
    langImage: "assets/images/techstack-page/mssql.jpg",
    langName: "MSSQL",
    langDesc: "<li>Microsoft SQL Server (MSSQL) is a relational database management system known for its robust performance and enterprise-level capabilities.</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
