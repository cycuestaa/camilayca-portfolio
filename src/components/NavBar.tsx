import { useEffect, useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark class on body
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between mb-10 py-2 border-b dark:border-gray-700">
      <div className="text-lg font-semibold">camilayca.com</div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-sm text-gray-600 dark:text-gray-300 border px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? '☀ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

