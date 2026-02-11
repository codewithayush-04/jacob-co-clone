import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const InquireSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
  };

  const inputClasses =
    "w-full bg-transparent border-b border-foreground/20 py-4 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/60 transition-colors duration-300";

  return (
    <section id="inquire" className="relative py-32 md:py-48 px-8 md:px-12 bg-background" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Inquire
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl text-foreground mb-16"
        >
          Get in Touch
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                I. First Name
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                II. Last Name
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                III. Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>
            <div>
              <label className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                IV. Phone
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
              V. Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="border border-foreground/30 px-12 py-4 text-xs font-body tracking-[0.25em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default InquireSection;
