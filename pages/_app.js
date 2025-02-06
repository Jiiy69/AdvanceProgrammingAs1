import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <nav className="nav-bar">
        <Link href="/">Home</Link>
        <Link href="/history">Mood History</Link>
      </nav>
      <Component {...pageProps} />
      <footer className="footer">
        <p>Made by: Lou Liwanag</p>
        <p>Subject: CPAN 144 Assignment 1</p>
      </footer>
    </div>
  );
}

export default MyApp;