import { useState, useEffect } from 'react';
import "../Progress/progress.scss";

function Progress() {
  const [weight, setWeight] = useState('');
  const [measurements, setMeasurements] = useState('');
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem('progress')) || [];
    setProgress(savedProgress);
  }, []);

  const saveProgress = () => {
    const newProgress = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      weight,
      measurements,
    };
    const updatedProgress = [...progress, newProgress];
    localStorage.setItem('progress', JSON.stringify(updatedProgress));
    setProgress(updatedProgress);
    setWeight('');
    setMeasurements('');
  };

  const deleteProgress = (id) => {
    const updatedProgress = progress.filter(entry => entry.id !== id);
    localStorage.setItem('progress', JSON.stringify(updatedProgress));
    setProgress(updatedProgress);
  };

  return (
    <div className="progress_cointainer">
      <h2>Śledzenie postępów</h2>
      <input
        type="text"
        placeholder="Aktualna waga"
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      <input
        type="text"
        placeholder="Aktualne wymiary"
        value={measurements}
        onChange={e => setMeasurements(e.target.value)}
      />
      <button onClick={saveProgress}>Zapisz postępy</button>
      {progress.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Waga(kg)</th>
              <th>Wymiary(cm)</th>
              <th>Edytuj</th>
            </tr>
          </thead>
          <tbody>
            {progress.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.date}</td>
                <td>{entry.weight}</td>
                <td>{entry.measurements}</td>
                <td>
                  <button onClick={() => deleteProgress(entry.id)}>Usuń</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Progress;