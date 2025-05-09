import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CallToAction } from '../components/home/CallToAction';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import project images
import kadSolarConstruction1 from '../assets/images/projects/kad-state-min-solar-construction.png';
import kadSolarConstruction2 from '../assets/images/projects/kad-state-min-solar-construction2.png';
import cadp20171 from '../assets/images/projects/cadp-2017-1.png';
import cadp20172 from '../assets/images/projects/cadp-2017-2.png';
import cadp20173 from '../assets/images/projects/cadp-2017-3.png';
import cadp20174 from '../assets/images/projects/cadp-2017-4.png';
import cadp20175 from '../assets/images/projects/cadp-2017-5.png';
import cadp20176 from '../assets/images/projects/cadp-2017-6.png';
import cadp20177 from '../assets/images/projects/cadp-2017-7.png';
import cadp20178 from '../assets/images/projects/cadp-2017-8.png';
import cadp20179 from '../assets/images/projects/cadp-2017-9.png';
import nddpSahel20181 from '../assets/images/projects/nddp-sahel-2018-1.png';
import nddpSahel20182 from '../assets/images/projects/nddp-sahel-2018-2.png';
import nddpSahel20183 from '../assets/images/projects/nddp-sahel-2018-3.png';
import nddpSahel20184 from '../assets/images/projects/nddp-sahel-2018-4.png';
import nddpSahel20185 from '../assets/images/projects/nddp-sahel-2018-5.png';
import chineseCampNiger1 from '../assets/images/projects/chinese-camp-niger-2019-1.png';
import chineseCampNiger2 from '../assets/images/projects/chinese-camp-niger-2019-2.png';
import chineseCampNiger3 from '../assets/images/projects/chinese-camp-niger-2019-3.png';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  client: string;
  year: number;
  description: string;
  features: string[];
  imageUrl: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Solar Powered Boreholes',
    category: 'Water Resources',
    location: 'Kudan/Makarfi Local Government, Kaduna State',
    client: 'Kaduna State Ministry of Education',
    year: 2018,
    description: 'Construction of solar-powered borehole systems to provide clean water to educational institutions and surrounding communities in Kudan and Makarfi Local Government areas of Kaduna State.',
    features: [
      'Solar-powered pumping systems',
      'Water storage facilities',
      'Distribution networks',
      'Water treatment systems',
      'Community access points'
    ],
    imageUrl: kadSolarConstruction1,
    gallery: [
      kadSolarConstruction1,
      kadSolarConstruction2
    ]
  },
  {
    id: 2,
    title: 'Commercial Agricultural Development Project',
    category: 'Water Resources',
    location: 'Multiple Locations, Kaduna State',
    client: 'World Bank / CADP Kaduna State',
    year: 2017,
    description: 'Implementation of water supply systems for agricultural development across multiple communities in Kaduna State, funded by the World Bank under the Commercial Agricultural Development Project (CADP).',
    features: [
      'Borehole drilling and installation',
      'Pump testing and commissioning',
      'Water storage and distribution',
      'Technical training for maintenance',
      'Agricultural water supply management'
    ],
    imageUrl: cadp20171,
    gallery: [
      cadp20171,
      cadp20172,
      cadp20173,
      cadp20174
    ]
  },
  {
    id: 3,
    title: 'NDDP, L&Z and Sahel Water Project',
    category: 'Water Resources',
    location: 'Multiple Locations, Kano State',
    client: 'Nigeria Department of Dairy Production (NDDP), L&Z Integrated Farm Ltd and Sahel Consultant',
    year: 2017,
    description: 'Design and installation of solar-powered borehole systems in five communities within Kano State, including Zainawa, Yadakwari, Behun Fulani, Aujarawa, and others to provide water for both community use and dairy farming activities.',
    features: [
      'Solar-powered water pumping systems',
      'Community access points',
      'Water storage tanks',
      'Water troughs for livestock',
      'Sustainable water management training'
    ],
    imageUrl: cadp20175,
    gallery: [
      cadp20175,
      cadp20176,
      cadp20177,
      cadp20178,
      cadp20179
    ]
  },
  {
    id: 4,
    title: 'NDDP, L&Z and Sahel Water Project (Phase 2)',
    category: 'Water Resources',
    location: 'Multiple Locations, Kano State',
    client: 'Nigeria Department of Dairy Production (NDDP), L&Z Integrated Farm Ltd and Sahel Consultant',
    year: 2018,
    description: 'Expansion of the water supply project to additional communities in Kano State, including Tammawa, Zawaciki, Fagi, Yanbawa Warkilla, and Saunawa to support both community water needs and dairy farming activities.',
    features: [
      'Borehole drilling and development',
      'Solar power systems installation',
      'Water storage and distribution',
      'Animal water troughs',
      'Community water access points'
    ],
    imageUrl: nddpSahel20181,
    gallery: [
      nddpSahel20181,
      nddpSahel20182,
      nddpSahel20183,
      nddpSahel20184,
      nddpSahel20185
    ]
  },
  {
    id: 5,
    title: 'Renovation of Block C in Chinese Camp',
    category: 'Construction',
    location: 'Kainji Hydro Power Plant, Niger State',
    client: 'Kainji Hydro Electric Power Plant',
    year: 2019,
    description: 'Renovation and upgrading of Block C facilities in the Chinese Camp at Kainji Hydro Power Plant, Niger State. The project involved comprehensive structural repairs, interior renovations, and modernization of utilities to improve the living and working conditions for staff.',
    features: [
      'Structural repairs and reinforcement',
      'Interior renovations and modernization',
      'Electrical systems upgrade',
      'Plumbing and sanitation improvements',
      'Aesthetic enhancements'
    ],
    imageUrl: chineseCampNiger1,
    gallery: [
      chineseCampNiger1,
      chineseCampNiger2,
      chineseCampNiger3
    ]
  },
  {
    id: 6,
    title: 'Solar Boreholes and Water Troughs',
    category: 'Agriculture',
    location: 'Various Communities, Kano State',
    client: 'Nigeria Department of Dairy Production (NDDP), L&Z Integrated Farm Ltd and Sahel Consultant',
    year: 2019,
    description: 'Construction of solar-powered boreholes and specialized water troughs in various communities throughout Kano State to support dairy farming and animal husbandry activities while also providing clean water for community use.',
    features: [
      'Solar-powered borehole systems',
      'Specialized animal water troughs',
      'Community water access points',
      'Water filtration systems',
      'Sustainable maintenance training'
    ],
    imageUrl: nddpSahel20183,
    gallery: [
      nddpSahel20183,
      nddpSahel20184,
      nddpSahel20185,
      nddpSahel20181
    ]
  }
];

