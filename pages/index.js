// Shows the mood selector and navigation to history
// Home Page
import MoodSelector from "../components/MoodSelector";

export default function Home() {
  return (
    <div>
      <h1>🌟 Welcome to Mood Tracker! 🌟</h1>
      <p>Log your daily moods and track your emotional trends over time.</p>
      <MoodSelector />
    </div>
  );
}