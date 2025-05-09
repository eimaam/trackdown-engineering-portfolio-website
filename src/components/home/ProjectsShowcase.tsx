import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { projects as allProjects } from '../../pages/ProjectsPage';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
}

// Use the first three projects from the main projects list
const projects: Project[] = allProjects.slice(0, 3).map(project => ({
  id: project.id,
  title: project.title,
  category: project.category,
  location: project.location,
  imageUrl: project.imageUrl
}));

export const ProjectsShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-100 dark:bg-neutral-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-300 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Explore our portfolio of successful engineering and construction projects across Nigeria.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="outline" size="default" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 bg-secondary-500 text-primary-900 text-sm font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-neutral-200 mb-4">{project.location}</p>
                  <Link 
                    to={`/projects`}
                    className="inline-flex items-center text-white hover:text-secondary-400 transition-colors font-medium"
                  >
                    View Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};