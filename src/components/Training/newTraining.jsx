import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import exercisesData from "./database/exercises.json";

/**
 * New Training component.
 *
 * This component displays a list of exercises for a selected training category
 * and allows users to add them to their training plan.
 *
 * Props:
 * - category (string): The selected training category.
 *
 * Functionality:
 * - Displays exercises based on the selected category.
 * - Allows users to select and add exercises to their plan.
 */
function NewTraining({ selectedTraining, onExercisesSelected }) {
  const [availableExercises, setAvailableExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);

  useEffect(() => {
    const filteredExercises = exercisesData.exercises.filter((exercise) =>
      exercise.id.startsWith(selectedTraining)
    );
    setAvailableExercises(filteredExercises);
  }, [selectedTraining]);

  const handleExerciseToggle = (exerciseId) => {
    setSelectedExercises((prevSelectedExercises) => {
      const isSelected = prevSelectedExercises.includes(exerciseId);
      if (isSelected) {
        return prevSelectedExercises.filter((id) => id !== exerciseId);
      } else {
        return [...prevSelectedExercises, exerciseId];
      }
    });
  };

  const handleSubmitExercises = () => {
    const exercisesDetails = selectedExercises
      .map((exerciseId) => {
        const exercise = availableExercises.find((e) => e.id === exerciseId);
        return exercise
          ? {
              id: exercise.id,
              name: exercise.name,
              series: exercise.series,
              repeats: exercise.repeats,
            }
          : null;
      })
      .filter((exercise) => exercise !== null);

    onExercisesSelected(exercisesDetails);
    setSelectedExercises([]);
  };

  return (
    <div>
      <h3>Wybierz ćwiczenia:</h3>
      <div className="exercise_container">
        {availableExercises.map((exercise) => (
          <div key={exercise.id}>
            <input
              type="checkbox"
              id={exercise.id}
              checked={selectedExercises.includes(exercise.id)}
              onChange={() => handleExerciseToggle(exercise.id)}
            />
            <label htmlFor={exercise.id}>{exercise.name}</label>
          </div>
        ))}
      </div>
      {selectedExercises.length > 0 && (
        <button className="add" onClick={handleSubmitExercises}>
          Dodaj ćwiczenia
        </button>
      )}
    </div>
  );
}

NewTraining.propTypes = {
  selectedTraining: PropTypes.string.isRequired,
  onExercisesSelected: PropTypes.func.isRequired,
};

export default NewTraining;