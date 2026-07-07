import Link from "next/link";

export default function ProjectsOverview() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Projects Overview
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Explore my portfolio of projects across different categories.
      </p>
      <div className="grid gap-4 md:grid-cols-2 mt-8">
        <div className="p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
            Open Source
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Projects I've contributed to or built for the open-source community.
          </p>
          <Link
            href="/projects/opensource"
            className="inline-block mt-3 text-blue-600 hover:underline font-medium"
          >
            View Open Source →
          </Link>
        </div>
        <div className="p-6 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300">
            🎓 School
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Academic projects and assignments from my coursework.
          </p>
          <Link
            href="/projects/school"
            className="inline-block mt-3 text-green-600 hover:underline font-medium"
          >
            View School Projects →
          </Link>
        </div>
      </div>
    </div>
  );
}