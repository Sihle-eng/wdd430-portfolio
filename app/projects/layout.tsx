import Link from 'next/link';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8 flex gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
          <Link
            href="/projects"
            className="text-blue-600 hover:underline font-medium"
          >
            Overview
          </Link>
          <Link
            href="/projects/opensource"
            className="text-blue-600 hover:underline font-medium"
          >
            Open Source
          </Link>
          <Link
            href="/projects/school"
            className="text-blue-600 hover:underline font-medium"
          >
            🎓 School
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
}