/**
 * Training Planner component.
 *
 * This component allows users to create a personalized training plan by
 * selecting exercises from predefined categories.
 *
 * Props: None
 *
 * Functionality:
 * - Displays exercise categories and allows users to select exercises.
 * - Saves the selected exercises to localStorage for persistence.
 */

import { useState, useEffect } from "react";
import "../Training/training.scss";
import NewTraining from "./newTraining";

function Training() {
  const [selectedTraining, setSelectedTraining] = useState("");
  const [selectedExercises, setSelectedExercises] = useState([]);

  useEffect(() => {
    const storedExercises = localStorage.getItem("selectedExercises");
    if (storedExercises) {
      setSelectedExercises(JSON.parse(storedExercises));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trainingType = event.target.elements.trainingType.value;
    if (trainingType !== "") {
      setSelectedTraining(trainingType);
    }
  };

  const handleExercisesSelection = (newExercises) => {
    // Dodanie rodzaju treningu do każdego ćwiczenia
    const exercisesWithTraining = newExercises.map((exercise) => ({
      ...exercise,
      trainingType: selectedTraining,
    }));
    const updatedExercises = [...selectedExercises, ...exercisesWithTraining];
    setSelectedExercises(updatedExercises);
    localStorage.setItem("selectedExercises", JSON.stringify(updatedExercises));
  };

  const removeExercise = (indexToRemove) => {
    const newExercises = selectedExercises.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedExercises(newExercises);
    localStorage.setItem("selectedExercises", JSON.stringify(newExercises));
  };

  return (
    <div className="training_container">
      <h2>Zaplanuj swój trening</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="trainingType">Wybierz rodzaj treningu:</label>
        <select
          id="trainingType"
          name="trainingType"
          value={selectedTraining}
          onChange={(e) => setSelectedTraining(e.target.value)}
        >
          <option value="">Wybierz</option>
          <option value="Ręce i plecy">Ręce i plecy</option>
          <option value="Brzuch i klatka">Brzuch i klatka</option>
          <option value="Nogi">Nogi</option>
        </select>
      </form>
      {selectedTraining && (
        <NewTraining
          selectedTraining={selectedTraining}
          onExercisesSelected={handleExercisesSelection}
        />
      )}
      {selectedExercises.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Rodzaj treningu</th>
              <th>Nazwa ćwiczenia</th>
              <th>Serie</th>
              <th>Powtórzenia</th>
              <th>Edytuj</th>
            </tr>
          </thead>
          <tbody>
            {selectedExercises.map((exercise, index) => (
              <tr key={index}>
                <td>{exercise.trainingType}</td>
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
