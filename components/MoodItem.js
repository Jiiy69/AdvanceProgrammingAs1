// Single Mood Entry
export default function MoodItem({ mood, onDelete }) {
  return (
    <div className="mood-item">
      <span>{mood.mood}</span>
      <button onClick={() => onDelete(mood.id)} className="delete-button">❌</button>
    </div>
  );
}
