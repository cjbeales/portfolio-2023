import { Splash, Projects, Testimonials, ContactSection } from '@/components';
import Layout from '@/components';

export default function Home() {
  return (
    <Layout>
      <Splash />
      <Projects />
      <Testimonials />
      <ContactSection />
    </Layout>
  )
}
