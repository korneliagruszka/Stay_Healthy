import { useState, useEffect } from "react";
import "../Training/training.scss";
import NewTraining from "./newTraining";

function Training() {
  const [selectedTraining, setSelectedTraining] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);

  useEffect(() => {
    const storedTraining = localStorage.getItem('selectedTraining');
    if (storedTraining) {
      setSelectedTraining(storedTraining);
    }

    const storedExercises = localStorage.getItem('selectedExercises');
    if (storedExercises) {
      setSelectedExercises(JSON.parse(storedExercises));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trainingType = event.target.elements.trainingType.value;
    if (trainingType !== "") {
      setSelectedTraining(trainingType);
      localStorage.setItem('selectedTraining', trainingType);
    } else {
      alert("Wybierz rodzaj treningu, aby przejść dalej");
    }
  };

  const handleExercisesSelection = (exercises) => {
    setSelectedExercises(exercises);
    localStorage.setItem('selectedExercises', JSON.stringify(exercises)); 
  };

  const removeExercise = (indexToRemove) => {
    const newExercises = selectedExercises.filter((_, index) => index !== indexToRemove);
    setSelectedExercises(newExercises);
    localStorage.setItem('selectedExercises', JSON.stringify(newExercises)); 
  };

  return (
    <div className="training_container">
      <h2>Zaplanuj swój trening</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="trainingType">Wybierz rodzaj treningu:</label>
        <select id="trainingType" name="trainingType" value={selectedTraining} onChange={(e) => {
          setSelectedTraining(e.target.value);
          localStorage.setItem('selectedTraining', e.target.value); 
        }}>
          <option value="">Wybierz</option>
          <option value="Ręce i plecy">Ręce i plecy</option>
          <option value="Brzuch i klatka">Brzuch i klatka</option>
          <option value="Nogi">Nogi</option>
        </select>
        <button type="submit">Dodaj trening</button>
      </form>
      {selectedTraining && (
        <NewTraining selectedTraining={selectedTraining} onExercisesSelected={handleExercisesSelection} />
      )}
      {selectedExercises.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Rodzaj treningu</th>
              <th>Nazwa ćwiczenia</th>
              <th>Serie</th>
              <th>Powtórzenia</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
            {selectedExercises.map((exercise, index) => (
              <tr key={index}>
                <td>{selectedTraining}</td>
                <td>{exercise.name}</td>
                <td>{exercise.series}</td>
                <td>{exercise.repeats}</td>
                <td>
                  <button onClick={() => removeExercise(index)}>Usuń</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Training;