import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  const { t } = useTranslation();
  const whatsappNumber = "+919529390430";
  const whatsappMessage = "Hello! I'm interested in your export services and would like to request a quote.";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Agricultural exports and shipping" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FileText className="h-5 w-5" />
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              {t('hero.whatsapp')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">50+</div>
              <div className="text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">1000+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">ISO</div>
              <div className="text-sm">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;