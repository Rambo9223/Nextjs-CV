import Link from "next/link"
/* View Education is the component that contains the 
information on education that is shown from the select dropdown
we pass the index of the item we want to view and the 
resume.json file as props */
function ViewEducaton (props){
    let value = props.value
    let resume = props.resume
    console.log(value)
    return (<>
    <style jsx>
       {`
       li{list-style:none;
        padding-top:10px;
        width:80%;
        overflow:hidden;
        position:relative;
        left:10%;}
       `}
    </style>
    <li>
      Institution - {resume.education[value].institution}
    </li>
    <li>URL - <Link href={resume.education[value].url}>{resume.education[value].url}</Link></li>
    <li>Area - {resume.education[value].area}</li>
    <li>Study Type - {resume.education[value].studyType}</li>
    <li>Start Date - {resume.education[value].startDate} <br/> 
        End Date - {resume.education[value].endDate}
    </li>
    </>)
  }
  export default ViewEducaton