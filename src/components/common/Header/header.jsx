import '../Header/header.scss';

function Header() {
    return (
      <div className="Header">
        <h1>
        <span className="header_first">Stay</span>
        <span className="header_second">Healthy</span>
        </h1>
        <nav className="navigation">
          <a href="">Zaplanuj trening</a>
          <a href="">Kalkulator BMI</a>
          <a href="">Śledź postępy</a>
          <a href="">Kontakt</a>
        </nav>
      </div>
    );
  }
  
  export default Header;