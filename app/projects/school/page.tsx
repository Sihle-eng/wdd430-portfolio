export default function SchoolProjects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        🎓 School Projects
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Projects I've built as part of my coursework at BYU-Idaho.
      </p>
      <ul className="space-y-4">
        <li className="p-4 border-l-4 border-green-600 bg-gray-50 dark:bg-gray-800 rounded">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            WDD 430: Full-Stack Portfolio
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            This portfolio application built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </li>
        <li className="p-4 border-l-4 border-green-600 bg-gray-50 dark:bg-gray-800 rounded">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            CSE 340: Web Application Development
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            This project involved building a web application using Node.js, Express, and MongoDB, focusing on RESTful API design and user authentication.
          </p>
        </li>
      </ul>
    </div>
  );
}