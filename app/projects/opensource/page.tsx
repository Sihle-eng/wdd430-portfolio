export default function OpenSourceProjects() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Open Source Projects
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        My contributions to the open-source community.
      </p>
      <ul className="space-y-4">
        <li className="p-4 border-l-4 border-blue-600 bg-gray-50 dark:bg-gray-800 rounded">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Project Contribution
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Conductend research and contributed to an open-source project, improving its functionality and fixing bugs.
          </p>
        </li>
        <li className="p-4 border-l-4 border-blue-600 bg-gray-50 dark:bg-gray-800 rounded">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Another Open Source Project Contribution
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Reviewed and contributed to another open-source project, enhancing its features and documentation.
          </p>
        </li>
      </ul>
    </div>
  );
}