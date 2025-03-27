/**
 * Footer component.
 *
 * This component displays the application's footer, including the app name,
 * navigation links, and contact information.
 *
 * Props: None
 *
 * Functionality:
 * - Provides links to "About Us" and "Planning" sections.
 * - Displays the application's email address for contact purposes.
 */

import { useLocation } from "react-router-dom";
import { useRef } from "react";
import "../Footer/footer.scss";

function Footer() {
  const planningRef = useRef(null);
  const bannerRef = useRef(null);
  const location = useLocation();

  const handleScrollToSection = (ref, offset) => (event) => {
    if (location.pathname !== "/") {
      event.preventDefault();
      window.location.href = "/"; // Przekierowanie do strony głównej
    } else {
      const element = ref.current;
      const offsetTop = element.offsetTop + offset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      <div id="banner" ref={bannerRef}></div>
      <div id="planning" ref={planningRef}></div>
      <footer className="footer" id="contact">
        <div className="planning_header">
          <h2>
            <span className="header_first">Stay</span>
            <span className="header_second">Healthy</span>
          </h2>
        </div>
        <div className="footer_list">
          <a href="#banner" onClick={handleScrollToSection(bannerRef)}>
            O nas
          </a>
          <a
            href="#planning"
            onClick={handleScrollToSection(planningRef, -750)}
          >
            Planowanie
          </a>
          <a href="">stayhealthy@gmail.com</a>
          <p>Copyright &copy; StayHealthy</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
