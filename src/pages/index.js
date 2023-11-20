import { Splash, About, Projects } from '@/components';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Splash />
      <Projects />
    </Layout>
  )
}
