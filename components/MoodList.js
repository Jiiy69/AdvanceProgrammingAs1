// Display saved mood entries
import { useState, useEffect } from 'react';
import MoodItem from './MoodItem';

export default function MoodList() {
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    const savedMoods = JSON.parse(localStorage.getItem('moodHistory')) || [];
    setMoodHistory(savedMoods);
  }, []);

  const handleDeleteMood = (id) => {
    const updatedMoods = moodHistory.filter(mood => mood.id !== id);
    setMoodHistory(updatedMoods);
    localStorage.setItem('moodHistory', JSON.stringify(updatedMoods));
  };

  return (
    <div>
      {moodHistory.length === 0 ? <p>No moods recorded yet.</p> : (
        moodHistory.map((mood) => (
          <MoodItem key={mood.id} mood={mood} onDelete={handleDeleteMood} />
        ))
      )}
    </div>
  );
}
