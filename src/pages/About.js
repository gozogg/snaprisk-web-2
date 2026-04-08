import '../App.css';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="app">
      <header className="hero" id="about">
        <Navbar />
      </header>

      <main className="content">
        <h1 className="text-4xl font-bold text-center">About</h1>
        <h1 className="text-4xl font-bold text-center">Brand Pillars</h1>
      </main>
    </div>
  );
}

export default About;
