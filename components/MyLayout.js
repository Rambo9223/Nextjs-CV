import Link from 'next/link';
// import the head tag to implement bootstrap stylesheet
import Head from 'next/head';
// import header component to add style to the nav bar
import Header from './Header';

// our css object for the header component
const layoutStyle = {
    margin: 10,
    padding: 0,
    border: '1px solid #DDD',
	textAlign:"center",
	border:"1px solid black",
    borderLeft:"475px solid transparent",
    borderRight:"475px solid transparent"
}

const Layout = (props) => (
	console.log(props),
   <div>
	<Head>
	   <link
  			rel="stylesheet"
  			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  			crossOrigin="anonymous"
		/>
	</Head>
	{/* Header is placed within the div so the layout style is 
	applied to it */}
  	<div style={layoutStyle}>
    	<Header />
    	{props.children}
  	</div>
  </div>
)

export default Layout
