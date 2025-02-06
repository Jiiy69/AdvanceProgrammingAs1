// Allows user to select and log mood
import { useState, useEffect } from 'react';

const MoodTracker = () => {
  const [moods, setMoods] = useState([]);
  const [selectedMood, setSelectedMood] = useState('');

  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem('moodHistory')) || [];
    setMoods(savedMoods);
  }, []);

  const handleAddMood = () => {
    if (selectedMood) {
      const newMood = { id: Date.now(), mood: selectedMood };
      const updatedMoods = [...moods, newMood];
      setMoods(updatedMoods);
      localStorage.setItem('moodHistory', JSON.stringify(updatedMoods));
      setSelectedMood('');
    }
  };

  const handleDeleteMood = (id) => {
    const updatedMoods = moods.filter(mood => mood.id !== id);
    setMoods(updatedMoods);
    localStorage.setItem('moodHistory', JSON.stringify(updatedMoods));
  };

  return (
    <div className="container">
      <h2>Mood Tracker</h2>
      <select value={selectedMood} onChange={(e) => setSelectedMood(e.target.value)}>
        <option value="">-- Choose Mood --</option>
        <option value="😀 Happy">😀 Happy</option>
        <option value="😔 Sad">😔 Sad</option>
        <option value="😡 Angry">😡 Angry</option>
        <option value="😴 Tired">😴 Tired</option>
        <option value="😎 Relaxed">😎 Relaxed</option>
      </select>
      <button className="action-button" onClick={handleAddMood}>Add Mood</button>
      <div>
        {moods.map(mood => (
          <div key={mood.id} className="mood-item">
            <span>{mood.mood}</span>
            <button className="delete-button" onClick={() => handleDeleteMood(mood.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodTracker;
