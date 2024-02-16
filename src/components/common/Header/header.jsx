import { Link } from "react-router-dom";
import { useRef } from "react";
import "../Header/header.scss";

function Header() {
  const planningRef = useRef(null);
  const contactRef = useRef(null);
  const bannerRef = useRef(null);

  const handleButtonClick = () => {
    const planningElement = planningRef.current;
    const offsetTop = planningElement.offsetTop + 650;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  const handleButtonClick2 = () => {
    const planningElement = planningRef.current;
    const offsetTop = planningElement.offsetTop + 800;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  const handleButtonClick3 = () => {
    const planningElement = planningRef.current;
    const offsetTop = planningElement.offsetTop - 100;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  return (
    <div className="header">
      <h1>
        <Link to="/" className="header_brand">
          <span className="header_first">Stay</span>
          <span className="header_second">Healthy</span>
        </Link>
      </h1>
      <div id="planning" ref={planningRef}></div>
      <div id="contact" ref={contactRef}></div>
      <div id="banner" ref={bannerRef}></div>

      <nav className="navigation">
        <a href="#banner" onClick={handleButtonClick3}>O nas</a>
        <a href="#planning" onClick={handleButtonClick}>
          Planowanie
        </a>
        <a href="#contact" onClick={handleButtonClick2}>Kontakt</a>
      </nav>
      
    </div>
  );
}

export default Header;