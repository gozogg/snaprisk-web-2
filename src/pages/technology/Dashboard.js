import '../../App.css';
import Navbar from '../../components/Navbar';

function Dashboard() {
  return (
    <div className="app">
      <header className="hero" id="dashboard">
        <Navbar />
      </header>

      <main className="content">
        <h1 className="text-4xl font-bold text-center">Dashboard</h1>
      </main>
    </div>
  );
}

export default Dashboard;
