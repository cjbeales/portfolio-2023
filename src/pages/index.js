import { Splash, About, Projects, Testimonials } from '@/components';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Splash />
      <Projects />
      <Testimonials />
    </Layout>
  )
}
