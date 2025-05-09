import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Engineering Excellence & Construction Innovation
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              With over 8 years of expertise, we deliver exceptional engineering and construction 
              solutions across Nigeria's infrastructure development landscape.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="default" size="lg" asChild>
                <a href="/services">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10" asChild>
                <a href="/contact">Get in Touch</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};