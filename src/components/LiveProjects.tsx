const LiveProjects = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3">Live Projects</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a
            href="https://simplyfitness.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            SimplyFitness – Workout Tracker
          </a>
        </li>
      </ul>
    </section>
  );
};

export default LiveProjects;

