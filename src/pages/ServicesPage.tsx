import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CallToAction } from '../components/home/CallToAction';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 'infrastructure-development',
    title: 'Infrastructure Development',
    description: 'Design and development of key infrastructure including roads, bridges, water systems and more.',
    icon: '🏗️',
    details: [
      'Road and bridge construction',
      'Water supply and treatment systems',
      'Irrigation infrastructure',
      'Public facilities and buildings',
      'Environmental protection structures'
    ],
    imageUrl: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'engineering-design',
    title: 'Engineering Design',
    description: 'Comprehensive engineering design services for construction projects of all sizes and complexities.',
    icon: '📐',
    details: [
      'Architectural and structural design',
      'Mechanical and electrical systems',
      'Site planning and layout',
      'Material specification',
      'Design review and optimization'
    ],
    imageUrl: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'construction-management',
    title: 'Construction Management',
    description: 'End-to-end project management from planning and procurement through to execution and handover.',
    icon: '👷',
    details: [
      'Project planning and scheduling',
      'Resource allocation and management',
      'Quality control and assurance',
      'Budget monitoring and control',
      'Progress reporting and stakeholder communication'
    ],
    imageUrl: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Regular and emergency maintenance services for all types of infrastructure and equipment.',
    icon: '🔧',
    details: [
      'Preventive maintenance programs',
      'Equipment repair and servicing',
      'Facility maintenance',
      'Emergency repair services',
      'Maintenance training and documentation'
    ],
    imageUrl: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'consultancy-services',
    title: 'Consultancy Services',
    description: 'Expert advisory in engineering design, project planning, feasibility studies, and technical evaluations.',
    icon: '📊',
    details: [
      'Technical feasibility studies',
      'Environmental impact assessments',
      'Project viability analysis',
      'Engineering audits and reviews',
      'Regulatory compliance guidance'
    ],
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 'solar-solutions',
    title: 'Solar Solutions',
    description: 'Design and implementation of solar-powered systems for sustainable energy solutions.',
    icon: '☀️',
    details: [
      'Solar power system design',
      'Photovoltaic panel installation',
      'Battery storage solutions',
      'Solar water pumping systems',
      'Renewable energy integration'
    ],
    imageUrl: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

const ServicesPage: React.FC = () => {
  const [expandedService, setExpandedService] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-100 dark:bg-neutral-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-primary-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-neutral-700 dark:text-neutral-300">
              We provide comprehensive engineering and construction solutions tailored to the unique needs of each project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-300">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                      {service.description}
                    </p>
                    
                    <div>
                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-4"
                        aria-expanded={expandedService === service.id}
                      >
                        {expandedService === service.id ? (
                          <>
                            <span>Show less</span>
                            <ChevronUp className="ml-2 h-5 w-5" />
                          </>
                        ) : (
                          <>
                            <span>Show more</span>
                            <ChevronDown className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{ 
                          height: expandedService === service.id ? 'auto' : 0,
                          opacity: expandedService === service.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 mb-6">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="rounded-full bg-primary-100 dark:bg-primary-800 p-1 mr-3 mt-1">
                                <div className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-300" />
                              </div>
                              <span className="text-neutral-700 dark:text-neutral-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-lg overflow-hidden shadow-medium">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent flex items-end">
                        <div className="p-6">
                          <span className="text-white font-medium">{service.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-300 mb-4">
              Our Work Process
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              We follow a structured approach to ensure quality and efficiency in every project
            </p>
          </div>

          <div className="relative">
            {/* Process line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 dark:bg-primary-700 transform -translate-x-1/2 z-0" />
            
            <div className="space-y-16 relative z-10">
              {[
                { 
                  step: 1, 
                  title: 'Consultation & Planning', 
                  description: 'We begin with thorough consultation to understand your needs, goals, and constraints, followed by detailed planning and feasibility studies.' 
                },
                { 
                  step: 2, 
                  title: 'Design & Engineering', 
                  description: 'Our engineering team develops comprehensive designs, incorporating technical specifications, material requirements, and compliance with regulatory standards.' 
                },
                { 
                  step: 3, 
                  title: 'Procurement & Mobilization', 
                  description: 'We source high-quality materials and equipment, ensuring value for money while assembling the right team and resources for project execution.' 
                },
                { 
                  step: 4, 
                  title: 'Execution & Construction', 
                  description: 'Implementation follows strict quality control protocols with regular progress monitoring, ensuring adherence to timelines and specifications.' 
                },
                { 
                  step: 5, 
                  title: 'Quality Assurance & Handover', 
                  description: 'Rigorous testing and quality checks precede project handover, along with complete documentation and training for maintenance where applicable.' 
                }
              ].map((process, index) => (
                <motion.div 
                  key={process.step}
                  className="flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-full md:w-1/2 px-4 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:order-2 md:text-left md:pl-16'}`}>
                    <h3 className="text-2xl font-semibold text-primary-800 dark:text-primary-300 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {process.description}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0 my-6 md:my-0 z-20">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 dark:bg-primary-500 text-white font-bold text-xl shadow-medium">
                      {process.step}
                    </div>
                  </div>
                  
                  <div className={`w-full md:w-1/2 px-4 ${index % 2 === 0 ? 'md:order-2' : 'md:pr-16'} md:invisible`}>
                    {/* This is just to maintain the layout for odd/even items */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default ServicesPage;