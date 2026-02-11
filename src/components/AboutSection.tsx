import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 md:py-48 px-8 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-12"
        >
          Inspired by the Impossible
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-12"
        >
          The driving force is creativity and uniqueness.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl"
        >
          Driven by creativity and inspired by the impossible. Since the earliest beginnings 
          in watches and jewelry, the brand has designed the industry's most iconic and innovative 
          products. Today, Jacob & Co. reflects an immutable spirit and insatiable desire to 
          produce beautiful works of art the world has never seen before.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
