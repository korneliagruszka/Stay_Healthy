import { useRef } from "react";
import "../Header/header.scss";

function Header() {
  const planningRef = useRef(null);

  const handleButtonClick = () => {
    const planningElement = planningRef.current;
    const offsetTop = planningElement.offsetTop + 600;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  return (
    <div className="header">
      <h1>
        <span className="header_first">Stay</span>
        <span className="header_second">Healthy</span>
      </h1>
      <nav className="navigation">
        <a href="#banner">O nas</a>
        <a href="#planning" onClick={handleButtonClick}>
          Planowanie
        </a>
        <a href="#contact">Kontakt</a>
      </nav>
      <div id="planning" ref={planningRef}></div>
    </div>
  );
}

export default Header;
