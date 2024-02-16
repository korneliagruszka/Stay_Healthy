import { useRef } from "react";
import "../Banner/banner.scss";

function Banner() {
  const planningRef = useRef(null);

  const handleButtonClick = () => {
    const planningElement = planningRef.current;
    const offsetTop = planningElement.offsetTop + 350;
    window.scrollTo({ top: offsetTop, behavior: "smooth" });
  };

  return (
    <div className="banner" id="banner">
      <p>
        StayHealthy to aplikacja dla osób aktywnych lub dla tych którzy dopiero
        zaczynają swoją przygodę z aktywnym trybem życia. Nasza aplikacja będzie
        Cię wspierać w utrzymaniu zdrowej sylwetki. Niech planowanie stanie się
        jeszcze prostsze!
        <button onClick={handleButtonClick}>Wypróbuj</button>
      </p>
      <img></img>
      <div id="planning" ref={planningRef}></div>
    </div>
  );
}

export default Banner;