import SkillCard from '@/components/SkillCard';

const skillsData = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Prisma', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">About Me</h2>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        Hello! I'm Sihlelelwe Mchobokazi, a passionate full-stack developer with a
        love for building modern web applications. I enjoy working with
        TypeScript, React, and Next.js to create performant, user-friendly
        experiences. Currently, I'm deepening my knowledge of the Next.js App
        Router and server-side rendering patterns.
      </p>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Technical Skills
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {skillsData.map((skillGroup, index) => (
            <SkillCard
              key={index}
              category={skillGroup.category}
              icon={skillGroup.icon}
              skills={skillGroup.skills}
            />
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
        <p className="text-gray-700">
          📫 Feel free to reach out at{' '}
          <a
            href="mailto:sihle@example.com"
            className="text-blue-600 hover:underline"
          >
            sihle@example.com
          </a>
        </p>
      </div>
    </div>
  );
}