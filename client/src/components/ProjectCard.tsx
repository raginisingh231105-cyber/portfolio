export default function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <div 
      className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-neon-purple transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,42,232,0.3)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <h3 className="text-2xl font-bold text-white mb-2 font-mono group-hover:text-neon-cyan transition-colors">
        {project.title}
      </h3>
      
      {project.role && (
        <p className="text-neon-purple text-sm mb-2 font-mono">
          {project.role}
        </p>
      )}
      
      <p className="text-gray-400 mb-4 text-sm">
        {project.description}
      </p>
      
      {project.highlights && Array.isArray(project.highlights) && project.highlights.length > 0 && (
        <ul className="text-gray-400 mb-4 text-xs space-y-1 list-disc list-inside">
          {project.highlights.map((highlight: string, i: number) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      )}
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.split(',').map((tech: string, i: number) => (
          <span key={i} className="text-xs px-2 py-1 border border-gray-700 rounded text-gray-300 group-hover:border-neon-pink group-hover:text-neon-pink transition-colors">
            {tech.trim()}
          </span>
        ))}
      </div>
      
      <button className="w-full py-2 bg-white/5 hover:bg-neon-purple hover:text-white border border-white/10 hover:border-neon-purple rounded font-medium transition-all duration-300">
        View Project
      </button>
    </div>
  );
}
