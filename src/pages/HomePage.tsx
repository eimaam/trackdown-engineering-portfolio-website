import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AboutPreview } from '../components/home/AboutPreview';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { ProjectsShowcase } from '../components/home/ProjectsShowcase';
import { Stats } from '../components/home/Stats';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Stats />
      <AboutPreview />
      <ServicesOverview />
      <ProjectsShowcase />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;