// import the resume object 
const resume = require("../resume.json");
//Import the Link API to support client-side navigation
import Link from 'next/link';
// import Layout to show or header/nav bar 
import Layout from '../components/MyLayout'
// useState for holding data we will pass as props
import { useState } from 'react';
// view Education and work components for when user selects 
// an item from the dropdowns
import ViewEducaton from '../components/ViewEducation';
import ViewWork from '../components/ViewWork';
// BodyStyle will apply css to our component 
import BodyStyle from '../components/BodyStyle';
import Button from "react-bootstrap/Button"




export default () => {
  
  const [indexEd,setIndexEd] = useState()// education option index no
  const [boolEd,setBoolEd] = useState(false);// show education
  const [boolWork,setBoolWork] = useState(false);// show work 
  const [indexWork,setIndexWork] = useState();// work option index no

  /*The handleEd function is toggled when user clicks the view button 
  next to the Education select html element */
  const HandleEd = () => {
    // the select html option value
    let index = (document.getElementById("education-list").value);
    setIndexEd(index) // set this value to indexEd variable 
    if(index!==""){// as long the option is not the placeholder
      setBoolEd(true);// show the html from the ViewEducation component 
    }else{setBoolEd(false)} // else hide 
  };
  /* Handle work uses the same logic as above but handles the 
  ViewWork components html */
  const HandleWork = () =>{
    let index = document.getElementById("work-list").value;
    setIndexWork(index);
    if(index!==""){
      setBoolWork(true);
    }else{setBoolWork(false);}
  }
  return (
  <>
  <Layout>
  </Layout>
  <BodyStyle>
  <h3>CV - {resume.basics.name}</h3>
  <img src="/static/images/23.jpg" height={"250px"} width={"250px"}/>
  <div>
    <h3>About Me:</h3>
  <h4>{resume.basics.label}</h4>
  <p>{resume.basics.summary}</p>
  
  <ul>
  <br></br>
  <h5>Education History</h5>
    <select id='education-list'>
      <option value={""}>--Please choose an option--</option>
      <option value={0}>{resume.education[0].institution}</option>
    <option value={1}>{resume.education[1].institution}</option>
    </select>
    <Button variant='primary' className='view-button' onClick={()=>{HandleEd()}}>View</Button>
    {(boolEd===true)?<ViewEducaton value={indexEd} resume={resume}/>:null}
    <br></br>
    <h5>Employment History</h5>
    <select id='work-list'>
      <option value={""}>--Please choose an option--</option>
      <option value={0}>{resume.work[0].name}</option>
    <option value={1}>{resume.work[1].name}</option>
    </select>
    <Button variant='primary' className='view-button' onClick={()=>{HandleWork()}}>View</Button>
    {(boolWork===true)?<ViewWork value={indexWork} resume={resume}/>:null}
    <br></br>
    <br></br>
    <h5>Hobbies & Interests</h5>
    <style jsx>
      {`li{
        list-style:none;
      }
      select{
        width: 225px;
        height: 35px;
        margin: 10px;
      }
      .view-button {
        position:relative;
        left:5px;
      }`}
    </style>
  {resume.interests.map((item)=>{
    return(<div>
      <li key={item.name}>{item.name}</li>
      {item.keywords.map((hobby)=>{
        return <li>{hobby}</li>  
      })}
    </div>)
  })}
  </ul>
  </div>
  </BodyStyle>
  </>
)

}