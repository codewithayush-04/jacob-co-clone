import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Timepieces", href: "#timepieces" },
  { label: "Partnerships", href: "#partnerships" },
  { label: "About", href: "#about" },
  { label: "Inquire", href: "#inquire" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6">
        <a href="#" className="font-display text-2xl md:text-3xl font-bold tracking-wider text-foreground">
          JACOB&CO
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#inquire"
            className="hidden md:block border border-foreground/30 px-6 py-2 text-xs font-body tracking-[0.25em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Inquire
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`block w-7 h-[1.5px] bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl md:text-6xl text-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
