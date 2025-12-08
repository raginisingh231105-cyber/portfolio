import userData from "@/data/user.json";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 px-8 md:px-20 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">
          PROJECTS
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userData.projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
