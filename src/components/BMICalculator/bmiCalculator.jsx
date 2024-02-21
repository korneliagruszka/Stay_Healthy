import { useState } from "react";
import "../BMICalculator/bmiCalculator.scss";

const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    if (height && weight) {
      const heightMeters = height / 100;
      const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);
      setBmi(bmiValue);
    }
  };

  return (
    <div className="bmi_container">
      <h2>Kalkulator BMI</h2>
      <div>
        <label>Wzrost (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div style={{marginLeft:'15px'}}>
        <label>Waga (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi}>Oblicz BMI</button>
      {bmi && (
        <div>
          <h3>Twoje BMI: {bmi}</h3>
          <p>
            Wynik:{" "}
            {bmi <= 18.5
              ? "Niedowaga"
              : bmi <= 24.9
              ? "Waga prawidłowa"
              : bmi <= 29.9
              ? "Nadwaga"
              : "Obesity"}
          </p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;