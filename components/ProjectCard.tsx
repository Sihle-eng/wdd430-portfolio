interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  type?: 'opensource' | 'school';
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  type,
}: ProjectCardProps) {
  return (
    <article className="p-4 border-l-4 border-blue-600 bg-gray-50 dark:bg-gray-800 rounded shadow-sm hover:shadow-md transition">
      {type && (
        <span className={`inline-block text-xs px-2 py-1 rounded mb-2 ${
          type === 'opensource'
            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
        }`}>
          {type === 'opensource' ? '🌐 Open Source' : '🎓 School'}
        </span>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>
      {link && (
        <p className="mt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View Project →
          </a>
        </p>
      )}
    </article>
  );
}