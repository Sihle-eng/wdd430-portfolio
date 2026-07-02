import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description:
      'A full-stack Next.js application for managing products, orders, and inventory with real-time analytics.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    link: 'https://github.com/Sihle-eng/ecommerce-dashboard',
  },
  {
    title: 'Weather Forecast App',
    description:
      'A React-based weather application that fetches live data from OpenWeatherMap API with 5-day forecasts.',
    technologies: ['React', 'JavaScript', 'CSS', 'REST API'],
    link: 'https://github.com/Sihle-eng/weather-app',
  },
  {
    title: 'Task Management System',
    description:
      'A full-stack task manager with drag-and-drop functionality, user authentication, and team collaboration features.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    link: 'https://github.com/Sihle-eng/task-manager',
  },
  {
    title: 'Personal Blog Platform',
    description:
      'A markdown-based blog engine with syntax highlighting, search functionality, and dark mode support.',
    technologies: ['Next.js', 'React', 'MDX', 'Tailwind CSS'],
    link: 'https://github.com/Sihle-eng/blog-platform',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          My Portfolio
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          I'm a full-stack developer learning Next.js and React. Here are some
          of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </div>
  );
}