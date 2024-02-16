import { useRef } from "react";
import "../Footer/footer.scss";

function Footer() {
  const planningRef = useRef(null);

  const handlePlanowanieClick = () => {
    planningRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <>
    <div id="planning" ref={planningRef}></div>
    <footer className="footer" id="contact">
      <div className="planning_header">
        <h2>
          <span className="header_first">Stay</span>
          <span className="header_second">Healthy</span>
        </h2>
      </div>
      <div className="footer_list">
        <a href="#banner">O nas</a>
        <a href="#planning" onClick={handlePlanowanieClick}>Planowanie</a>
        <a href="">stayhealthy@gmail.com</a>
        <p>Copyright &copy; StayHealthy</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;