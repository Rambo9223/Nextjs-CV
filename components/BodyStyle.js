import Link from 'next/link'

    // our css object which is the body for our pages
    const bodyStyle = {
    background: "rgb(255,255,255)",
	background: "linear-gradient(24deg, rgba(235,255,255,1) 15%, rgba(129,212,255,1)  50%, rgba(250,255,255,1) 85%)",
    textAlign:"center",
    margin:"0 auto",
    overflow:"hidden",
    }
    
    // export the BodyStyle function with the child props with the
    // bodystyle div
export default (props) => (
    console.log(props),
    <div style={bodyStyle}>
    {props.children}
    </div>
)

