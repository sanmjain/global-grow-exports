import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
      tech: ["Vue.js", "Express", "PostgreSQL"]
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tech: ["Next.js", "Python", "Redis"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden border-border/50 bg-background hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Button size="sm" variant="secondary" className="w-full">
                      <ExternalLink className="h-4 w-4" />
                      View Details
                    </Button>
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-display text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;