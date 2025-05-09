import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-primary-700 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-600 rounded-full translate-y-1/2 -translate-x-1/3 opacity-50" />
          
          <div className="relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your Next Project?
                </h2>
                <p className="text-xl text-neutral-200 mb-8">
                  Contact us today to discuss how we can help bring your vision to life with our engineering and construction expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
                  <a 
                    href="tel:08037623715"
                    className="inline-flex items-center text-white hover:text-secondary-400 transition-colors"
                  >
                    <Phone className="h-6 w-6 mr-3" />
                    <span className="text-lg">08037623715</span>
                  </a>
                  <a 
                    href="mailto:trackdownengineering@gmail.com"
                    className="inline-flex items-center text-white hover:text-secondary-400 transition-colors"
                  >
                    <Mail className="h-6 w-6 mr-3" />
                    <span className="text-lg">trackdownengineering@gmail.com</span>
                  </a>
                </div>
                
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="text-primary-900 font-semibold"
                  asChild
                >
                  <a href="/contact" className="flex items-center justify-center">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};