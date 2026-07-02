interface SkillCardProps {
  category: string;
  skills: string[];
  icon?: string;
}

export default function SkillCard({ category, skills, icon }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
      <div className="flex items-center gap-2 mb-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
      </div>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}