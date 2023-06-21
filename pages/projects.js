// BodyStyle applies css to the html within the tags
import BodyStyle from "../components/BodyStyle";
// Layout displays the header
import Layout from "../components/MyLayout"
// import resume object 
const resume = require("../resume.json");
// import link to support client side navigation
import Link from "next/link";


/* The projects function take the project section from the resume object and 
uses the .map method to map each project to a bootstrap card. 
Each card contains a title, thumnail image, about section and a link 
to either a git repositiory or deployment page or both. 

like the about and contact page the content is wrapped in the BodyStyle 
component to apply styling*/
export default () => {
    
    
    return(
    <>
    <Layout>
    
  </Layout>
  <BodyStyle>
  <h3>My Projects</h3>
    <img src="/static/images/23.jpg" height={"250px"} width={"250px"}/> 
    <style jsx>
        {`.row{
            position:relative;
            left:200px;
        }
        .card-body{
            border-style:solid;
            border-image:linear-gradient(black, transparent) 1;
            border-bottom:0;
        }`}
    </style>
    <div className="row"> 
    {resume.projects.map((project)=>{
        return (
        <>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 pt-5"  key={project.title}>
        <div className="card h-100">
        <div className="card-body">
        <h4 className='title'>Project:<br/>{project.title}</h4>
        <img src={project.thumbnail} height={"250px"} width={"250px"}/>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
            <strong>About:</strong> <p>{project.about}</p>
            </li>
            <li className="list-group-item">
            <strong>Git Repository:</strong><br></br> <Link href={project.gitRepo}>{project.gitRepo}</Link>
            </li>
            <li className="list-group-item">
                <strong>Deployment Link:</strong><br></br>{/*
                If link exists show link else show N/A*/(project.deploymentLink.length>5)?<Link href={project.deploymentLink}>{project.deploymentLink}</Link>:<p>N/A</p>}
            </li>
        </ul>
        </div>
    </div>

        </>
        )
    })}
    </div>
    </BodyStyle>
    </>
)
}
