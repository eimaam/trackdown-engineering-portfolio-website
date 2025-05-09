import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Infrastructure Development',
    description: 'Design and development of key infrastructure including roads, bridges, water systems and more.',
    icon: '🏗️',
  },
  {
    id: 2,
    title: 'Engineering Design',
    description: 'Comprehensive engineering design services for construction projects of all sizes and complexities.',
    icon: '📐',
  },
  {
    id: 3,
    title: 'Construction Management',
    description: 'End-to-end project management from planning and procurement through to execution and handover.',
    icon: '👷',
  },
  {
    id: 4,
    title: 'Maintenance',
    description: 'Regular and emergency maintenance services for all types of infrastructure and equipment.',
    icon: '🔧',
  },
  {
    id: 5,
    title: 'Consultancy Services',
    description: 'Expert advisory in engineering design, project planning, feasibility studies, and technical evaluations.',
    icon: '📊',
  },
  {
    id: 6,
    title: 'Solar Solutions',
    description: 'Design and implementation of solar-powered systems for sustainable energy solutions.',
    icon: '☀️',
  },
];

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-300 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            We provide comprehensive engineering and construction solutions tailored to meet the unique needs of each project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-soft p-8 hover:shadow-medium transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300 mb-3">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {service.description}
              </p>
              <Link 
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline text-lg font-medium"
          >
            View all services <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};