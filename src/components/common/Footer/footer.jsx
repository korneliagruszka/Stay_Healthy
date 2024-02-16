import { useRef } from "react";
import "../Footer/footer.scss";

function Footer() {
  const planningRef = useRef(null);
  //const bannerRef = useRef(null);

  const handlePlanningClick = () => {
    planningRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  // const handleBannerClick = () => {
  //   bannerRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  // };

  return (
    <>
    <div id="planning" ref={planningRef}></div>
    {/* <div id="banner" ref={bannerRef}></div> */}
    <footer className="footer" id="contact">
      <div className="planning_header">
        <h2>
          <span className="header_first">Stay</span>
          <span className="header_second">Healthy</span>
        </h2>
      </div>
      <div className="footer_list">
        <a href="#banner">O nas</a> 
        <a href="#planning" onClick={handlePlanningClick}>Planowanie</a>
        <a href="">stayhealthy@gmail.com</a>
        <p>Copyright &copy; StayHealthy</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;

//onClick={handleBannerClick}