import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Splash, SplitContent } from '@/components';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Splash backgroundImg='/hong-kong-bg.jpeg' />
      <section>
        <SplitContent imageSrc='/hong-kong-bg.jpeg'>
          <h2>Who we are</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a diam quis lectus iaculis auctor. Nulla id tempor augue. Morbi interdum a urna non sodales.</p>
        </SplitContent>
      </section>
    </Layout>
  )
}
