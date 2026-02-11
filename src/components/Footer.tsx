const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-8 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold tracking-wider text-foreground mb-6">
              JACOB&CO
            </h3>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              Inspired by the impossible since day one.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Contact Details
            </p>
            <div className="space-y-3 text-sm font-body text-foreground/80">
              <p>Phone: +1 (212) 719-5887</p>
              <p>Email: inquiries@jacobandco.com</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Flagship
            </p>
            <p className="text-sm font-body text-foreground/80">
              48 East 57 Street<br />
              New York, NY 10022
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-muted-foreground tracking-wider">
            © 2025 JACOB & CO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms", "Sitemap"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs font-body text-muted-foreground tracking-wider hover:text-foreground transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
