import '../Header/header.scss';

function Header() {
    return (
      <div className="header">
        <h1>
        <span className="header_first">Stay</span>
        <span className="header_second">Healthy</span>
        </h1>
        <nav className="navigation">
          <a href="">O nas</a>
          <a href="">Wypróbuj</a>
          <a href="">Kontakt</a>
        </nav>
      </div>
    );
  }
  
  export default Header;