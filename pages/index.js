/* Index is the homepage that navigates the user to click the 
links in the header/nav bar to view the cv sections */
import BodyStyle from "../components/BodyStyle";
import Layout from "../components/MyLayout";
export default () => (
    <BodyStyle>
    <Layout>
        <h2>CV - Scott Ramsay</h2>
        <img src="static\images\23.jpg" height={"250px"} width={"250px"}/>
        <h3>To find out more about me please click the links above.</h3>
    </Layout>
    </BodyStyle>
)