import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Shield, Award, PenTool as Tool, CheckCircle } from 'lucide-react';
import { CallToAction } from '../components/home/CallToAction';

interface ValueProp {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: ValueProp[] = [
  {
    id: 1,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in all our projects, ensuring durability and performance.',
    icon: <Award className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
  },
  {
    id: 2,
    title: 'Client Satisfaction',
    description: 'We prioritize understanding and meeting our clients\' needs through every project phase.',
    icon: <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
  },
  {
    id: 3,
    title: 'Technical Expertise',
    description: 'Our team comprises skilled professionals who deploy modern technologies in all projects.',
    icon: <Tool className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
  },
  {
    id: 4,
    title: 'Collaborative Approach',
    description: 'We work closely with clients and partners to ensure successful project outcomes.',
    icon: <Users className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
  },
];

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-about-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-primary-900/80" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h1>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-neutral-200">
              Learn about our journey, mission, and commitment to excellence in engineering and construction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-300 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p>
                  Trackdown Engineering and Construction Limited (TEC) is a registered Nigerian engineering firm, incorporated by the Corporate Affairs Commission in 2015. The company specializes in the design, construction, installation, and maintenance of infrastructure and engineering systems across diverse sectors such as construction, energy, water resources, and agriculture.
                </p>
                <p>
                  TEC provides end-to-end engineering solutions including procurement, geophysical investigation, mechanical installation, and technical support. We are committed to executing projects with modern technologies and skilled professionals, ensuring durability, performance, and client satisfaction.
                </p>
                <p>
                  Our work portfolio includes infrastructure development projects in partnership with federal and state ministries, as well as international donor agencies like the World Bank. TEC has successfully delivered water infrastructure, solar-powered systems, and civil works in Kaduna and Kano States, among others.
                </p>
                <p>
                  We maintain a robust maintenance division with experienced technicians and mechanics responsible for the servicing and upkeep of heavy-duty construction equipment, ensuring high performance and minimal equipment downtime on all project sites.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-medium">
                  <img 
                    src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Construction project" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-medium mt-8">
                  <img 
                    src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Engineering team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-medium col-span-2 mt-4">
                  <img 
                    src="https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                    alt="Construction site" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-500 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-300 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Guided by clear purpose and future-focused goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-300 mb-4">
                Our Mission
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                To deliver exceptional engineering and construction solutions through the application of modern technology, skilled workmanship, and innovative project management, while maintaining the highest standards of quality, safety, and customer satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-100 dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-900 dark:text-primary-300 mb-4">
                Our Vision
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                To be the leading engineering and construction company in Nigeria, recognized for our technical expertise, project excellence, and commitment to sustainable infrastructure development that improves communities and contributes to national growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-300 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                className="flex gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 mt-1">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      {/* TODO: implement when team details are provided */}
      {/* <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-900 dark:text-primary-300 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Meet the experienced professionals guiding our company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Sufyanu Mohammed" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300 mb-1">
                  Sufyanu Mohammed
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Managing Director</p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  With over 15 years of experience in engineering and construction management, Sufyanu leads our team with vision and technical expertise.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300 mb-1">
                  Abdul Usman
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Technical Director</p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Abdul oversees all technical aspects of our projects, bringing innovative solutions to complex engineering challenges.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-300 mb-1">
                  Fatima Ibrahim
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Operations Manager</p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Fatima ensures the smooth execution of all operations, maintaining quality and efficiency across all our project sites.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      <CallToAction />
    </div>
  );
};

export default AboutPage;