const categories = ['All', 'Water Resources', 'Construction', 'Agriculture', 'Energy'];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
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
            Our Projects
          </motion.h1>
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-neutral-700 dark:text-neutral-300">
              Explore our portfolio of successful engineering and construction projects across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer relative overflow-hidden rounded-lg shadow-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedProject(project)}
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
                    <p className="text-neutral-200 mb-4">{project.location} • {project.year}</p>
                    <span className="inline-block text-white hover:text-secondary-400 transition-colors font-medium">
                      View Details
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <motion.div 
            className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl max-w-4xl max-h-[90vh] overflow-auto w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Image Gallery */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img 
                src={selectedProject.gallery[currentImageIndex]} 
                alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {selectedProject.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-secondary-500 text-primary-900 text-sm font-medium rounded-full mb-3">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-300">
                    {selectedProject.title}
                  </h2>
                </div>
                <div className="mt-4 md:mt-0 text-neutral-600 dark:text-neutral-400">
                  {selectedProject.year}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">Location</h3>
                  <p className="text-neutral-900 dark:text-neutral-200">{selectedProject.location}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">Client</h3>
                  <p className="text-neutral-900 dark:text-neutral-200">{selectedProject.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">Completion</h3>
                  <p className="text-neutral-900 dark:text-neutral-200">{selectedProject.year}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-300 mb-3">Project Overview</h3>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                  {selectedProject.description}
                </p>
                
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-300 mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="rounded-full bg-primary-100 dark:bg-primary-800 p-1 mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-300" />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 flex justify-end">
                <button 
                  onClick={closeModal}
                  className="px-6 py-2 bg-neutral-200 dark:bg-neutral-700 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <CallToAction />
    </div>
  );
};

export default ProjectsPage;