export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: 'opensource' | 'school';
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A full-stack Next.js application for managing products, orders, and inventory.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    type: 'opensource',
    link: 'https://github.com/Sihle-eng/ecommerce-dashboard',
  },
  {
    id: 2,
    title: 'Weather Forecast App',
    description: 'A React-based weather app that fetches live data from OpenWeatherMap API.',
    technologies: ['React', 'JavaScript', 'CSS', 'REST API'],
    type: 'opensource',
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A full-stack task manager with drag‑and‑drop and authentication.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    type: 'school',
  },
  {
    id: 4,
    title: 'Personal Blog Platform',
    description: 'A markdown‑based blog engine with syntax highlighting and dark mode.',
    technologies: ['Next.js', 'React', 'MDX', 'Tailwind CSS'],
    type: 'school',
    link: 'https://github.com/Sihle-eng/blog-platform',
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectsByType(type: 'opensource' | 'school') {
  return projects.filter(p => p.type === type);
}

export function getProjectById(id: number) {
  return projects.find(p => p.id === id);
}