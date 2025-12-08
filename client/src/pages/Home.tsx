import { Link } from "wouter";
import userData from "@/data/user.json";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-8 md:px-20 pt-20">
      <div className="max-w-4xl z-10">
        <h2 className="text-neon-cyan font-mono mb-4 animate-pulse-glow text-lg">
          HI, I'M RAGINI
        </h2>
        
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 relative">
          <span className="absolute inset-0 text-neon-purple opacity-30 blur-[2px] animate-glitch" aria-hidden="true">
            {userData.name.toUpperCase()}
          </span>
          <span className="relative z-10 text-white mix-blend-difference">
            {userData.name.toUpperCase()}
          </span>
        </h1>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          {userData.role}
        </h3>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          {userData.tagline}
        </p>
        
        <div className="flex gap-6">
          <Link href="/projects">
            <a className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-neon-cyan hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              View My Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="px-8 py-3 border border-gray-600 text-white font-bold uppercase tracking-wider hover:border-neon-pink hover:text-neon-pink hover:shadow-[0_0_20px_rgba(255,45,149,0.3)] transition-all duration-300">
              Download Resume
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
