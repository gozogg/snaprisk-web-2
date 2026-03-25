import '../../App.css';
import Navbar from '../../components/Navbar';

function IRDashboard() {
  return (
    <div className="app">
      <header className="hero" id="ir-dashboard">
        <Navbar />
      </header>

      <main className="content">
        <h1 className="text-4xl font-bold text-center">IR Dashboard</h1>
      </main>
    </div>
  );
}

export default IRDashboard;
