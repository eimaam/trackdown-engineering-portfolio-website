import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  id: number;
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: '8+',
    label: 'Years Experience',
  },
  {
    id: 2,
    value: '50+',
    label: 'Projects Delivered',
  },
  {
    id: 3,
    value: '20+',
    label: 'Skilled Professionals',
  },
  {
    id: 4,
    value: '10+',
    label: 'Government Partnerships',
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-primary-800 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-200 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};