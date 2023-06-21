// import the resume object 
const resume = require("../resume.json");
// BodyStyle will apply css to our component 
import BodyStyle from "../components/BodyStyle";
// import Layout to show or header/nav bar 
import Layout from "../components/MyLayout";
//Import the Link API to support client-side navigation
import Link from "next/link";

/* The contact page shows the contact information 
displayed on a bootstrap card, all html is wraped in the 
BodyStyle component to apply css and an additional style tag 
has been added to make some minor adjustments  */
export default () => (
<>
    <Layout>
    
  </Layout>
  <BodyStyle>
    <h3>Contact Me</h3>
    <img src="/static/images/23.jpg" height={"250px"} width={"250px"}/> 
    <div className="row"> 
    <style jsx>
        {`.row{
            position:relative;
            left:575px;
        }
        #card{
            border-style:solid;
            border-image:linear-gradient(black, transparent) 1;
            border-bottom:0;
        }
        .nested-li{
            list-style:none;
        }`}
    </style>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 pt-5" >
        <div className="card h-100"  id="card">
        <div className="card-body">
        <h4 className='title'>Name:<br/>{resume.basics.name}</h4>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
            <strong>About:</strong> {resume.basics.label}
            </li>
            <li className="list-group-item">
            <strong>Email: </strong><Link href={`mailto:${resume.basics.email}`}>{resume.basics.email}</Link>
            </li>
            <li className="list-group-item">
                <strong>Phone:</strong>{resume.basics.phone}
            </li>
            <li className="list-group-item">
            <strong>Location:</strong>
            <ul className="list-group list-group-flush">
            <li className="nested-li">
            <strong>City:</strong> {resume.basics.location.city}
            </li>
            <li className="nested-li">
            <strong>Country:</strong> {resume.basics.location.countryCode}
            </li>
            <li className="nested-li">
            <strong>Reigon:</strong> {resume.basics.location.region}
            </li>
            </ul>   
            </li>
            <h5>Find me on:</h5>
            {resume.basics.profiles.map((profile)=>{
                return (<>
                <li className="nested-li">
                <Link href={profile.url}>{profile.network}</Link>
                </li>
                </>)
            })}
        </ul>
        </div>
    </div>
    </div>
    </BodyStyle>
    </>

    /* Push Webiste to Git, Get webpage Thumbnails
    Do jsx styling for this page */
)
