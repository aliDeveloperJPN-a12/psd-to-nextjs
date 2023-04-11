import Navbar from "./navbar/navbar";
import Header from "./header/header";
import SocialMedia from './socialMedia/socialMedia'
import Features from "./features/features";
import Features1 from "./features1/features1";
import Features2 from "./features2/features2";
import Features3 from "./features3/features3";
import Options from "./options/options";
import Contactus from "./contactus/contactus";
import Footer from './footer/footer'
function HomePage() {
  return (
    <div>
      <Navbar />
      <Header/>
      <SocialMedia/>
      <Features/>
      <Features1/>
      <Features2/>
      <Features3/>
      <Options/>
      <Contactus/>
      <Footer/>
    </div>
  );
}
export default HomePage;
