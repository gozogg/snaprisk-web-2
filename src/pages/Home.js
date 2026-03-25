import '../App.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="app">
      <header className="hero" id="home">
        <Navbar />
      </header>

      <main className="content">
        <h1 className="text-4xl font-bold text-center">Home</h1>
      </main>
    </div>
  );
}

export default Home;
