import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.products'), href: "#products" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  const whatsappNumber = "+919876543210"; // Replace with actual number
  const whatsappMessage = "Hello! I'm interested in your export services.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-display font-bold text-primary">
              Groww Internationals
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              aria-label={t('home.cta.whatsapp')}
            >
              <MessageCircle className="h-4 w-4" />
              {t('home.cta.whatsapp')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Collapsible open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="md:hidden">
                <div className="py-4 border-t border-border">
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-foreground hover:text-primary transition-smooth font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="flex flex-col space-y-2 pt-4">
                      <LanguageSwitcher />
                      <Button 
                        variant="cta" 
                        size="sm"
                        onClick={() => {
                          window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
                          setIsMenuOpen(false);
                        }}
                        aria-label={t('home.cta.whatsapp')}
                      >
                        <MessageCircle className="h-4 w-4" />
                        {t('home.cta.whatsapp')}
                      </Button>
                    </div>
                  </nav>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;