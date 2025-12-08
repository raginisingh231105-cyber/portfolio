import { Link, useLocation } from "wouter";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NavBar() {
  const [location] = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    });
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-sm"
    >
      <Link href="/">
        <a className="text-2xl font-bold tracking-tighter hover:text-neon-cyan transition-colors duration-300 font-sans">
          RAGINI_DEV
        </a>
      </Link>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <a 
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-neon-cyan ${
                location === link.href ? "text-neon-cyan" : "text-gray-400"
              }`}
            >
              {link.label}
              {location === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-neon-pink shadow-[0_0_10px_#FF2D95]" />
              )}
            </a>
          </Link>
        ))}
      </div>
      
      {/* Mobile Menu Icon (Placeholder for now) */}
      <div className="md:hidden text-neon-purple">
        ///
      </div>
    </nav>
  );
}
