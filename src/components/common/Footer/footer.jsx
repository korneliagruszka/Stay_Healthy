import "../Footer/footer.scss";

function Footer() {
  return (
    <div className="footer" id="#footer">
      <div className="planning_header">
        <h2>
          <span className="header_first">Stay</span>
          <span className="header_second">Healthy</span>
        </h2>
      </div>
      <div className="footer_list">
        <a href="#banner">O nas</a>
        <a href="#planning">Planowanie</a>
        <a href="#footer">Kontakt</a>
        <p>Copyright &copy; StayHealthy</p>
      </div>
    </div>
  );
}

export default Footer;
