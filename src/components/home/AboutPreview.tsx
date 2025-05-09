import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const AboutPreview: React.FC = () => {
  const highlights = [
    "Registered Nigerian engineering firm since 2015",
    "Diverse experience across construction, energy, water resources",
    "Partnerships with federal and state ministries",
    "Projects with international donor agencies",
    "Skilled professionals and modern technology",
  ];

  return (
    <section className="py-20 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-300 mb-6">
              Building Nigeria's Infrastructure Since 2015
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              Trackdown Engineering and Construction Limited (TEC) is a registered Nigerian engineering firm, incorporated by the Corporate Affairs Commission in 2015. We specialize in the design, construction, installation, and maintenance of infrastructure and engineering systems.
            </p>
            
            <ul className="mb-8 space-y-3">
              {highlights.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button variant="default" size="lg" asChild>
              <Link to="/about">More About Us</Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Construction team reviewing plans" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent flex items-end">
                <div className="p-6">
                  <span className="text-white text-lg font-medium">Our skilled team delivering excellence</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-500 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};