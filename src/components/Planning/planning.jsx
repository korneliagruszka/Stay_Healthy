/**
 * Planning component.
 *
 * This component displays the planning section on the homepage, providing
 * links to the training planner, BMI calculator, and progress tracker.
 *
 * Props: None
 *
 * Functionality:
 * - Displays three sections with descriptions and navigation buttons.
 * - Redirects users to the appropriate pages when buttons are clicked.
 */

import { Link } from "react-router-dom";
import "../Planning/planning.scss";

function Planning() {
  return (
    <div className="planning_container" id="planning">
      <div className="planning_header">
        <h2>
          <span className="header_first">Stay</span>
          <span className="header_second">Healthy</span>
        </h2>
      </div>
      <div className="planning_articles">
        <div className="planning_box">
          <img src="src/assets/pexels-mikhail-nilov-6739947.jpg"></img>
          <h3>Zaplanuj trening</h3>
          <p>
            Wybieraj spośród bazy ćwiczeń i stwórz trening dopasowany do Twoich
            potrzeb!
          </p>
          <Link to="/training">
            <button>Zaplanuj mój trening</button>
          </Link>
        </div>
        <div className="planning_box">
          <img src="src/assets/pexels-cottonbro-studio-4753921.jpg"></img>
          <h3>Kalkulator BMI</h3>
          <p>
            Chcesz mieć świadomość czy Twoja waga jest prawidłowa? Skorzystaj z
            naszego kalkulatora!
          </p>
          <Link to="/bmiCalculator">
            <button>Oblicz moje BMI</button>
          </Link>
        </div>
        <div className="planning_box">
          <img src="src/assets/pexels-cottonbro-studio-4753987.jpg"></img>
          <h3>Śledzenie postępów</h3>
          <p>
            Zapisuj swoją wagę i wymiary ciała a docenisz jak wiele udało Ci się
            już dokonać!
          </p>
          <Link to="/progress">
            <button>Dodaj moje wymiary</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Planning;