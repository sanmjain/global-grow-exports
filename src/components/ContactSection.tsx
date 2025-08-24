import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    products: [] as string[],
    quantity: ""
  });

  const whatsappNumber = "+919529390430";
  
  const services = [
    "Web Development",
    "Mobile App Development",
    "SaaS Development",
    "UI/UX Design",
    "DevOps & Cloud",
    "Consulting",
    "Maintenance & Support"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your API
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      products: [],
      quantity: ""
    });
  };

  const handleWhatsApp = () => {
    const message = `Hello! I'm interested in your software development services.
    
Services: ${formData.products.length > 0 ? formData.products.join(', ') : 'Multiple services'}
Budget: ${formData.quantity || 'Not specified'}
Name: ${formData.name || 'Not specified'}

Please provide more information about your development process and pricing.`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="font-display font-semibold text-foreground mb-4">
                {t('contact.info.address')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Phone</div>
                    <div className="text-sm text-muted-foreground">{t('contact.info.phone')}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">{t('contact.info.email')}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Address</div>
                    <div className="text-sm text-muted-foreground">
                      {t('contact.info.address')}
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                variant="cta" 
                className="w-full mt-6"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="h-4 w-4" />
                Quick WhatsApp
              </Button>
            </Card>

            {/* Business Hours */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Quote Request Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card border-border/50">
              <h3 className="font-display font-semibold text-foreground mb-6 text-xl">
                Start Your Project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t('contact.form.name')} *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('contact.form.email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="services">{t('contact.form.products')}</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {services.map((service) => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.products.includes(service)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData({...formData, products: [...formData.products, service]});
                              } else {
                                setFormData({...formData, products: formData.products.filter(p => p !== service)});
                              }
                            }}
                            className="rounded border-gray-300"
                          />
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="quantity">{t('contact.form.quantity')}</Label>
                    <Input
                      id="quantity"
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      placeholder="e.g., $5,000 - $20,000"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">{t('contact.form.message')}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" variant="default" className="flex-1">
                    <Send className="h-4 w-4" />
                    {t('contact.form.submit')}
                  </Button>
                  <Button type="button" variant="cta" onClick={handleWhatsApp} className="flex-1">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;