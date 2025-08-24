import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Code,
      title: t('services.web.title'),
      description: t('services.web.description'),
      color: "text-blue-500"
    },
    {
      icon: Smartphone,
      title: t('services.app.title'), 
      description: t('services.app.description'),
      color: "text-green-500"
    },
    {
      icon: Cloud,
      title: t('services.saas.title'),
      description: t('services.saas.description'),
      color: "text-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="h-full border-border/50 bg-background/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 rounded-lg bg-muted w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;