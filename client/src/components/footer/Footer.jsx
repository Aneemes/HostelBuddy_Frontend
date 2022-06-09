import "./footer.css";
import logo from "../../images/logo.png"

const Footer = () => {
  return (
    <footer id="footer">
      <div class="leftFooter">
      <img src={logo} alt="Logo" />

        
      </div>

      <div class="midFooter">
        <h1>HostelHub</h1>
        <p>Customer Satisfaction is our motto</p>

        <p>Copyrights 2022 &copy; HostelHub</p>
      </div>

      <div class="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/test">Instagram</a>
        <a href="http://youtube.com/test">Youtube</a>
        <a href="http://instagram.com/test">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
