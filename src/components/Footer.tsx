import { Facebook, Instagram, Linkedin, Twitter, MessageCircle, Mail, Phone, MapPin, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.products'), href: "#products" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.contact'), href: "#contact" },
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
              {t('footer.company')}
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/+919529390430" 
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
                href="tel:+919529390430"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-smooth"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.quickLinks')}</h4>
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
            <h4 className="font-display font-semibold mb-4">{t('footer.ourProducts')}</h4>
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
            <h4 className="font-display font-semibold mb-4">{t('footer.contactInfo')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-primary-foreground/60" />
                <div className="text-sm text-primary-foreground/80">
                  {t('contact.info.address')}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <div className="text-sm text-primary-foreground/80">
                  {t('contact.info.phone')}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <div className="text-sm text-primary-foreground/80">
                  {t('contact.info.email')}
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
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-smooth">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">{t('footer.terms')}</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">{t('footer.exportTerms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;