import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <label className="text-sm text-gray-400 font-mono">Name</label>
        <input
          {...register("name")}
          type="text"
          className="w-full bg-gray-900/50 border border-gray-800 rounded p-3 text-white focus:border-neon-cyan focus:outline-none focus:shadow-[0_0_15px_rgba(0,255,198,0.2)] transition-all"
          placeholder="John Doe"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm text-gray-400 font-mono">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full bg-gray-900/50 border border-gray-800 rounded p-3 text-white focus:border-neon-purple focus:outline-none focus:shadow-[0_0_15px_rgba(124,42,232,0.2)] transition-all"
          placeholder="john@example.com"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm text-gray-400 font-mono">Message</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full bg-gray-900/50 border border-gray-800 rounded p-3 text-white focus:border-neon-pink focus:outline-none focus:shadow-[0_0_15px_rgba(255,45,149,0.2)] transition-all resize-none"
          placeholder="Let's build something cool..."
        />
      </div>
      
      <button
        type="submit"
        className="w-full py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-neon-cyan hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
      >
        Send Message
      </button>
    </form>
  );
}
