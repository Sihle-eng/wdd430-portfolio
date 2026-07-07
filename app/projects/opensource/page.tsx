import ProjectCard from '@/components/ProjectCard';

async function getOpenSourceProjects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/projects?type=opensource`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error('Failed to fetch open source projects');
  return res.json();
}

export default async function OpenSourceProjects() {
  const projects = await getOpenSourceProjects();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        Open Source Projects
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Projects I’ve contributed to or built for the community.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.length === 0 ? (
          <p className="text-gray-500">No open source projects yet.</p>
        ) : (
          projects.map((project: any) => (
            <ProjectCard key={project.id} {...project} />
          ))
        )}
      </div>
    </div>
  );
}