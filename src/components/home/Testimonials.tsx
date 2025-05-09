import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  organization: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Trackdown Engineering delivered exceptional results on our water infrastructure project. Their expertise and professionalism ensured timely completion with high-quality standards.",
    name: "Ibrahim Hassan",
    title: "Director",
    organization: "Kaduna State Ministry of Works",
  },
  {
    id: 2,
    quote: "Working with TEC on our solar power implementation was a seamless experience. Their team demonstrated outstanding technical knowledge and dedication throughout the project.",
    name: "Amina Yusuf",
    title: "Project Manager",
    organization: "Kano State Rural Development Authority",
  },
  {
    id: 3,
    quote: "The maintenance services provided by Trackdown Engineering have significantly reduced our equipment downtime and extended the lifespan of our construction machinery.",
    name: "Mohammed Abdul",
    title: "Operations Director",
    organization: "Federal Roads Maintenance Agency",
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-neutral-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-300 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Hear from organizations we've worked with on successful projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="relative overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-700 p-8 md:p-12 shadow-soft">
              <Quote className="absolute top-8 right-8 h-16 w-16 text-primary-200 dark:text-primary-800 opacity-40" />
              
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <blockquote className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 mb-8 relative z-10">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-lg text-primary-700 dark:text-primary-400">{testimonials[currentIndex].name}</div>
                  <div className="text-neutral-600 dark:text-neutral-300">
                    {testimonials[currentIndex].title}, {testimonials[currentIndex].organization}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={handlePrevious}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex 
                        ? 'bg-primary-600 dark:bg-primary-400' 
                        : 'bg-neutral-300 dark:bg-neutral-600'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};