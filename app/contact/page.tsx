export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Contact Me
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Have a question or want to collaborate? Reach out to me through any of the channels below.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <a href="mailto:sihle@example.com" className="text-blue-600 hover:underline">
              sihle@example.com
            </a>
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">GitHub</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <a href="https://github.com/Sihle-eng" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              @Sihle-eng
            </a>
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Sihlelelwe Mchobokazi
            </a>
          </p>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Social</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              @sihledev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}