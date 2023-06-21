import Link from "next/link";
/* View Work is the component that contains the 
information on previous work that is shown from the select dropdown,
we pass the index of the item we want to view and the 
resume.json file as props */
function ViewWork (props){
    let value = props.value
    let resume = props.resume;
    console.log(value);
    console.log(resume);
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
      Description - {resume.work[value].description}
    </li>
    <li>Position - {resume.work[value].position}</li>
    <li>URL - <Link href={resume.work[value].url}>{resume.work[value].url}</Link></li>
    <li>Summary - <br></br>{resume.work[value].summary}</li>
    <li>Start Date - {resume.work[value].startDate} <br></br> 
        End Date - {resume.work[value].endDate}
    </li>
    </>)
  }
  export default ViewWork