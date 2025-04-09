// This section renders a grid of project cards with title and description
// Modify the `projects` array to add more entries

const LiveProjects = () => {
  const projects = [
    {
      name: 'SimplyFitness – Workout Tracker',
      url: 'https://simplyfitness-camila.vercel.app', // 🔁 Replace with your actual deployed app URL
      description:
        'A personal workout tracking app with goal tracking, PB history, and custom plans.',
    },
    // You can add more projects here in this format
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3">Live Projects</h2>

      {/* Grid of project cards, responsive on small/medium screens */}
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <a
            key={i}
            href={proj.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-4 rounded-lg hover:shadow-md transition dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-1">
              {proj.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {proj.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LiveProjects;
