import './index.css';
import Navbar from './components/Navbar'; // Navigation bar with theme toggle
import AboutMe from './components/AboutMe'; // About section
import LiveProjects from './components/LiveProjects'; // Project card grid

function App() {
  return (
    // Page wrapper with light/dark theme support
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 py-6 max-w-4xl mx-auto">
      <Navbar />

      {/* Header area with site intro */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Camila Yca</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Welcome to my digital corner 🌍
        </p>
      </header>

      {/* Main content sections */}
      <AboutMe />
      <LiveProjects />

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-400 text-center space-y-2">
  <p>&copy; {new Date().getFullYear()} Camila Yca. All rights reserved.</p>

  {/* Social icons */}
  <div className="flex justify-center gap-4 text-lg">
    <a
      href="https://github.com/cycuestaa"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600 dark:hover:text-blue-400"
    >
     [ GitHub ]
    </a>

    <a
      href="https://www.linkedin.com/in/cycuestaa/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-600 dark:hover:text-blue-400"
    >
     [ LinkedIn ]
    </a>
    {/* Add more links like Twitter, Medium, etc. */}
  </div>
</footer>
    </div>
  );
}

export default App;
