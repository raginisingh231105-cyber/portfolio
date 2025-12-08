export default function SkillCard({ skill, index }: { skill: string, index: number }) {
  return (
    <div 
      className="px-4 py-2 bg-gray-900 border border-gray-800 rounded hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,198,0.4)] transition-all duration-300 cursor-default"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <span className="font-mono text-sm text-gray-300 hover:text-white transition-colors">
        {skill}
      </span>
    </div>
  );
}
