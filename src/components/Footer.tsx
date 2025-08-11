import { MessageCircle, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    "Basmati Rice",
    "Non-Basmati Rice",
    "Coffee",
    "Spices",
    "Ghee",
    "Raisins",
    "Medicines"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4">
              Groww Internationals
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner in premium agricultural exports. 
              Connecting global markets with quality Indian products.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/+919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@growwinternational.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+919876543210"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-primary-foreground/80 text-sm">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-primary-foreground/60" />
                <div className="text-sm text-primary-foreground/80">
                  Export House, Trade Center<br />
                  Mumbai, Maharashtra, India
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <div className="text-sm text-primary-foreground/80">
                  +91 98765 43210
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <div className="text-sm text-primary-foreground/80">
                  info@growwinternational.com
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-primary-foreground/60" />
                <div className="text-sm text-primary-foreground/80">
                  Serving 50+ Countries
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-primary-foreground/60 mb-4 md:mb-0">
              © {currentYear} Groww Internationals. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Export Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;