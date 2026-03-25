import '../../App.css';
import Navbar from '../../components/Navbar';

function SnapCAT() {
  return (
    <div className="app">
      <header className="hero" id="snapcat">
        <Navbar />
      </header>

      <main className="content">
        <h1 className="text-4xl font-bold text-center">SnapCAT</h1>
      </main>
    </div>
  );
}

export default SnapCAT;
