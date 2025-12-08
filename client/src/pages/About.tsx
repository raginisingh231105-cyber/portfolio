import userData from "@/data/user.json";
import SkillCard from "@/components/SkillCard";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <div className="min-h-screen pt-32 px-8 md:px-20 pb-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
          ABOUT ME
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-cyan/20 transition-colors duration-700" />
              
              <h3 className="text-2xl font-bold mb-4 text-white">Who I Am</h3>
              <div className="text-gray-400 leading-relaxed mb-6 space-y-4">
                {Array.isArray(userData.about) ? (
                  userData.about.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))
                ) : (
                  <p>{userData.about}</p>
                )}
              </div>
              
              <div className="pt-4 border-t border-gray-800">
                <h4 className="text-neon-pink font-mono mb-2 text-sm">EDUCATION</h4>
                {userData.education.map((edu, i) => (
                  <div key={i}>
                    <p className="text-white font-bold">{edu.degree}</p>
                    <p className="text-gray-500 text-sm">{edu.institution} • {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="w-2 h-8 bg-neon-cyan block" />
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {userData.skills.map((skill, i) => (
                  <SkillCard key={i} skill={skill} index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
