import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import timepiecesWatch from "@/assets/timepieces-watch.png";

const TimepiecesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  
  return (
    <section id="timepieces" className="relative min-h-screen bg-background py-24 px-8 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={timepiecesWatch}
            alt="Luxury diamond timepiece"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Timepieces
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
            Mastering the Art of Time
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
            Each timepiece is a masterwork of haute horlogerie — pushing the boundaries of 
            mechanical engineering and artistic expression. From astronomical complications 
            to revolutionary movements, every creation tells a story of uncompromising excellence.
          </p>
          <a
            href="#"
            className="inline-block border border-foreground/30 px-10 py-3.5 text-xs font-body tracking-[0.25em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Discover Timepieces
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TimepiecesSection;
