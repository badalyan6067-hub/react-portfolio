import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white">
          <span className="text-blue-500">&lt;</span>
          Dev
          <span className="text-blue-500">/&gt;</span>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-blue-500 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden px-6 pb-5 space-y-4 text-gray-300 bg-slate-950">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block hover:text-blue-500 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
