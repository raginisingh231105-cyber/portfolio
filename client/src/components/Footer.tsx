export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-gray-500 text-sm border-t border-gray-800">
      <p>
        © {new Date().getFullYear()} Ragini. Built with <span className="text-neon-pink">♥</span> and <span className="text-neon-cyan">Code</span>.
      </p>
    </footer>
  );
}
