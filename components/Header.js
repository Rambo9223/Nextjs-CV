// Import link so we can use the routes to different pages
import Link from 'next/link'

// link style is the css object for the link text
const linkStyle = {
  paddingTop:"10px",
  marginRight: 15,
  display:"inline-block",
  fontSize:"28px",
}

// Header is our nav bar containing our links/routes to the pages
const Header = () => (
    <div>
        <Link href="/about">
          <p style={linkStyle}>About</p>
        </Link>
        <Link href="/projects">
        <p style={linkStyle}>Projects</p>
        </Link>
        <Link href="/contact">
          <p style={linkStyle}>Contact</p>
        </Link>
    </div>
)

export default Header