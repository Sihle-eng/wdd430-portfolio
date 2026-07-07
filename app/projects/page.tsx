import ProjectCard from '@/components/ProjectCard';

async function getProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/projects`, {
    cache: 'no-store', // to always see fresh data during development
  });
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}

export default async function ProjectsOverview() {
  const projects = await getProjects();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Projects Overview
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        All my projects – open source and school work.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}