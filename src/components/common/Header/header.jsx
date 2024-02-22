import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import "../Header/header.scss";

function Header() {
  const planningRef = useRef(null);
  const contactRef = useRef(null);
  const bannerRef = useRef(null);
  const location = useLocation(); // Używam useLocation, aby sprawdzić na którym widoku znajduje się użytkownik

  const handleScrollToSection = (ref, offset) => (event) => {
    if (location.pathname !== '/') {
      event.preventDefault(); 
      window.location.href = '/'; // Przekierowanie do strony głównej
    } else {
      const element = ref.current;
      const offsetTop = element.offsetTop + offset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
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
        <a href="#banner" onClick={handleScrollToSection(bannerRef, -100)}>O nas</a>
        <a href="#planning" onClick={handleScrollToSection(planningRef, 650)}>Planowanie</a>
        <a href="#contact" onClick={handleScrollToSection(contactRef, 800)}>Kontakt</a>
      </nav>
    </div>
  );
}

export default Header;