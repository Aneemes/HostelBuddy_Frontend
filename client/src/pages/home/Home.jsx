import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div class="homeContainer">
      
      <h1 class="mt-5"> Well known place</h1>
        <Featured/>
        <h1 class="homeTitle">Browse by property type</h1>
        <PropertyList/>
        
        <FeaturedProperties/> 
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
