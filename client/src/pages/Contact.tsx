import userData from "@/data/user.json";
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 px-8 md:px-20 pb-20 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            LET'S <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
              CONNECT
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-md">
            Have a project in mind or just want to say hi? I'm always open to new ideas and collaborations.
          </p>
          
          <div className="flex gap-6 mb-6">
            <a 
              href={`mailto:${userData.contact.email}`}
              className="p-4 bg-gray-900 border border-gray-800 rounded-full hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href={userData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 border border-gray-800 rounded-full hover:border-neon-purple hover:text-neon-purple transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href={userData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900 border border-gray-800 rounded-full hover:border-neon-pink hover:text-neon-pink transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          {userData.contact.location && (
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={20} />
              <span>{userData.contact.location}</span>
            </div>
          )}
        </div>
        
        <div className="glass-panel p-8 rounded-2xl border-neon-purple/20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
