import userData from "@/data/user.json";
import Timeline from "@/components/Timeline";

export default function Experience() {
  return (
    <div className="min-h-screen pt-32 px-8 md:px-20 pb-20 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-pink">
          EXPERIENCE
        </h1>
        
        <div className="glass-panel p-10 rounded-2xl">
           <Timeline items={userData.experience} />
        </div>
      </div>
    </div>
  );
}
