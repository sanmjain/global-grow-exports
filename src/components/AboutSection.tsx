import { Card } from "@/components/ui/card";
import { Shield, Globe, Award, Truck, Heart, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring the highest quality standards for all our exports."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Serving 50+ countries worldwide with reliable shipping and logistics partnerships."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Products",
      description: "All products meet international standards with proper certifications and documentation."
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Reliable Logistics",
      description: "Efficient supply chain management ensuring timely delivery to global destinations."
    }
  ];

  const certifications = [
    "ISO 9001:2015 Certified",
    "FSSAI Licensed",
    "Export License Holder",
    "APEDA Registered",
    "FDA Compliant",
    "Organic Certified"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              About Groww Internationals
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a leading exporter of premium agricultural and food products, 
              committed to delivering excellence in quality and service. Our expertise 
              spans across diverse product categories, ensuring we meet the varied needs 
              of our global clientele.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience in international trade, we have built strong 
              relationships with suppliers and customers worldwide, maintaining the 
              highest standards of quality, compliance, and customer satisfaction.
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center">
                <Heart className="h-5 w-5 text-accent mr-2" />
                Our Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-smooth group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;