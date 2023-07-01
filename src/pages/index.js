import { Splash, About, ProjectsSlider } from '@/components';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Splash />
      <About />
       <ProjectsSlider />
    </Layout>
  )
}
