import '../../App.css';
import Navbar from '../../components/Navbar';
import PageHelmet from '../../components/PageHelmet';

function Resources() {
  return (
    <div className="app">
      <PageHelmet
        title="SnapRISK | Resources"
        description="Browse SnapRISK resources for property risk engineering insights, tools, and reference materials."
        path="/about/resources"
      />
      <header className="hero" id="resources">
        <Navbar />
      </header>

      <main className="content">
        <h1 className="text-4xl font-bold text-center">Resources</h1>
      </main>
    </div>
  );
}

export default Resources;
