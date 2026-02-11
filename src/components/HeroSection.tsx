import { motion } from "framer-motion";
import heroWatch from "@/assets/hero-watch.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
      {/* Watch Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={heroWatch}
          alt="Luxury mechanical timepiece"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/40" />

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-12 pb-12">
        {/* CTA buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            href="#timepieces"
            className="border border-foreground/30 px-8 py-3 text-xs font-body tracking-[0.25em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Discover Timepieces
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            href="#partnerships"
            className="border border-foreground/30 px-8 py-3 text-xs font-body tracking-[0.25em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Explore Partnerships
          </motion.a>
        </div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl italic text-foreground tracking-tight leading-none"
        >
          Inspired by the Impossible
        </motion.h1>
      </div>

      {/* Scroll dots - right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 hidden md:flex">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full border border-foreground/50 ${i === 0 ? "bg-foreground" : "bg-transparent"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
