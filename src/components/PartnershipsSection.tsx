import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import partnershipsImg from "@/assets/partnerships.png";

const PartnershipsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });


  
  return (
    <section id="partnerships" className="relative min-h-screen bg-background py-24 px-8 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <p className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Partnerships
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-8">
            Extraordinary Collaborations
          </h2>
          <p className="font-body text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
            Through visionary partnerships with the world's most prestigious automotive and 
            lifestyle brands, we create limited-edition timepieces that transcend conventional 
            watchmaking and redefine luxury.
          </p>
          <a
            href="#"
            className="inline-block border border-foreground/30 px-10 py-3.5 text-xs font-body tracking-[0.25em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Discover Partnerships
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="order-1 md:order-2"
        >
          <img
            src={partnershipsImg}
            alt="Luxury automotive partnership"
            className="w-full max-w-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
