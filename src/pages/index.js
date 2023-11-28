import React from 'react';
import { Splash, Projects, Testimonials, ContactSection, Layout } from '@/components';

const Home = () => {
  return (
    <Layout>
      <Splash />
      <Projects />
      <Testimonials />
      <ContactSection />
    </Layout>
  )
};

export default Home;
