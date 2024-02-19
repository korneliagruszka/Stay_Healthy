import { useState } from 'react';
import "../Training/training.scss";

function Training() {
    const [selectedExercises, setSelectedExercises] = useState([]);
    const handleSubmit = (event) => {
      event.preventDefault();
      const exerciseType = event.target.elements.exerciseType.value;
      if (exerciseType !== "") {
        setSelectedExercises([...selectedExercises, exerciseType]);
        event.target.elements.exerciseType.value = "";
      } else {
        alert("Wybierz rodzaj treningu aby przejść dalej");
      }
    };
  
    return (
      <div className="training_container">
        <h2>Zaplanuj swój trening</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="exerciseType">Wybierz rodzaj treningu:</label>
          <select id="exerciseType" name="exerciseType">
            <option value="">Rodzaj treningu</option>
            <option value="Trening rąk i pleców">Trening rąk i pleców</option>
            <option value="Trening brzucha i klatki">Trening brzucha i klatki</option>
            <option value="Trening nóg">Trening nóg</option>
          </select>
          <button type="submit">Dodaj trening</button>
        </form>
        {selectedExercises.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Rodzaj treningu:</th>
              </tr>
            </thead>
            <tbody>
              {selectedExercises.map((exercise, index) => (
                <tr key={index}>
                  <td>{exercise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }

export default Training;