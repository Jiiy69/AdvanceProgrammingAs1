// Shows the displayed logs
import MoodList from '../components/MoodList';
import Link from 'next/link';

export default function History() {
  return (
    <div className="container">
      <h1>📜 Mood History</h1>
      <MoodList />
      <Link href="/">
        <button className="nav-button">Back to Home</button>
      </Link>
    </div>
  );
}
